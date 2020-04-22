import React from 'react';
import {addLineBreaks} from "../../helper";
import {Link} from "react-router-dom";
export function CardDescription(props) {
    const {description, lightbulb, factory, crown, leaf, clock, castle, age, color} = props.data;
    //add links to the words "splay"
    let validDescription = "<b>Description: </b>"+
        description.
            replace(/score a/g, "<a href='/innovation/cards?description=score a'>score a</a>").
            replace(/demand/g, "<a href='/innovation/cards?description=demand'>demand</a>").
            replace(/splay/g, "<a href='/innovation/cards?description=splay'>splay</a>").
            replace(/\n/g, "<br/>");
    return (
        //put icon here
        <div style={{margin: "20px", width:"400px"}}>
            <div dangerouslySetInnerHTML={{__html: validDescription}}></div>
            <br/>
            <b>Color: </b> <Link to={`/innovation/cards?color=${color}`}>{color}</Link>
            <br/>
            <br/>
            <b>Age: </b> <Link to={`/innovation/cards?age=${age}`}>{age}</Link>
        </div>
    );
}