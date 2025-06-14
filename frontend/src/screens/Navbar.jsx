import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Login from "./Login";
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  return (
    <header className="bg-orange-400 text-white relative z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-1 rounded">
            <img
              src="https://png.pngtree.com/template/20190223/ourmid/pngtree-restaurant-logo-image_58802.jpg"
              alt="Logo"
              className="h-9 w-9 object-cover rounded"
            />
          </div>
          <span className="text-xl font-bold whitespace-nowrap">Singh-Restaurant</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <Link to={"/route-2"} className="hover:underline font-bold">
            Singh Corporate
          </Link>
          <Link to={"/route-3"} className="hover:underline font-bold">
            Partner with us
          </Link>
          <a
            href="#"
            className="border border-white font-bold px-4 py-1 rounded-full hover:bg-white hover:text-orange-600 transition"
          >
            Get the App →
          </a>
          <button
            onClick={() => setIsSidePanelOpen(true)}
            className="bg-black font-bold text-white px-4 py-1 rounded-full hover:opacity-80 transition"
          >
            Sign in
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden px-6 pb-4 space-y-4 animate-slide-down bg-orange-500">
          <Link to={"/route-2"} className="block font-bold hover:underline">Singh Corporate</Link>
          <Link to={"/route-3"} className="block font-bold hover:underline">Partner with us</Link>
          <a
            href="#"
            className="block border font-bold border-white px-4 py-2 rounded-full text-center hover:bg-white hover:text-orange-600 transition"
          >
            Get the App →
          </a>
          <button
            onClick={() => {
              setIsSidePanelOpen(true);
              setIsOpen(false);
            }}
            className="block w-full font-bold bg-black text-white px-4 py-2 rounded-full text-center hover:opacity-80 transition"
          >
            Sign in
          </button>
        </nav>
      )}

      {/* Side Login Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85vw] sm:w-[65vw] md:w-[450px] bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${
          isSidePanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel Header */}
        <header className="flex justify-between items-center px-4 py-3 bg-orange-400 text-white shadow">
          <h1 className="text-lg font-semibold">Login</h1>
          <button
            onClick={() => setIsSidePanelOpen(false)}
            className="text-white hover:opacity-80"
          >
            <X size={24} />
          </button>
        </header>

        {/* Panel Content */}
        <div className="p-4">
          <Login />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
