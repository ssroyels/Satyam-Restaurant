import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("https://satyam-restaurant.onrender.com/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      },{ withCredentials: true
});
      setLoading(false);

      const data = await res.json();
      if (!res.ok) {
        alert(data?.msg || "Invalid credentials");
      } else {
        alert("Login successful!");
        localStorage.setItem("token", data.token);
        navigate("/foodItems");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-red-50 via-orange-100 to-yellow-50 flex items-center justify-center overflow-hidden px-4">
      
      {/* Floating Background Dishes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=100"
          alt="Dish 1"
          className="absolute w-28 sm:w-32 top-10 left-6 sm:left-10 opacity-80 animate-[floatUpDown_2s_ease-in-out_infinite]"
        />
        <img
          src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1200&q=100"
          alt="Dish 2"
          className="absolute w-36 sm:w-40 bottom-10 right-8 sm:right-16 opacity-90 animate-[floatUpDown_2s_ease-in-out_infinite]"
        />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 bg-white/80 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
        
        {/* Left Side */}
        <div className="hidden md:flex items-center justify-center bg-white/10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="Food Icon"
            className="w-60 h-60 object-contain hover:scale-105 transition"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="p-8 flex flex-col justify-center relative">
          <h2 className="text-4xl font-extrabold text-orange-600 mb-2">
            Welcome Back!
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            Sign in to <strong>Singh Restaurant</strong>
          </p>

          <form onSubmit={submitHandler} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 text-black rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full text-black p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-orange-500 text-white font-semibold py-2 rounded-md transition ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600"
              }`}
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-5">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-orange-600 underline">
              Create one
            </Link>
          </p>
        </div>
      </div>

      {/* Inline custom animation for floatUpDown */}
      <style>
        {`
          @keyframes floatUpDown {
            0%, 100% { transform: translateY(40px); }
            50% { transform: translateY(-40px); }
          }
        `}
      </style>
    </div>
  );
};

export default Login;





