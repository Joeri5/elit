import React from 'react';

const MyComponent = ({name, logo, height}) => {
    return (
        <div className="mr-20">
            <img src={logo} alt={name} className="h-10 opacity-50 hover:opacity-75 transition-opacity duration-300"/>
        </div>
    );
};

export default MyComponent;
