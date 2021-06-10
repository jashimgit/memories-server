import express from 'express';
import { getPost } from '../controllers/postControllers.js';

const Router = express.Router();
// import { getPost } from '../controllers/postControllers';



// http://localhost:8000/posts

Router.get('/', getPost)


export default Router;