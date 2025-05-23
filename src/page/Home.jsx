import React from 'react';
import Hero from './Hero';
import Silder from './Silder';
import Booking from './Booking';
import BrandLogo from './BrandLogo';
import DantalServices from './DantalServices';
import ConfidentSmile from './ConfidentSmile';
import TestimonialSilder from './TestimonialSilder';
import Blog from './Blog';

const Home = () => {
    return (
        <div>
            <Silder/>
            <Booking/>
            <BrandLogo/>
            <DantalServices/>
            <ConfidentSmile/>
            <TestimonialSilder/>
            <Blog/>
        </div>
    );
};

export default Home;