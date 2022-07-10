import React from 'react';
import {Logo} from "../assets";
import './navbar.css'

const MyComponent = () => {
    return (
        <nav className="lg:py-10 py-7 px-10 lg:px-32">
            <div className="flex items-center w-full justify-between">
                <div className="flex items-center gap-10 xl:gap-32">
                    <div className="flex items-end gap-2">
                        <img src={Logo} alt="logo" className="w-10 h-10"/>
                        <p className="text-3xl font-semibold logo_name">Elit</p>
                    </div>
                    <ul className="hidden lg:flex gap-14">
                        <li><a href="#">Works</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="hidden lg:flex">
                    <button
                        className="bg-[#EBEFFD] px-7 text-[#2442CC] font-bold py-3 text-sm font-semibold rounded-full">Project
                        estimation
                    </button>
                </div>
                <div className="lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </div>
            </div>

        </nav>
    );
};

export default MyComponent;
