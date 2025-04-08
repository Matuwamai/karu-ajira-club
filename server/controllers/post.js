import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createPost = async (req, res) => {
  const { userId, mediaUrl, content, role } = req.body;
  try {
    const isVerified = role === 'ADMIN';

    const post = await prisma.post.create({
      data: {
        userId,
        mediaUrl,
        content,
        isVerified
      },
    });

    res.status(201).json(post);
  } catch (error) {
    console.error('Create Post Error:', error);
    res.status(500).json({ message: 'Failed to create post' });
  }
};
export const getPostsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const posts = await prisma.post.findMany({
      where: {
        userId: Number(userId), 
      },
      include: {
        user: true,
      },
    });

    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts by user:', error);
    res.status(500).json({ message: 'Failed to fetch posts for this user' });
  }
};

export const getVerifiedPosts = async (_req, res) => {
  try {
    const posts = await prisma.post.findMany({
      where: { isVerified: true },
      include: { user: true },
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
};
export const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await prisma.post.findUnique({
      where: { id: Number(id) },
      include: { user: true },
    });

    if (!post) return res.status(404).json({ message: 'Post not found' });

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get post' });
  }
};
export const verifyPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: { isVerified: true },
    });

    res.json({ message: 'Post verified successfully', post });
  } catch (error) {
    res.status(500).json({ message: 'Failed to verify post' });
  }
};
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { content, mediaUrl } = req.body;

  try {
    const updated = await prisma.post.update({
      where: { id: Number(id) },
      data: { content, mediaUrl },
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update post' });
  }
};
export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.post.delete({ where: { id: Number(id) } });
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete post' });
  }
};
