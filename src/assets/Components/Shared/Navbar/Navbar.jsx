import React from 'react';
import { BiStats } from 'react-icons/bi';
import { FaHouse } from 'react-icons/fa6';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Navbar = () => {

  const links = (
            <>
           <li>
  <NavLink
    to="/"
    className={({ isActive }) =>
      `mr-2 p-1 flex items-center gap-1 ${
        isActive ? "text-white border border-green-800 bg-green-900 rounded-sm" : ""
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
      `mr-2 p-1 flex items-center gap-1 ${
        isActive ? "text-white border border-green-800 bg-green-900 rounded-sm" : ""
      }`
    }
  >
    <RiTimeLine/>
    Timeline
  </NavLink>
</li>
   <li>
  <NavLink
    to="/stats"
    className={({ isActive }) =>
      `mr-2 p-1 flex items-center gap-1 ${
        isActive ? "text-white border border-green-800 bg-green-900 rounded-sm" : ""
      }`
    }
  >
    <BiStats />
    Stats
  </NavLink>
</li>
         
            </>
        )
    
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