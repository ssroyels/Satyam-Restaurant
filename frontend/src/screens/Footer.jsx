import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

        {/* BRAND */}
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://img.freepik.com/premium-vector/pick-eat-logo-design-concept-fit-food-marketplace-application-restaurant-delivery-order-services-etc-red-white-color-identity_228967-1938.jpg"
              alt="Singh Restaurant"
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-2xl font-extrabold text-orange-500">
              Singh Restaurant
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-3">
            Delivering happiness at your doorstep. Fresh food, fast delivery,
            and trusted taste across India.
          </p>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Singh Restaurant Pvt. Ltd.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Singh Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Singh Dineout</li>
            <li>Singh Instamart</li>
          </ul>
        </div>

        {/* CONTACT & LEGAL */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>

          <h3 className="font-semibold mt-5 mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* CITIES */}
        <div>
          <h3 className="font-semibold mb-3">Available In</h3>
          <ul className="space-y-2 text-sm">
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Bangalore</li>
            <li>Hyderabad</li>
            <li>Pune</li>
            <li>Gurgaon</li>
          </ul>

          <select className="mt-4 w-full border rounded-lg px-3 py-2 text-sm">
            <option>685+ Cities</option>
          </select>
        </div>

        {/* LIFE + SOCIAL */}
        <div>
          <h3 className="font-semibold mb-3">Life at Singh</h3>
          <ul className="space-y-2 text-sm">
            <li>Explore with Singh</li>
            <li>News & Updates</li>
            <li>Snackables</li>
          </ul>

          <h3 className="font-semibold mt-5 mb-3">Connect with us</h3>
          <div className="flex gap-4 text-gray-600">
            <Linkedin className="hover:text-orange-500 cursor-pointer" />
            <Instagram className="hover:text-orange-500 cursor-pointer" />
            <Facebook className="hover:text-orange-500 cursor-pointer" />
            <Twitter className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* ================= NEWSLETTER ================= */}
      <div className="border-t bg-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-2">
            Stay updated with Singh Restaurant 🍔
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Get offers, discounts and food updates directly in your inbox.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-lg px-4 py-2 w-full sm:w-72"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 flex items-center gap-2 justify-center">
              <Mail size={18} /> Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ================= APP DOWNLOAD ================= */}
      <div className="bg-gray-100 py-8 text-center">
        <p className="font-semibold text-lg mb-4">
          For a better experience, download the Singh App now
        </p>
        <div className="flex justify-center gap-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Play Store"
            className="h-12 cursor-pointer"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_App_Store_badge.svg"
            alt="App Store"
            className="h-12 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
