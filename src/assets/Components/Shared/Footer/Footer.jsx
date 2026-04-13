import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaX } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='w-full bg-[#244d3f] '>
             <div className=' w-11/12 mx-auto text-center justify-center  text-white py-10 space-x-3.5 mt-10 rounded-lg flex flex-col md: gap-5'>
            <div className='space-y-3'>
            <h1 className='text-5xl'>KeenKeeper</h1>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

            </div>
            <div className='space-y-3'>
                <p>Social Links</p>
                <ul className='flex gap-2 justify-center'>
                    <li className='border rounded-full text-black border-green-800 bg-white p-2'><FaInstagram></FaInstagram></li>
                    <li className='border rounded-full text-black border-green-800 bg-white p-2'><FaFacebook></FaFacebook></li>
                    <li className='border rounded-full text-black  border-green-800 bg-white p-2'><FaX></FaX></li>
                </ul>
            </div>
            <div className=' text-gray-300 px-80 '>
                <div className='border-t border-gray-300 pt-5  flex justify-between items-center '>
                    <p >© 2026 KeenKeeper. All rights reserved.</p>
                <ul className='flex gap-4'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service </li>
                    <li>Cookies</li>
                </ul>

                </div>
                
            </div>
           

            
        </div>

        </footer>
       
    );
};

export default Footer;