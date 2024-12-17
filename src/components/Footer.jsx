import React from "react";
import PrepStat from "../utils/PrepStat";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="text-gray-700 font-serif body-font bg-gradient-to-br from-[#ffffff] via-[#ffd195] via-60% to-[#ffffff]"
      role="contentinfo"
    >
      <div className="container md:px-5 py-3 mx-auto flex justify-center items-center flex-col">
        {/* Logo or Brand Section */}
        <div className="flex items-center justify-center divide-x divide-slate-400">
          <div className="flex font-semibold md:text-2xl text-lg items-center justify-center">
            <PrepStat />
          </div>
          <p className="md:text-sm text-xs flex justify-center text-gray-600 ml-3 pl-3 md:ml-4 md:pl-4 py-2 mt-0">
            &copy; {new Date().getFullYear()} PrepStat. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav
          aria-label="Footer Navigation"
          className="flex justify-center md:space-x-3 space-x-2 mt-2"
        >
          <Link
            to="/privacy-policy"
            className="hover:underline text-gray-600 text-xs md:text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            to="/disclaimer"
            className="hover:underline text-gray-600 text-xs md:text-sm"
          >
            Disclaimer
          </Link>
          <Link
            to="/terms-of-service"
            className="hover:underline text-gray-600 text-xs md:text-sm"
          >
            Terms of Service
          </Link>
          <a
            href="https://chat.whatsapp.com/E2r7c10BwECCA6R6J9cU0o"
            target="blank"
            className="hover:underline text-gray-600 text-xs md:text-sm"
          >
            Community
          </a>
        </nav>

        {/* Design Credit */}
        <p className="mt-2 italic font-medium text-gray-700 md:text-base text-sm font-serif">
          Designed with ❤️ by the PrepStat Team.
        </p>
      </div>
    </footer>
  );
}
