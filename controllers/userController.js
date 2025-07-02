import dotenv from "dotenv";
dotenv.config();

import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";

const userRegister = async (req, res) => {
  const { username, email, password, phoneNumber, address } = req.body; // object destructuring

  let user = await userModel.find({ email });
  if (user.length > 0) {
    return res.status(502).send("User already exists with this email");
  }
  bcrypt.genSalt(12, (err, salt) => {
    bcrypt.hash(password, salt, async (err, result) => {
      await userModel.create({
        username,
        email,
        password: result,
        phoneNumber,
        address,
      });
      const token = jwt.sign({ email }, process.env.SECRETKEY);
      res.cookie("token", token);
    });
  });
  res.send("User registered successfully");
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  let user = await user.findOne({ email });
  if (!user) {
    return res.status(402).send("no user with this email");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(402).send("Invalide credential");
  }
  const token = jwt.sign({ email }, process.env.SECRETKEY);
  res.cookie("token", token);
  res.send("user login sucessfully");
};

export default { userRegister, userLogin };
