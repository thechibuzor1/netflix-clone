import express from "express";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import User from "../models/user.js";
import { isAuth, generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    const token = generateToken(newUser);
    res.send({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token: token,
    });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid password" });
    }
    const token = generateToken(user);
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: token,
    });
  })
);

userRouter.get(
    "/me",
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id);
        res.send(user);
        }
    )
);

userRouter.get(
    "/:id",
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        res.send(user);
        }
    )
);

export default userRouter;