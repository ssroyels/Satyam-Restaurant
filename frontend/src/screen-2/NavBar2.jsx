import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import MainComponents from "../businesspart/mainComponents";
import SwiggyBlog from "./SwiggyBlog";
import TeamSection from "./People";
import KnowUsSection from "./KnowUsSection";
import IpoDeliveredSection from "./video";
import SwiggyAboutUs from "./swiggyaboutus";
import DeliveringForEveryone from "./deliverysection";
import ContactSupport from "./contactus";

const NavBar2WithContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    () => localStorage.getItem("singh-active-section") || "about"
  );

  const mobileMenuRef = useRef(null);

  const navItems = [
    { label: "About Singh Restaurant", id: "about" },
    { label: "Our Businesses", id: "businesses" },
    { label: "Delivering For Everyone", id: "impact" },
    { label: "Newsroom", id: "newsroom" },
    { label: "Contact Us", id: "contact" },
  ];

  /* ================= PERSIST ACTIVE TAB ================= */
  useEffect(() => {
    localStorage.setItem("singh-active-section", activeSection);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  /* ================= CLOSE MOBILE MENU ON OUTSIDE CLICK ================= */
  useEffect(() => {
    const handler = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ================= CONTENT RENDER ================= */
  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <main className="flex flex-col space-y-12 animate-fade-in">
            <SwiggyAboutUs />
            <IpoDeliveredSection />
            <KnowUsSection />
            <TeamSection />
            <SwiggyBlog />
          </main>
        );

      case "businesses":
        return <MainComponents />;

      case "impact":
        return <DeliveringForEveryone />;

      case "newsroom":
        return (
          <div className="text-center text-gray-600 py-20">
            📰 Welcome to the <strong>Singh Restaurant Newsroom</strong>
          </div>
        );

      case "contact":
        return <ContactSupport />;

      default:
        return null;
    }
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          
          {/* Logo */}
          <div className="flex items-center gap-2 text-orange-500 font-extrabold text-xl">
            <div className="bg-orange-500 w-8 h-8 rounded flex items-center justify-center text-white">
              S
            </div>
            Singh Restaurant
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => setActiveSection(id)}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    setActiveSection(id)
                  }
                  className={`transition hover:text-orange-500 ${
                    activeSection === id
                      ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                      : ""
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-orange-500"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } bg-white border-t`}
        >
          <ul className="px-6 py-4 space-y-4 text-sm font-medium">
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    setActiveSection(id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left hover:text-orange-500 ${
                    activeSection === id ? "text-orange-500" : ""
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ================= PAGE CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-4 py-10 text-gray-800">
        {renderContent()}
      </main>
    </>
  );
};

export default NavBar2WithContent;
