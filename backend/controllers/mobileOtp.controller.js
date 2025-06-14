import dotenv from 'dotenv';
import OtpNumber from "../model/mobile.otp.model.js";
// import twilio from 'twilio';

// dotenv.config();  // Ensure environment variables are loaded

// const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export const sentOtpMobile = async (req, res) => {
  const { phoneNumber } = req.body;
  // console.log("Twilio SID:", process.env.TWILIO_SID);
  // console.log("Twilio Auth Token:", process.env.TWILIO_AUTH_TOKEN);
  // console.log("Twilio Phone Number:", process.env.TWILIO_PHONE_NUMBER);
  // console.log("User Phone Number:", phoneNumber);

  if (!phoneNumber) {
    return res.status(400).json({ message: "Phone number is required" });
  }

  // Format phone number to E.164 format
  const formattedPhoneNumber = phoneNumber.startsWith("+") ? phoneNumber : `+91${phoneNumber}`;

  // Generate a random OTP (6 digits)
  // const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Save OTP in MongoDB with expiration (5 minutes)
  const otpRecord = new OtpNumber({
    phoneNumber: formattedPhoneNumber,
  //otp
    // expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes expiration
  });

  try {
    await otpRecord.save();

    // Send OTP via SMS using Twilio
    // await client.messages.create({
    //   body: `Your OTP is ${otp}`,
    //   from: "+918840608263",
    //   to: "8573916255",
    // });

    res.status(200).json({ message: "Mobile number register successfully" });
  } catch (error) {
    console.error("Error sending OTP via Twilio:", error);
    res.status(500).json({ message: "Failed to phoneNumber" });
  }
};

// export const verifyOtpMobile = async (req, res) => {
//   const { phoneNumber, otp } = req.body;

//   if (!phoneNumber || !otp) {
//     return res.status(400).json({ message: "Phone number and OTP are required" });
//   }

//   try {
//     const otpRecord = await OtpNumber.findOne({ phoneNumber, otp });

//     if (!otpRecord) {
//       return res.status(400).json({ message: "Invalid OTP" });
//     }

//     if (otpRecord.expiresAt < new Date()) {
//       return res.status(400).json({ message: "OTP expired" });
//     }

//     res.status(200).json({ message: "OTP verified successfully" });
//   } catch (error) {
//     console.error("Error verifying OTP:", error);
//     res.status(500).json({ message: "Failed to verify OTP" });
//   }
// }