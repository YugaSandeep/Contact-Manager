import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//@desc Register the user
//@route POST api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const isUserThere = await User.findOne({ email });
    if(isUserThere) {
        res.status(400);
        throw new Error("User aready exists !");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    // console.log("hashed pass - ", hashedPassword);
    if(user) {
        res.status(201).json({
            _id: user.id,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }
    // res.status(200).json(user);
});

//@desc Login the user
//@route POST api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }

    const user = await User.findOne({ email });
    if(user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            }, 
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        )
        res.status(200).json({ accessToken });
    } else {
        res.status(400);
        throw new Error("Email or Password in not valid bro !");
    }
});


//@desc Infomation of user
//@route GET api/users/info
//@access public
const userInfo = asyncHandler(async (req, res) => {
    res.json(req.user);
});
export { registerUser, loginUser, userInfo };