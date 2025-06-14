import React, { useState } from "react";
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
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { label: "About Singh-Restaurent", id: "about" },
    { label: "Our Businesses", id: "businesses" },
    { label: "Delivering For Everyone", id: "impact" },
    { label: "Newsroom", id: "newsroom" },
    { label: "Contact Us", id: "contact" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return   <main className="flex flex-col space-y-10 md:space-y-16">
        <section className="px-4 sm:px-6 md:px-10 lg:px-20">
          <SwiggyAboutUs />
        </section>
        <section className="px-4 sm:px-6 md:px-10 lg:px-20">
          <IpoDeliveredSection />
        </section>
        <section className="px-4 sm:px-6 md:px-10 lg:px-20">
          <KnowUsSection />
        </section>
        <section className="px-4 sm:px-6 md:px-10 lg:px-20">
          <TeamSection />
        </section>
         <section className="px-4 sm:px-6 md:px-10 lg:px-20">
          <SwiggyBlog />
        </section>
      </main>;
      case "businesses":
        return <MainComponents />;
      case "impact":
        return <DeliveringForEveryone/>;
      case "newsroom":
        return <div>📰 Welcome to the <strong>Newsroom</strong>.</div>;
      case "contact":
      
         return <ContactSupport/>;
      default:
        return null;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 text-orange-500 font-extrabold text-2xl">
            <div className="bg-orange-500 w-8 h-8 rounded-sm flex items-center justify-center text-white text-lg">
              S
            </div>
            Singh-Restaurent
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 font-medium text-sm text-gray-700 tracking-wide">
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => setActiveSection(id)}
                  className={`transition duration-200 hover:text-orange-500 ${
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X size={24} className="text-orange-500" />
            ) : (
              <Menu size={24} className="text-orange-500" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } bg-white px-6 border-t shadow`}
        >
          <ul className="space-y-4 font-medium text-gray-700 py-4">
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    setActiveSection(id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left transition hover:text-orange-500 ${
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

      {/* Section Content */}
      <main className="p-6 max-w-7xl mx-auto text-gray-800 text-lg">
        {renderContent()}
      </main>
    </>
  );
};

export default NavBar2WithContent;




