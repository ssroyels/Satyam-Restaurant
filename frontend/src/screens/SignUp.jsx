import React, { useState } from "react";
import axios from "../config/axios.js";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* --------------------------- SEND OTP --------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await axios.post(
        "/users/register",
        formData,
        { withCredentials: true }
      );

      setMessage(res.data.msg || "OTP sent successfully");
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.msg || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  /* --------------------------- VERIFY OTP --------------------------- */
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await axios.post(
        "/users/verifyOtp",
        { email: formData.email, otp },
        { withCredentials: true }
      );

      setMessage(res.data.msg || "Account verified");
      navigate("/foodItems");
    } catch (err) {
      setError(err.response?.data?.msg || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-2">
          Singh Restaurant
        </h2>
        <p className="text-center text-gray-500 mb-6">
          {step === 1 ? "Create your account" : "Verify OTP"}
        </p>

        {/* Messages */}
        {message && (
          <p className="text-green-600 text-sm text-center mb-3">
            {message}
          </p>
        )}
        {error && (
          <p className="text-red-600 text-sm text-center mb-3">
            {error}
          </p>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition disabled:opacity-60"
            >
              {loading ? "Sending OTP..." : "Create Account"}
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-600 font-semibold hover:underline">
                Login
              </Link>
            </p>
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none text-center tracking-widest"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition disabled:opacity-60"
            >
              {loading ? "Verifying..." : "Verify & Continue"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;









