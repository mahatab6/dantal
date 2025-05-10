import React from 'react';
import Navber from './Navber';
import { Outlet, useLocation } from 'react-router';
import Footer from './Footer';
import Highlight from './Highlight';

const Home = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    return (
        <div>
             {isHome && <Highlight/>}
            <Navber/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Home;