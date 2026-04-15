import React from 'react';
import { FaFacebook, FaInstagram, FaX } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='w-full bg-[#244d3f] mt-5'>
            <div className='w-11/12 mx-auto text-center text-white py-10 flex flex-col gap-5'>
                
                <div className='space-y-3'>
                    <h1 className='text-3xl md:text-5xl'>KeenKeeper</h1>
                    <p className='text-sm md:text-base px-2 md:px-20'>
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </div>

                <div className='space-y-3'>
                    <p>Social Links</p>
                    <ul className='flex gap-2 justify-center'>
                        <li className='border rounded-full text-black border-green-800 bg-white p-2'><FaInstagram /></li>
                        <li className='border rounded-full text-black border-green-800 bg-white p-2'><FaFacebook /></li>
                        <li className='border rounded-full text-black border-green-800 bg-white p-2'><FaX /></li>
                    </ul>
                </div>

                <div className='text-gray-300 px-2 md:px-20'>
                    <div className='border-t border-gray-300 pt-5 flex flex-col md:flex-row justify-between items-center gap-3'>
                        <p className='text-sm text-center'>© 2026 KeenKeeper. All rights reserved.</p>
                        <ul className='flex gap-4 text-sm'>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;