import React from "react";
import Link from "gatsby-link";
import FaBars from 'react-icons/lib/fa/bars';


const Header = () => {
  const handleClick = function(e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (
    <nav className="bg-transparent text-sm">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline font-serif">
          <span className="font-light font-serif text-sm tracking-very-wide px-3 py-2 border border-grey-dark text-grey-dark">
            AUTHENTICITY
          </span>
        </Link>

        <button
          className="block md:hidden flex items-center px-4 py-3 rounded font-serif text-grey-dark"
          onClick={handleClick}
        >
        <FaBars />
        </button>

        <div
          id="nav"
          className="hidden md:flex md:items-center w-full md:w-auto"
        >
          <div className="text-lg">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline font-mono text-grey-dark text-lg hover:text-grey-darkest"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline font-mono text-grey-dark text-lg hover:text-grey-darkest"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="block md:inline-block mt-4 md:mt-0 no-underline font-mono text-grey-dark text-lg hover:text-grey-darkest"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
