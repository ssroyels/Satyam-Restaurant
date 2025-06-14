import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const floatingTexts = [
  "Welcome to Singh Restaurant",
  "Delicious Food Served Fresh",
  "Your Hunger, Our Priority",
  "Fast Delivery & Tasty Meals",
];

const SignUp = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [floatingIndex, setFloatingIndex] = useState(0);
  const [floatingVisible, setFloatingVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingIndex((prev) => (prev + 1) % floatingTexts.length);
      setFloatingVisible(true);
    }, 3000);

    const handleMouseMove = () => setFloatingVisible(false);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/users/register', formData);
      setMessage(res.data.msg);
      setStep(2);
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Error sending OTP');
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/users/verifyOtp', {
        email: formData.email,
        otp,
      });
      setMessage(res.data.msg);
      setFormData({ username: '', email: '', password: '' });
      setOtp('');
      navigate('/foodItems');
    } catch (err) {
      setMessage(err.response?.data?.msg || 'OTP verification failed');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-red-100 to-pink-200 overflow-hidden">
      {floatingVisible && (
        <div className="absolute top-5 w-full text-center z-10 animate-pulse text-xl font-semibold text-red-600 tracking-wide">
          {floatingTexts[floatingIndex]}
        </div>
      )}

      <div className="relative z-20 max-w-md w-full bg-white p-6 rounded-xl shadow-2xl backdrop-blur-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-orange-600">
          {step === 1 ? 'Sign Up & Get OTP' : 'Verify OTP'}
        </h2>

        {message && <p className="text-sm text-green-600 mb-3 text-center">{message}</p>}

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;








