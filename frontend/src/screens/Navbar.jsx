import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://png.pngtree.com/template/20190223/ourmid/pngtree-restaurant-logo-image_58802.jpg"
              alt="Singh Restaurant"
              className="h-10 w-10 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-gray-800">
              Singh Restaurant
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <Link to="/route-2" className="hover:text-orange-500 transition">
              Corporate
            </Link>
            <Link to="/route-3" className="hover:text-orange-500 transition">
              Partner with us
            </Link>
            <button className="border border-orange-500 text-orange-500 px-4 py-1.5 rounded-full hover:bg-orange-500 hover:text-white transition">
              Get the App
            </button>
            <button
              onClick={() => setLoginOpen(true)}
              className="bg-orange-500 text-white px-5 py-1.5 rounded-full hover:bg-orange-600 transition"
            >
              Sign In
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-6 space-y-4">
            <Link
              to="/route-2"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 font-medium"
            >
              Corporate
            </Link>
            <Link
              to="/route-3"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 font-medium"
            >
              Partner with us
            </Link>
            <button className="w-full border border-orange-500 text-orange-500 py-2 rounded-full">
              Get the App
            </button>
            <button
              onClick={() => {
                setLoginOpen(true);
                setMenuOpen(false);
              }}
              className="w-full bg-orange-500 text-white py-2 rounded-full"
            >
              Sign In
            </button>
          </div>
        )}
      </header>

      {/* ================= LOGIN SLIDE PANEL ================= */}
      <div
        className={`fixed inset-0 z-50 transition ${
          loginOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setLoginOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            loginOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl transform transition-transform duration-300 ${
            loginOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">
              Login to continue
            </h2>
            <button onClick={() => setLoginOpen(false)}>
              <X size={22} />
            </button>
          </div>

          <div className="p-5">
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
