import React from "react";
import "./Navbar.css";
import logo from "../../../Assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-info">
      <div className="navbar w-11/12 md:w-10/12 mx-auto px-0">
        <div className="navbar-start">

            {/* Hidden for larger and medium devices */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden pl-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="font-semibold nav_content">Home</a>
              </li>
              <li>
                <a className="font-semibold nav_content">About</a>
              </li>
              <li>
                <a className="font-semibold nav_content">Course</a>
              </li>
              <li>
                <a className="font-semibold nav_content">Contact</a>
              </li>
            </ul>
          </div>

          {/* logo image */}
          <a className="btn btn-ghost normal-case text-xl hover:bg-info p-0">
            <img src={logo} alt="" className="w-24" />
          </a>

          {/* Hidden for smaller devices */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-0">
            <li>
              <a className="font-semibold nav_content">Home</a>
            </li>
            <li>
              <a className="font-semibold nav_content">About</a>
            </li>
            <li>
              <a className="font-semibold nav_content">Course</a>
            </li>
            <li>
              <a className="font-semibold nav_content">Contact</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <button className="bg-white border-2 border-primary rounded-full px-7 py-1 md:py-2 hidden md:flex">
            <a className="text-primary text-base font-bold">Login</a>
          </button>
          <button className="bg-primary rounded-full px-7 py-1 md:py-2">
            <a className="text-white text-base font-bold text-xs md:text-base">Sign Up</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
