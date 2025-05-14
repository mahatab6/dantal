import React from 'react';
import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'
import brand5 from '../assets/brand5.png'
import brand6 from '../assets/brand6.png'
import brand7 from '../assets/brand7.png'
import brand8 from '../assets/brand8.png'




const BrandLogo = () => {
    return (
        <div className='w-[98%] mx-auto bg-base-300 rounded-2xl mt-5'>
            <div className=' grid grid-cols-2 md:grid-cols-4  lg:grid-cols-4 justify-items-center xl:grid-cols-8 items-center justify-center space-x-5 p-6'>
                <img className='w-40' src={brand1} alt="" />
                <img className='w-40' src={brand2} alt="" />
                <img className='w-40' src={brand3} alt="" />
                <img className='w-40' src={brand4} alt="" />
                <img className='w-40' src={brand5} alt="" />
                <img className='w-40' src={brand6} alt="" />
                <img className='w-40' src={brand7} alt="" />
                <img className='w-40' src={brand8} alt="" />
            </div>
        </div>
    );
};

export default BrandLogo;