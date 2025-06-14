import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  phoneNumber: String,

});

const OtpNumber = mongoose.model("OtpNumber", otpSchema);

export default  OtpNumber;
