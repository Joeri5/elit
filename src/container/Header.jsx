import React from 'react';
import {Arrow, Laptop, ProjectLaptop} from "../assets";

const MyComponent = () => {
    return (
        <header className="lg:px-20 w-screen flex flex-col gap-10 lg:gap-0 lg:flex-row">
            <div className="lg:w-3/4 w-screen px-[7.5vw] lg:px-0">
                <img src={Laptop} alt="" className="lg:h-[80vh] h-[82vh] rounded-2xl w-full object-cover"/>
            </div>
            <div
                className="overflow-hidden absolute flex justify-between items-end lg:w-3/4 gap-3 justify-end lg:px-20 py-20 lg:h-[80vh] h-[82vh] text-white">
                <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center w-full">
                    <div className="flex flex-col items-center w-screen justify-center lg:items-start gap-1 lg:w-1/2">
                        <p className="uppercase text-xs xl:text-sm opacity-75">Software development service</p>
                        <p className="text-2xl md:text-3xl lg:text-xl xl:text-3xl font-bold">
                            We are a website & app <br/>
                            development agency
                        </p>
                    </div>
                    <div className="lg:w-1/2 flex w-full justify-center lg:mr-28 xl:mr-20 lg:justify-center">
                        <button
                            className="text-[#2442CC] px-8 xl:px-10 lg:py-4 py-3 font-bold bg-white rounded-full">Get in
                            touch
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/3 w-full px-10">
                <div className="rounded-2xl flex overflow-hidden items-center h-[55vh] bg-[#EEF0F3]">
                    <img src={ProjectLaptop} alt="laptop with project on the screen" className=" ml-10"/>
                </div>
                <div className="pt-10 flex justify-between items-center">
                    <div className="flex flex-col gap-3">
                        <p className="uppercase text-sm opacity-75">our latest work</p>
                        <p className="text-3xl font-bold">Fastbank</p>
                    </div>
                    <div>
                        <button className="border w-16 h-16 xl:mr-5 rounded-full flex items-center justify-center">
                            <img src={Arrow} alt="arrow" className="w-8"/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MyComponent;
