import React from 'react';
import patient from '../assets/patient-happy.jpg'
import { MdDone } from "react-icons/md";


const ConfidentSmile = () => {
    return (
       <div className='w-[98%] mx-auto bg-base-300 rounded-2xl mt-5'>
            <div className='md:flex items-center md:py-10 space-x-10 px-3'>
                <img className=' rounded-2xl' src={patient} alt="" />
                <div className='space-y-3 pt-5'>
                    <h1 className=' text-2xl md:text-3xl font-bold'>Achieve a Confident Smile With Us</h1>
                    <p className=' text-base md:text-xl font-normal'>At Smile Bright, we're dedicated to helping you achieve a healthy, radiant smile. Our skilled team provides personalized, gentle care using the latest  technology in a welcoming environment. Your smile is our priority. Trust us to care for  your dental health.</p>
                    <p className=' flex items-center space-x-2 text-base font-normal '><MdDone size={25} className=" rounded-xl m-2 bg-[#25CCF7] p-1" /> Experienced and Caring Team of Professionals</p>
                    <p className=' flex items-center space-x-2 text-base font-normal '><MdDone size={25} className=" rounded-xl m-2 bg-[#25CCF7] p-1" />Advanced Technology for Optimal Care Solutions</p>
                    <p className=' flex items-center space-x-2 text-base font-normal '><MdDone size={25} className=" rounded-xl m-2 bg-[#25CCF7] p-1" /> A Wide Range of Services to Meet All Your Needs</p>
                    <p className=' flex items-center space-x-2 text-base font-normal '><MdDone size={25} className=" rounded-xl m-2 bg-[#25CCF7] p-1" />Personalized Care Approaches for Each Patient</p>
                    <button className='bg-[#25CCF7] px-4 py-3 rounded-xl btn border-none'>Learn more</button>
                </div>
            </div>
       </div>
    );
};

export default ConfidentSmile;