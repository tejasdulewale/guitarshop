import express from 'express';
import userController from '../controllers/userController.js';


const router = express.Router();

const userRegister = router.post('/register',userController)


export default userRegister;