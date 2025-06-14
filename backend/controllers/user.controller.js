import User from "../model/user.model.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import OTP from "../model/otp.model.js";
import nodemailer from "nodemailer";


// Register Controller: Step 1
export const registerController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { username, email, password } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email already in use" });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedPassword = await bcrypt.hash(password, 10);

    // Optional: Clear old OTPs
    await OTP.deleteMany({ email });

    // Save OTP record
    const response = await OTP.create({
      username,
      email,
      password: hashedPassword,
      otp,
    //    createdAt: new Date() 
    });

    // Setup email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send OTP via email
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}`,
    });

    console.log(`✅ OTP for ${email} is ${otp}`);

    return res.status(200).json({ msg: "OTP sent to your email." });
  } catch (error) {
    console.error("❌ Error in registerController:", error);
    return res.status(500).send("Internal Server Error");
  }
};



export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    if (!email || !otp) {
      return res.status(400).json({ msg: "Email and OTP are required" });
    }

    const tempUser = await OTP.findOne({ email }).sort({ createdAt: -1 });

    if (!tempUser) {
      return res.status(400).json({ msg: "OTP expired or not requested" });
    }

    if (tempUser.otp !== otp) {
      return res.status(400).json({ msg: "Invalid OTP" });
    }

    // Create user from tempUser
    const newUser = new User({
      username: tempUser.username,
      email: tempUser.email,
      password: tempUser.password,
    });

    await newUser.save();
    await OTP.deleteMany({ email });

    return res.status(201).json({ msg: "Account created successfully!" });
  } catch (error) {
    console.error("❌ Error in verifyOTP:", error);
    return res.status(500).json({ msg: "Server error" });
  }
};

export const loginController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        errors: "Invalid credentials",
      });
    }

    const isMatch = await user.isValidPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        errors: "Invalid credentials",
      });
    }

    const token = await user.generateJWT();

    delete user._doc.password;

    res.status(200).json({ user, token });
  } catch (err) {
    console.log(err);

    res.status(400).send(err.message);
  }
};
