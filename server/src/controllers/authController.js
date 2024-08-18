import User from "../models/User.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        //search user where email is equal to email
        const user = await User.findOne({ email: email })
        if (!user) return res.status(400).json({ message: 'User not found' });
        const isMatch = user.password === password;
        if (!isMatch) return res.status(400).json({ message: 'Invalid password' });
        const payload = { userId: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        res.json({ token });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}