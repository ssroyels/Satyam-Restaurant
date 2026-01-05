import React, { useState } from "react";
import axios from "../config/axios.js";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaXTwitter,
} from "react-icons/fa6";

const ContactSupport = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!fullName || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        "/support/supportmsg",
        { FullName: fullName, Email: email, Message: message },
        { withCredentials: true }
      );

      setSuccess("Your message has been sent successfully!");
      setFullName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-tr from-[#f5f6fa] via-[#fdf1f1] to-[#f7f5ff] px-6 py-16 flex flex-col md:flex-row gap-12 items-start">

      {/* ================= LEFT INFO ================= */}
      <div className="max-w-lg space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Contact Singh Restaurant
        </h1>

        <p className="text-lg text-gray-700">
          Email:{" "}
          <span className="text-orange-500 font-semibold">
            support@singhrestaurant.in
          </span>
        </p>

        <div>
          <h2 className="text-lg font-semibold mb-2">Follow us</h2>
          <div className="flex gap-4 text-orange-500 text-xl">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaPinterest />
            <FaXTwitter />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Corporate Office</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            No. 55, Sy No. 8–14, Ground Floor, I&J Block, Embassy TechVillage,
            Outer Ring Road, Devarabisanahalli, Bengaluru 560103, Karnataka,
            India.
          </p>
        </div>

        <button className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow">
          Get Directions
        </button>
      </div>

      {/* ================= CONTACT FORM ================= */}
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Get in touch
        </h2>

        {error && (
          <p className="mb-4 text-sm text-red-600">{error}</p>
        )}
        {success && (
          <p className="mb-4 text-sm text-green-600">{success}</p>
        )}

        <form onSubmit={submitHandler} className="space-y-5">
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-orange-500 outline-none"
            aria-label="Full name"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-orange-500 outline-none"
            aria-label="Email"
          />

          <textarea
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-orange-500 outline-none"
            aria-label="Message"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-full px-6 py-2 font-semibold text-white transition ${
              loading
                ? "bg-orange-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

        <p className="text-xs text-gray-600 mt-4">
          By contacting us, you agree to our{" "}
          <span className="text-orange-600 font-semibold">
            Terms & Conditions
          </span>{" "}
          and{" "}
          <span className="text-orange-600 font-semibold">
            Privacy Policy
          </span>.
        </p>
      </div>
    </section>
  );
};

export default ContactSupport;
