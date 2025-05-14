import React from 'react';
import Hero from './Hero';
import Silder from './Silder';
import Booking from './Booking';
import BrandLogo from './BrandLogo';
import DantalServices from './DantalServices';

const Home = () => {
    return (
        <div>
            <Silder/>
            <Booking/>
            <BrandLogo/>
            <DantalServices/>
        </div>
    );
};

export default Home;