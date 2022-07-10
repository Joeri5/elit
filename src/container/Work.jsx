import React from 'react';
import {Imac, MacbookPro} from "../assets";

const MyComponent = () => {
    return (
        <div className="lg:px-32 py-10">
            <div className="flex w-full overflow-x-scroll gap-20 snap-x snap-mandatory">
                <div className="flex gap-20 snap-center">
                    <div className="h-[55vh] w-[40vw] rounded-2xl flex items-end pb-10 justify-center bg-[#C4C9DA]">
                        <img src={Imac} alt="imac with apple macbook air on it" className="w-3/5"/>
                    </div>
                    <div className="h-[55vh] w-[40vw] rounded-2xl flex items-end pb-10 justify-center bg-[#EEF0F3]">
                        <img src={MacbookPro} alt="imac with apple macbook air on it" className="w-3/5"/>
                    </div>
                </div>
                <div className="flex w-full justify-between gap-20 snap-center">
                    <div className="h-[55vh] w-[40vw] rounded-2xl flex items-end pb-10 justify-center bg-[#C4C9DA]">
                        <img src={Imac} alt="imac with apple macbook air on it" className="w-3/5"/>
                    </div>
                    <div className="h-[55vh] w-[40vw] rounded-2xl flex items-end pb-10 justify-center bg-[#EEF0F3]">
                        <img src={MacbookPro} alt="imac with apple macbook air on it" className="w-3/5"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
