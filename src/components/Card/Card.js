import React from 'react';
import {getCard} from  "../../services/apiService"
import { convertCardName } from '../../helper';
import {CardDescription} from "./CardDescription";
import CardIcon from "./CardIcon";

function Card(props) {
    let name = location.pathname.split("/").pop();
    const [card, setCard] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        getCard(name, (response) => {
            let card = response.data[0];
            setCard(card)
            setLoading(true)
            document.title = `Innovation Cards - ${convertCardName(card.name)}`;
        })
    }, []);
    return (
        loading && (
            <div style={{height: "100%", display: "flex", justifyContent:"center", alignItems: "center"}}>
                <div style={{height:"100%", display: "flex", alignItems:"center", justifyContent: "center", flexDirection: "column"}}>
                    <div style={{margin: "20px"}} className="prettyFont">{card.name}</div>
                    <div className={convertCardName(card.name)}></div>
                    <CardDescription data={card}/>
                </div>
            <div style={{marginLeft: "30px"}}>
                <CardIcon icon="crown" count={card.crown}></CardIcon>
                <CardIcon icon="lightbulb" count={card.lightbulb}></CardIcon>
                <CardIcon icon="leaf" count={card.leaf}></CardIcon>
                <CardIcon icon="castle" count={card.castle}></CardIcon>
                <CardIcon icon="factory" count={card.factory}></CardIcon>
                <CardIcon icon="clock" count={card.clock}></CardIcon>
            </div>
        </div>
        )
    );
}

export default Card;