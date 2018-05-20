import React from "react";
import Link from "gatsby-link";
import FaBars from 'react-icons/lib/fa/bars';
import Headroom from 'react-headroom';


const Header = () => {
  const handleClick = function(e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (
    <Headroom className="z-40">
    <nav className="bg-white text-sm">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto px-4 py-4">
        <Link to="/" className="flex items-center no-underline font-serif">
          <span className="font-light font-serif text-sm tracking-very-wide px-3 py-2 border border-grey-dark text-grey-dark hover:text-grey-darkest">
            AUTHENTICITY
          </span>
        </Link>

        <button
          className="block md:hidden flex items-center px-4 py-2 rounded font-serif text-grey-dark"
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
              to="/about"
              className="block md:inline-block mt-2 md:mt-0 mr-6 no-underline font-mono text-grey-dark hover:text-grey-darkest border-b-2 border-transparent hover:border-grey-darkest text-sm"
            >
              Lo que hacemos
            </Link>

            <Link
              to="/contact"
              className="block md:inline-block  mt-2 md:mt-0 no-underline font-mono text-grey-dark hover:text-grey-darkest border-transparent border-b-2 hover:border-grey-darkest text-sm"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </Headroom>
  );
};

export default Header;
