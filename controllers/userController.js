import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import userController from '../controllers/userController.js';
import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';


const userRegister = async (req, res) => {
	const { username, email, password, phoneNumber, address } = req.body; // object destructuring

	let user = await userModel.find({email})
		if(user.length>0){
			return res.status(502).send("User already exists with this email");
		}

			bcrypt.genSalt(12,(err,salt)=>{
			bcrypt.hash(password,salt, async(err,result)=>{
				await userModel.create({
					username,
						email,
						password:result,
						phoneNumber, 
						address, 
		})
		const token = jwt.sign({email},process.env.SECRETKEY)
		res.cookie("token",token)
	})

})


	res.send("User registered successfully");
}

export default userRegister;
