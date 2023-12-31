import express from 'express';

import { createPost, updatePost, deletePost, getPost, getAllPosts, likePost, clapPost } from '../controller/post-controller.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import { newComment, getComments, getComment, deleteComment } from '../controller/comment-controller.js';



import { singupUser, loginUser, updateUser } from '../controller/user-controller.js';


import { authenticateToken, createNewToken } from '../controller/jwt-controller.js';

import upload from '../utils/upload.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', singupUser);
router.put('/updateUser', authenticateToken, updateUser);

router.post('/create', authenticateToken, createPost);
router.put('/update/:id', authenticateToken, updatePost);
router.delete('/delete/:id', authenticateToken, deletePost);

router.post('/token', createNewToken);

router.put('/likePost/:id', authenticateToken, likePost);
router.put('/clapPost/:id', authenticateToken, clapPost);

router.get('/post/:id', authenticateToken, getPost);
router.get('/posts', authenticateToken, getAllPosts);

router.post('/file/upload', upload.single('file'), uploadImage);

router.post('/comment/new', authenticateToken, newComment);
router.get('/comment/:id', authenticateToken, getComments);
router.get('/comment', authenticateToken, getComment);
router.delete('/comment/delete/:id', authenticateToken, deleteComment);

export default router;