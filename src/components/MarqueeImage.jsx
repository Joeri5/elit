import React from 'react';

const MyComponent = ({name, logo, margin}) => {
    return (
        <div className="mr-[10vw]">
            <img src={logo} alt={name}
                 className="h-10 opacity-50 hover:opacity-75 transition-opacity duration-300 select-none"/>
        </div>
    );
};

export default MyComponent;
