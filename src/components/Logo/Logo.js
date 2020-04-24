import React from 'react';
import "./Logo.css";
import {Link} from "react-router-dom";

function Logo(props) {
    const {src, alt} = props; 
    return (
        <div>
            <a href="/innovation/cards">
                <img className="logoImage"  src={src} alt={alt}></img>
            </a>
        </div>
    );
}

export default Logo;