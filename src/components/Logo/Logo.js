import React from 'react';
import "./Logo.css";

function Logo(props) {
    const {src} = props; 
    return (
        <div>
            <img className="logoImage"  src={src}></img>
        </div>
    );
}

export default Logo;