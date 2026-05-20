import logoImg from "./assets/logo.png";
import { useState } from "react";
import React from "react";
import { Link } from "react-router";
import twitterIcon from "./assets/twitter.png";
import facebookIcon from "./assets/facebook.png";
import youtubeIcon from "./assets/youtube.png";
import snapIcon from "./assets/snap.png";
import phoneIcon from "./assets/phone.png";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="bg-white w-full backdrop-blur-md  shadow-sm sticky top-0 z-50">
      <div className="bg-[var(--primary-color)] text-white font-medium py-2 text-xs tracking-widest uppercase text-center">
        ★Delicious Moments Start Here — Cook with Love ★
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Saffron & Sage" className="h-18 w-auto" />
          </Link>

          <nav className="font-sans text-lg hidden lg:flex items-center gap-10 text-md font-medium tracking-wide text-[#1F1A14]">
            <Link
              to="/"
              className="relative  pb-1 hover:text-[var(--primary-color)] transition-colors after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[var(--primary-color)] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              Home
            </Link>
            <Link
              to="/ourstory"
              className="relative pb-1 hover:text-[var(--primary-color)] transition-colors after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[var(--primary-color)] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              Our Story
            </Link>
            <Link
              to="/recipes"
              className="relative pb-1 hover:text-[var(--primary-color)] transition-colors after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[var(--primary-color)] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              Recipes
            </Link>
            <Link
              to="/blogs"
              className="relative pb-1 hover:text-[var(--primary-color)] transition-colors after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[var(--primary-color)] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              Blogs
            </Link>
            <Link
              to="/contactus"
              className="relative pb-1 hover:text-[var(--primary-color)] transition-colors after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[var(--primary-color)] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              Contact Us
            </Link>
          </nav>

          {/* Search dishes */}
          <div className="hidden md:flex items-center gap-4">
            <span>
              <img
                src={twitterIcon}
                alt="Twitter"
                className="w-6 h-6 cursor-pointer"
              />
            </span>
            <span>
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-6 h-6 cursor-pointer"
              />
            </span>
            <span>
              <img
                src={youtubeIcon}
                alt="YouTube"
                className="w-6 h-6 cursor-pointer"
              />
            </span>
            <span>
              <img
                src={snapIcon}
                alt="Snapchat"
                className="w-6 h-6 cursor-pointer"
              />
            </span>
            <span>
              <img
                src={phoneIcon}
                alt="Phone"
                className="w-6 h-6 cursor-pointer"
              />
            </span>
          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="lg:hidden text-[#1F1A14]"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  openMenu ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h10"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`${openMenu ? "block" : "hidden"} lg:hidden pb-6`}>
          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-[#1F1A14] font-medium hover:text-[#C2552D] transition"
            >
              Home
            </Link>
            <Link
              to="/ourstory"
              className="text-[#1F1A14] font-medium hover:text-[#C2552D] transition"
            >
              Our Story
            </Link>
            <Link
              to="/recipes"
              className="text-[#1F1A14] font-medium hover:text-[#C2552D] transition"
            >
              Recipes
            </Link>
            <Link
              to="/blogs"
              className="text-[#1F1A14] font-medium hover:text-[#C2552D] transition"
            >
              Blogs
            </Link>
            <Link
              to="/contactus"
              className="text-[#1F1A14] font-medium hover:text-[#C2552D] transition"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
