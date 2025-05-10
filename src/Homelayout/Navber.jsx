import React from 'react';
import { Link, NavLink } from 'react-router';

const Navber = () => {
    const link = (
        <>
            <li>
                <NavLink to="/" className={({isActive}) => isActive ? "text-xl font-medium  border-b-1" : "  text-xl font-medium" }>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => isActive ? "text-xl font-medium border-b-1" : " text-xl font-medium" }>About</NavLink>
            </li>
            <li>
                <NavLink to="/blog" className={({isActive}) => isActive ? "text-xl font-medium border-b-1" : " text-xl font-medium" }>Blog</NavLink>
            </li>
        </>
    )
    return (
        <div className='w-[98%] mx-auto'>
            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                    </div>
                    <a className=" text-xl">dental care</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {link}
                    </ul>
                </div>
                <div className="navbar-end">
                       <a className="btn border-none bg-[#25CCF7] rounded-xl">Get Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;