import React from 'react';
import root from '../assets/root.png'
import canal from '../assets/root-canal.png'
import tooth from '../assets/tooth.png'
import dentist from '../assets/dentist.png'
import check from '../assets/check-up.png'
import care from '../assets/oral-care.png'

const DantalServices = () => {
    return (
        <div className='w-[98%] mx-auto bg-[#25CCF7] rounded-2xl mt-5'>
           <div className='w-full p-8 space-y-3 rounded-xl '>
            <div className='text-center space-y-2.5 p-2'>
                <p className='text-base font-semibold'>SERVICES</p>
                <h1 className='text-2xl md:text-3xl font-bold'>Comprehensive Dental</h1>
                <p className='text-base font-normal'>We offer a comprehensive range of dental services to ensure <br /> your optimal oral health.</p>
            </div>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 py-5'>
                <div className='items-center text-center justify-items-center md:w-80 w-68 rounded-xl border border-black p-4 bg-white'>
                    <img className='w-24 rounded-full p-5 bg-white' src={root} alt="" />
                    <h1 className='text-2xl font-semibold'>Dental Implants</h1>
                    <p className='text-base font-normal'>Restore your smile with advanced dental implant solutions.</p>
                </div>
                <div className='items-center text-center justify-items-center md:w-80 w-68 rounded-xl border border-black p-4 bg-white'>
                    <img className='w-24 rounded-full p-5 bg-white' src={canal} alt="" />
                    <h1 className='text-2xl font-semibold'>Dental Cleaning</h1>
                    <p className='text-base font-normal'>Revitalize your smile with expert dental cleaning teeth.</p>
                </div>
                <div className='items-center text-center justify-items-center md:w-80 w-68 rounded-xl border border-black p-4 bg-white'>
                    <img className='w-24 rounded-full p-5 bg-white' src={tooth} alt="" />
                    <h1 className='text-2xl font-semibold'>Cosmetic Dentistry</h1>
                    <p className='text-base font-normal'>Transform your smile with advanced cosmetic dentistry treatments.</p>
                </div>
                <div className='items-center text-center justify-items-center md:w-80 w-68 rounded-xl border border-black p-4 bg-white'>
                    <img className='w-24 rounded-full p-5 bg-white' src={check} alt="" />
                    <h1 className='text-2xl font-semibold'>Routine Check-up</h1>
                    <p className='text-base font-normal'>Maintain optimal oral health with routine check-ups at Elite Dental.</p>
                </div>
                <div className='items-center text-center justify-items-center md:w-80 w-68 rounded-xl border border-black p-4 bg-white'>
                    <img className='w-24 rounded-full p-5 bg-white' src={dentist} alt="" />
                    <h1 className='text-2xl font-semibold'>Oral Surgery</h1>
                    <p className='text-base font-normal'>Expert oral surgery for optimal dental health and wellness.</p>
                </div>
                <div className='items-center text-center justify-items-center md:w-80 w-68 rounded-xl border border-black p-4 bg-white'>
                    <img className='w-24 rounded-full p-5 bg-white' src={care} alt="" />
                    <h1 className='text-2xl font-semibold'>Emergency Dentist</h1>
                    <p className='text-base font-normal'>Swift, expert care for dental emergencies at Elite Dental.</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default DantalServices;