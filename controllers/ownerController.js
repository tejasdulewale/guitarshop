import dotenv from "dotenv";
dotenv.config();
import ownerModel from "../models/ownersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ownerRegister = async (req, res) => {
  const { name, email, password, gstno } = req.body; // object destructuring
  let owner = await ownerModel.find();
  if (owner.length > 0) {
    return res.status(502).send("you dont have an any permission ");
  }
  bcrypt.genSalt(12, (err, salt) => {
    bcrypt.hash(password, salt, async (err, result) => {
      let newOwner = await ownerModel.create({
        name,
        email,
        password: result,
        gstno,
      });
    });
    const token = jwt.sign({ email }, process.env.SECRETKEY);
    res.cookie("ownerToken", token);
    res.send("owner registered successfully");
  });
};

const ownerLogin = async (req,res) => {
  const { email, password } = req.body;

  let owner = await ownerModel.findOne({ email });
  if (!owner) {
    return res.status(401).send("no user find with this email");
  }

  let ismatch = await bcrypt.compare(password, owner.password);
  if (!ismatch) {
    return res.status(401).send("invalid user");
  }
  const token = jwt.sign({ email }, process.env.SECRETKEY);
  res.cookie("token",token
  );
  res.status(200).send("you are loggin sucessfully");
};

export default { ownerRegister, ownerLogin };
