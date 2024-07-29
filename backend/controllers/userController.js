import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

const JWT_SECRET_KEY = "nfdandfadsiofs23443";


export const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "Incomplete data" });
        }
        user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, message: "Email already exist" });
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        let newUser = await userModel.create({ name, email, password: hashedPassword });
        return res.status(201).json({ success: true, message: "User Created Successfully", newUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}
export const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user;
        user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User does not exists" });
        }
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ success: false, message: "Password Incorrect" });
        }
        const token = jwt.sign({ id: user._id }, JWT_SECRET_KEY);
        res.status(200).json({ success: true, message: "Login Successful", token })

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}