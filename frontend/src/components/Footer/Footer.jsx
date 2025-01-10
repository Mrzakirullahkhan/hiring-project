import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h1 className="text-2xl font-bold mb-4">YourCompany</h1>
          <p className="text-sm text-gray-400">
            We provide the best solutions to help you achieve your goals. Let's
            build something great together!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-400 hover:text-white transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#careers"
                className="text-gray-400 hover:text-white transition"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-600 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-gray-700 pt-5 text-sm text-gray-400">
        © 2025 YourCompany. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
