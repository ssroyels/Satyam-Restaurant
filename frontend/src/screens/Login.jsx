import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://satyam-restaurant.onrender.com/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.msg || "Invalid credentials");
      }

      localStorage.setItem("token", data.token);
      navigate("/foodItems");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900 px-4">
      
      {/* ================= CARD ================= */}
      <div className="relative w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 p-8">
        
        {/* Glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-500/20 blur-3xl rounded-full" />

        <h1 className="relative text-3xl font-extrabold text-white text-center mb-2">
          Welcome Back
        </h1>
        <p className="relative text-center text-gray-300 mb-6">
          Login to <span className="text-orange-400 font-semibold">Singh Restaurant</span>
        </p>

        {error && (
          <p className="relative text-red-400 text-sm text-center mb-4">
            {error}
          </p>
        )}

        {/* ================= FORM ================= */}
        <form onSubmit={submitHandler} className="relative space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg bg-white/90 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-lg bg-white/90 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-lg py-3 font-semibold transition-all ${
              loading
                ? "bg-orange-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
            } text-white`}
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <p className="relative text-sm text-center text-gray-300 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-400 font-semibold hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
