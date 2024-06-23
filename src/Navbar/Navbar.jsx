import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar bg-footerColor  md:px-[120px] md:py-[30px] h-[137px] ">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-white lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {menuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white rounded-box w-52"
            >
              <li className="text-black font-inter">
                <a>Get Ticket</a>
              </li>
              <li className="text-black font-inter">
                <a>Schedule</a>
              </li>
              <li className="text-black font-inter">
                <a>Speakers</a>
              </li>
              <li className="text-black font-inter">
                <a>FAQ</a>
              </li>
            </ul>
          )}
        </div>
        <img
          src="https://i.ibb.co/LDFmLLK/Group-1171274734.png"
          alt="Logo"
          className="ml-4"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-white font-inter">
            <a>Get Ticket</a>
          </li>
          <li className="text-white font-inter">
            <a>Schedule</a>
          </li>
          <li className="text-white font-inter">
            <a>Speakers</a>
          </li>
          <li className="text-white font-inter">
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="text-white bg-red-600 py-2 px-4 rounded-3xl font-inter">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
