import express from 'express';
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  getUsersByRole,} from "../controllers/users.js"

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.get('/role/:role', getUsersByRole); 

export default router;
