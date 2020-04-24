import React from 'react';
import {Link} from "react-router-dom";
import "./cardIcon.css";
function CardIcon(props) {
    let {icon, count} = props;
    return (
        <div className="cardIconContainer">
            <Link to={`/innovation/cards?icon=${icon}`}>
                <div className={`icon ${icon}`}></div>
            </Link>
            <Link className="cardIconLink" to={`/innovation/cards?icon=${icon}`}>
                <div>{count}</div>
            </Link>
        </div>
    );
}

export default CardIcon;