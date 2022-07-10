import React from 'react';
import Marquee from "react-fast-marquee";
import MarqueeImage from "../components/MarqueeImage";
import {Spotify, Google, Amazon, Dropbox} from "../assets";

const MyComponent = () => {
    return (
        <Marquee speed={40} gradientWidth={0} className="flex items-center py-20">
            <MarqueeImage logo={Google}/>
            <MarqueeImage logo={Amazon}/>
            <MarqueeImage logo={Dropbox}/>
        </Marquee>
    );
};

export default MyComponent;
