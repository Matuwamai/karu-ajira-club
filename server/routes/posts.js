import express from 'express';
import {
  createPost,
  getVerifiedPosts,
  getPostById,
  updatePost,
  deletePost,
  verifyPost,
} from '../controllers/users.js'

const router = express.Router();

router.post('/', createPost);
router.get('/', getVerifiedPosts);
router.get('/:id', getPostById); 
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.put('/verify/:id', verifyPost);

export default router;
