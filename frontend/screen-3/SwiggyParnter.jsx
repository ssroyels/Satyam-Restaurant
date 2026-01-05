import React, { useState } from "react";
import axios from "../src/config/axios.js";
import { useNavigate } from "react-router-dom";

const SinghPartner = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!value.trim()) {
      setError("Please enter a mobile number or restaurant ID.");
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        "/Mobile/sendNumber",
        { phoneNumber: value },
        { withCredentials: true }
      );

      navigate("/SinghReastaurentOffer");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1500&q=80"
          alt="Partner with Singh Restaurant"
          className="w-full h-[420px] object-cover opacity-60"
        />

        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold tracking-widest bg-orange-500 text-white rounded-full">
              PARTNER WITH SINGH RESTAURANT
            </span>

            <h1 className="text-3xl md:text-4xl font-extrabold mt-4">
              Reach more customers.<br />Grow your restaurant business.
            </h1>

            <p className="mt-4 text-gray-200 text-sm">
              Join thousands of restaurant partners delivering food with Singh
              Restaurant.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-xl w-full max-w-sm p-6">
            <h2 className="text-lg font-bold mb-2">Get Started</h2>
            <p className="text-sm text-gray-600 mb-4">
              Enter your mobile number or restaurant ID
            </p>

            {error && (
              <p className="text-sm text-red-600 mb-3">{error}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Mobile number / Restaurant ID"
                className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
                aria-label="Mobile number or Restaurant ID"
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 rounded-md font-semibold text-white transition ${
                  loading
                    ? "bg-orange-400 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {loading ? "Please wait..." : "Continue"}
              </button>

              <p className="text-xs text-gray-500">
                By continuing, you agree to Singh Restaurant’s{" "}
                <span className="underline">Terms & Conditions</span>.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ================= STEPS ================= */}
      <section className="py-14 px-6 md:px-16 bg-white grid md:grid-cols-2 gap-8">
        
        {/* Steps */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
          <span className="text-xs text-gray-500">
            In just 3 easy steps
          </span>
          <h2 className="text-xl font-bold mt-2 mb-6">
            Get delivery-ready in 24 hours
          </h2>

          <div className="space-y-6 text-sm">
            {[
              "Install the Singh Restaurant Owner App",
              "Login or register using your phone number",
              "Enter restaurant details & documents",
            ].map((step, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-orange-500 font-bold">
                  STEP {index + 1}
                </span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 shadow-sm">
          <h3 className="font-semibold mb-2">
            Keep these documents ready
          </h3>

          <ul className="text-sm space-y-2 text-gray-700">
            <li>• FSSAI License</li>
            <li>• Restaurant menu</li>
            <li>• Bank account details</li>
            <li>• GSTIN</li>
            <li>• PAN card</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SinghPartner;
