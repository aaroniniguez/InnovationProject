import React from 'react';
import {Link} from "react-router-dom";

function CardIcon(props) {
    let {icon, count} = props;
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Link to={`/innovation/cards?icon=${icon}`}>
                <div className={`icon ${icon}`}></div>
            </Link>
            <Link style={{color: "black", textDecoration: "underline"}} to={`/innovation/cards?icon=${icon}`}>
                <div>{count}</div>
            </Link>
        </div>
    );
}

export default CardIcon;