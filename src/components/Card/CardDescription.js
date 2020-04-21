import React from 'react';
import {addLineBreaks} from "../../helper"

export function CardDescription(props) {
    const {description, lightbulb, factory, crown, leaf, clock, castle, age} = props.data;
    return (
        //put icon here
        <div style={{margin: "20px", width:"400px"}}>
            {addLineBreaks(description)}
        </div>
    );
}