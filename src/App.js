import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.scss";
import Logo from "./components/Logo"
import logo from "./images/innovation.png"
import {getCards} from "./services/apiService";
import {convertCardName} from "./helper";
import {Link, useLocation} from "react-router-dom";
import queryString from 'query-string'
import {
    Container,
    Row,
    Col
} from "reactstrap"

function App(props) {
    let location = useLocation();
    let search = location.search;
    const values = queryString.parse(search)
    let icon, searchText;

    function isEmpty(yourObj) {
        if(Object.keys(yourObj).length === 0) {
            return true;
        } else {
            return false
        }
    }
    if(!isEmpty(values)) {
        icon = values.icon;
        searchText = `- cards with a ${icon}`;
    } else {
        searchText = "- All Cards"
    }
    let searchString = <span className="searchText">{searchText}</span>;
    const [cards, setCards] = React.useState([])
    React.useEffect(() => {
        getCards(search ,(response) => setCards(response.data))
    }, [])
    return (
        <Container className="app">
            <Row>
                <Col style={{display:"flex", alignItems:"center"}}>
                    <Logo src={logo}/>
                    <div className="prettyFont" style={{display: "flex", alignItems: "center", flex:"1", marginLeft:"30px"}}>
                        Innovation Decklist
                        {searchString}
                    </div>
                </Col>
            </Row>
            <Row>
                                <div className="crown"></div>
                <Col style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                    {cards.map((card) => {
                        return (
                            <Link key={card.name} to={`/innovation/cards/`+convertCardName(card.name)}>
                                <div key={card.name} className={"cardMainPage "+convertCardName(card.name)}></div>
                            </Link>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    );
}

export default App;