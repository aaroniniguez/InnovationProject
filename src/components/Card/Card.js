import React from 'react';
import {getCard, getCards} from  "../../services/apiService"
import { convertCardName } from '../../helper';
import {CardDescription} from "./CardDescription";

function Card(props) {
    let name = location.pathname.split("/").pop();
    console.log("aaron",name)
    const [card, setCard] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        getCard(name, (response) => {
            console.log(response);
            setCard(response.data[0])
            setLoading(true)
        })
    }, []);
    return (
        loading && (
            <div style={{height: "100%", display: "flex", justifyContent:"center", alignItems: "center"}}>
                <div style={{height:"100%", display: "flex", alignItems:"center", justifyContent: "center", flexDirection: "column"}}>
                    <div className="prettyFont">{card.name}</div>
                    <div className={convertCardName(card.name)}></div>
                    <CardDescription data={card}/>
                </div>
            <div style={{marginLeft: "30px"}}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className="icon crown"></div>
                    <div>{card.crown}</div>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className="icon lightbulb"></div>
                    <div>{card.lightbulb}</div>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className="icon leaf"></div>
                    <div>{card.leaf}</div>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className="icon castle"></div>
                    <div>{card.castle}</div>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className="icon factory"></div>
                    <div>{card.factory}</div>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className="icon clock"></div>
                    <div>{card.clock}</div>
                </div>
            </div>
        </div>
        )
    );
}

export default Card;