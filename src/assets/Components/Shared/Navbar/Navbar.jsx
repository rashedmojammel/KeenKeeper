import React, { useState } from 'react';
import { BiStats } from 'react-icons/bi';
import { FaHouse, FaBars, FaXmark } from 'react-icons/fa6';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 flex items-center gap-2 rounded-md transition-all duration-300 ease-in-out ${
      isActive
        ? 'text-white bg-green-900 shadow-md scale-105'
        : 'text-black hover:text-white hover:bg-green-800/40 hover:scale-105'
    }`;

  const links = (
    <>
      <li>
        <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>
          <FaHouse /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/timeline" className={linkClass} onClick={() => setMenuOpen(false)}>
          <RiTimeLine /> Timeline
        </NavLink>
      </li>
      <li>
        <NavLink to="/stats" className={linkClass} onClick={() => setMenuOpen(false)}>
          <BiStats /> Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">

        {/* Logo */}
        <div className="navbar-start">
          <NavLink to="/" className="btn btn-ghost text-xl gap-0">
            <span className="text-2xl">Keen</span>
            <span className="text-green-900">Keeper</span>
          </NavLink>
        </div>

        {/* Desktop Links */}
        <div className="navbar-end hidden md:flex">
          <ul className="flex gap-2">
            {links}
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="navbar-end md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost text-xl"
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-base-100 shadow-md px-6 pb-4">
          <ul className="flex flex-col gap-2">
            {links}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;