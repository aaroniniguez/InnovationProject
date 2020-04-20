import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.scss";
import Logo from "./components/Logo"
import logo from "./images/innovation.png"
import {getCards} from "./services/apiService";
import {
    Container,
    Row,
    Col
} from "reactstrap"

function App(props) {
    const [cards, setCards] = React.useState([])
    React.useEffect(() => {
        getCards((response) => setCards(response.data))
    }, [])
    console.log(cards)
    return (
        <Container className="app">
            <Row>
                <Col style={{display:"flex", alignItems:"center"}}>
                    <Logo src={logo}/>
                    <div className="prettyFont" style={{flex:"1", marginLeft:"30px"}}>
                        Innovation Decklist
                    </div>
                </Col>
            </Row>
            <Row>
                <Col style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                    {cards.map((card) => {
                        let cardName = card.name.toLowerCase().replace(/ /g, "");
                        return <div key={card.name} className={cardName}></div>
                    })}
                </Col>
            </Row>
        </Container>
    );
}

export default App;