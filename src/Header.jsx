import logoImg from "./assets/logo.png";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router";
import twitterIcon from "./assets/twitter.png";
import facebookIcon from "./assets/facebook.png";
import youtubeIcon from "./assets/youtube.png";
import snapIcon from "./assets/snap.png";
import phoneIcon from "./assets/phone.png";
import favoriteicon from "./assets/favorite.png";

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
            <Link
              to="/favorites"
              className="relative pb-1 hover:text-[var(--primary-color)] transition-colors after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[var(--primary-color)] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                className="w-6 h-6"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
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
              onClick={() => setOpenMenu(false)}
              className="text-[#1F1A14] font-medium hover:text-[var(--primary-color)] transition"
            >
              Home
            </Link>
            <Link
              to="/ourstory"
              onClick={() => setOpenMenu(false)}
              className="text-[#1F1A14] font-medium hover:text-[var(--primary-color)] transition"
            >
              Our Story
            </Link>
            <Link
              to="/recipes"
              onClick={() => setOpenMenu(false)}
              className="text-[#1F1A14] font-medium hover:text-[var(--primary-color)] transition"
            >
              Recipes
            </Link>

            <Link
              to="/blogs"
              onClick={() => setOpenMenu(false)}
              className="text-[#1F1A14] font-medium hover:text-[var(--primary-color)] transition"
            >
              Blogs
            </Link>
            <Link
              to="/contactus"
              onClick={() => setOpenMenu(false)}
              className="text-[#1F1A14] font-medium hover:text-[var(--primary-color)] transition"
            >
              Contact Us
            </Link>
            <Link
              to="/favorites"
              onClick={() => setOpenMenu(false)}
              className="text-[#1F1A14] font-medium hover:text-[var(--primary-color)] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                className="w-6 h-6"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
