import express from "express"
import bcrypt from "bcryptjs";
import Otp from "../model/otp.model.js"
import User from "../model/user.model.js";
import { sendOtp } from "../controllers/sendOtp.controller.js";

const router = express.Router();

// Step 1: Send OTP
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await Otp.deleteMany({ email }); // Remove old OTPs
  await Otp.create({ email, otp });

  await sendOtp(email, otp);

  res.json({ msg: "OTP sent to email" });
});

// Step 2: Verify OTP and Register
router.post("/verify-otp", async (req, res) => {
  const { username, email, password, otp } = req.body;

  const otpRecord = await Otp.findOne({ email });
  if (!otpRecord) return res.status(400).json({ msg: "OTP expired or not found" });

  if (otpRecord.otp !== otp) return res.status(400).json({ msg: "Invalid OTP" });

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ username, email, password: hashedPassword });

  await Otp.deleteMany({ email }); // Clean up

  res.json({ msg: "Account created successfully" });
});

export default router;
