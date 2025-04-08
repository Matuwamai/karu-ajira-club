import express from 'express';
import {
  createPost,
  getVerifiedPosts,
  getPostById,
  updatePost,
  deletePost,
  verifyPost,
  getPostsByUser
} from '../controllers/post.js'
import { authenticateUser, authorizeRole} from '../middlewares/auth.js';

const router = express.Router();
router.post('/', authenticateUser, createPost);
router.get('/', authenticateUser, getVerifiedPosts);
router.get('/:id', authenticateUser, getPostById); 
router.get('/user/:userId', authenticateUser, getPostsByUser);
router.put('/:id', authenticateUser, updatePost);
router.delete('/:id',  authenticateUser, deletePost);
router.put('/verify/:id',  authenticateUser, authorizeRole, verifyPost);

export default router;
