import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoTimeSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Highlight = () => {
    return (
        <div className='hidden md:block  bg-[#25CCF7] '>
          <div className='flex justify-between w-[98%] mx-auto py-2'>
                <div className='flex space-x-3'> 
                    <div className='flex items-center'>
                        <FaLocationDot />
                        <p>Band Rd, Barishal 8200</p>
                    </div>
                    <div className='flex items-center'>
                        <IoCall />
                        <p>0174894524</p>
                    </div>
                    <div className='flex items-center'>
                        <IoTimeSharp />
                        <p>Mon-Fr 9:00 AM - 8:00 PM</p>
                    </div>
                </div>

                <div className='flex space-x-3'>
                    <FaFacebook size={25}/>
                    <FaLinkedin size={25}/>
                    <FaYoutube size={25}/>
                </div>
          </div>
        </div>
    );
};

export default Highlight;