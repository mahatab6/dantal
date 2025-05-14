import React from 'react';
import Hero from './Hero';
import Silder from './Silder';
import Booking from './Booking';
import BrandLogo from './BrandLogo';

const Home = () => {
    return (
        <div>
            <Silder/>
            <Booking/>
            <BrandLogo/>
        </div>
    );
};

export default Home;