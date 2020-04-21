import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.scss";
import Logo from "./components/Logo"
import logo from "./images/innovation.png"
import {getCards} from "./services/apiService";
import {convertCardName} from "./helper";
import {Link} from "react-router-dom";
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
                                <div className="crown"></div>
                <Col style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                    {cards.map((card) => {
                        return (
                            <Link key={card.name} to={`/innovation/cards/`+convertCardName(card.name)}>
                                <div key={card.name} className={convertCardName(card.name)}></div>
                            </Link>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    );
}

export default App;