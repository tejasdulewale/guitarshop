import express from 'express';
import {userRegister,userLogin} from '../controllers/userController.js';


const router = express.Router();

const userRegister = router.post('/register',userRegister)
const userLogin = router.post('/login',userLogin)


export default {userRegister,userLogin}