import React from 'react';
import { Link } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";




const Footer = () => {
    return (
        <div>
            <footer className='bg-[#25CCF7] space-y-3 md:flex justify-around py-10 px-2'>
                <div className='space-y-3'>
                    <div className='flex items-center'>
                        <img className='w-[50px]' src="" alt="" />
                        <h1 className='text-2xl font-bold'>Dental Care</h1>
                    </div>
                    <p className='text-xl'>Dental Care is a smart plant management platform <br /> designed to help plant lovers easily <br /> track, care for, and organize their plant collections.</p>
                    <nav>
                        <div className="flex gap-2">
                        <Link target="_blank" rel="noopener noreferrer" to="https://www.facebook.com/"><FaFacebook className="text-white" size={30} /></Link>
                        <Link target="_blank" rel="noopener noreferrer" to="https://www.youtube.com/"><FaYoutube className="text-white" size={30} /></Link>
                        <Link target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/"><FaInstagram className="text-white" size={30} /></Link>
                        <Link target="_blank" rel="noopener noreferrer" to="https://github.com/"><FaGithub className="text-white" size={30} /></Link>
                        </div>
                    </nav>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-2xl font-bold'>Useful Links</h1>
                    <ul>
                        <li>About Company</li>
                        <li>Meet the Team</li>
                        <li>News & Media</li>
                        <li>Our Projects</li>
                        <Link to="/contact">Contact us</Link>
                    </ul>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-2xl font-bold'>Office Information</h1>
                    <p className='text-xl'>4517 Washington Ave. Manchester, Kentucky 39495</p>
                    <p className='flex items-center text-xl'><CiMail size={25}/>dentalcare@company.com</p>
                    <p className='flex items-center text-xl'><IoCallOutline />+92 666 777 0000</p>
                </div>
            </footer>
            <aside className=' justify-items-center bg-black text-white py-3 '>
                <p className='text-xl'>Copyright © {new Date().getFullYear()} - All right reserved by Dental Care</p>
            </aside>
        </div>
    );
};

export default Footer;