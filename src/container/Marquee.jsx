import React from 'react';
import Marquee from "react-fast-marquee";
import MarqueeImage from "../components/MarqueeImage";
import {Spotify, Google, Amazon, Dropbox, Asana, Airbnb} from "../assets";

const MyComponent = () => {
    return (
        <Marquee speed={40} gradientWidth={0}>
            <div className="flex items-center w-full justify-between py-20">
                <MarqueeImage logo={Google}/>
                <MarqueeImage logo={Amazon}/>
                <MarqueeImage logo={Dropbox}/>
                <MarqueeImage logo={Spotify}/>
                <MarqueeImage logo={Asana}/>
                <MarqueeImage logo={Airbnb} margin={'10'}/>
            </div>
        </Marquee>
    );
};

export default MyComponent;
