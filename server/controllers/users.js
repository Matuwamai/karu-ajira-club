import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey'; 
export const registerUser = async (req, res) => {
  const { name, email, idNumber, phone, profileImage, regNo, password, role } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ message: 'Email already in use.' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        idNumber,
        phone,
        profileImage,
        regNo,
        role,
        password: hashedPassword,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error });
  }
};
export const getAllUsers = async (_, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch users', error });
  }
};
export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};
export const getUsersByRole = async (req, res) => {
  const { role } = req.params;

  try {
    const users = await prisma.user.findMany({
      where: { role: role.toUpperCase() },
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users by role', error });
  }
};
