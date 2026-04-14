import React from 'react';
import { BiStats } from 'react-icons/bi';
import { FaHouse } from 'react-icons/fa6';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';
// import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const links = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `mr-2 px-3 py-1 flex items-center gap-2 rounded-md transition-all duration-300 ease-in-out ${
            isActive
              ? "text-white bg-green-900 shadow-md scale-105"
              : "text-gray-300 hover:text-white hover:bg-green-800/40 hover:scale-105"
          }`
        }
      >
        <FaHouse />
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/timeline"
        className={({ isActive }) =>
          `mr-2 px-3 py-1 flex items-center gap-2 rounded-md transition-all duration-300 ease-in-out ${
            isActive
              ? "text-white bg-green-900 shadow-md scale-105"
              : "text-gray-300 hover:text-white hover:bg-green-800/40 hover:scale-105"
          }`
        }
      >
        <RiTimeLine />
        Timeline
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/stats"
        className={({ isActive }) =>
          `mr-2 px-3 py-1 flex items-center gap-2 rounded-md transition-all duration-300 ease-in-out ${
            isActive
              ? "text-white bg-green-900 shadow-md scale-105"
              : "text-gray-300 hover:text-white hover:bg-green-800/40 hover:scale-105"
          }`
        }
      >
        <BiStats />
        Stats
      </NavLink>
    </li>
  </>
);
    
    return (
        <nav class=" bg-base-100 shadow-sm">
            <div class="navbar w-11/12 mx-auto">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl gap-0"><span className='text-2xl'>Keen</span><span class="text-green-900">Keeper</span></a>
  </div>
  
  <div class="navbar-end">
    <ul className='flex gap-4'>
      {links}
    </ul>
  </div>
</div>
            

        </nav>
    );
};

export default Navbar;