import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <h3 className="text-4xl font-bold text-secondary text-center mb-6">Hiba's Portfolio</h3>

        {/* Social Media Links */}
        <div className="flex justify-center gap-8 mb-10">
          <a
            href="https://www.linkedin.com/in/hiba-bint-irfan"
            className="text-white text-4xl hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/hiba-bint-irfan"
            className="text-white text-4xl hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved | Built with love by Hiba Irfan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
