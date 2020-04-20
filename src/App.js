import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.scss";
import Logo from "./components/Logo"
import logo from "./images/innovation.png"
import {
    Container,
    Row,
    Col
} from "reactstrap"

function App(props) {
    return (
        <Container className="app">
            <Row>
                <Col className="prettyFont" style={{display:"flex", alignItems:"center"}}>
                    <Logo src={logo}/>
                    <div style={{flex:"1", marginLeft:"30px"}}>
                        Innovation Decklist
                    </div>
                </Col>
            </Row>
            <Row>
                <Col style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                    <div className="pottery"></div>
                    <div className="tools"></div>
                    <div className="writing"></div>
                    <div className="ard archery"></div>
                    <div className="metalworking"></div>
                    <div className="oars"></div>
                    <div className="clothing"></div>
                    <div className="sailing"></div>
                    <div className="thewheel"></div>
                    <div className="agriculture"></div>
                    <div className="domestication"></div>
                    <div className="masonry"></div>
                    <div className="citystates"></div>
                    <div className="codeoflaws"></div>
                    <div className="mysticism"></div>
                    <div className="calendar"></div>
                    <div className="mathematics"></div>
                    <div className="construction"></div>
                    <div className="roadbuilding"></div>
                    <div className="currency"></div>
                    <div className="mapmaking"></div>
                    <div className="canalbuilding"></div>
                    <div className="fermenting"></div>
                    <div className="monotheism"></div>
                    <div className="philosophy"></div>
                    <div className="alchemy"></div>
                    <div className="translation"></div>
                    <div className="engineering"></div>
                    <div className="optics"></div>
                    <div className="compass"></div>
                    <div className="paper"></div>
                    <div className="machinery"></div>
                    <div className="medicine"></div>
                    <div className="education"></div>
                    <div className="feudalism"></div>

                    <div className="experimentation"></div>
                    <div className="printingpress"></div>
                    <div className="colonialism"></div>
                    <div className="gunpowder"></div>
                    <div className="invention"></div>
                    <div className="navigation"></div>
                    <div className="anatomy"></div>
                    <div className="perspective"></div>
                    <div className="enterprise"></div>
                    <div className="reformation"></div>
                    
                    <div className="chemistry"></div>
                    <div className="physics"></div>
                    <div className="coal"></div>
                    <div className="thepiratecode"></div>
                    <div className="banking"></div>
                    <div className="measurement"></div>
                    <div className="statistics"></div>
                    <div className="steamengine"></div>
                    <div className="astronomy"></div>
                    <div className="societies"></div>


                    <div className="atomictheory"></div>
                    <div className="encyclopedia"></div>
                    <div className="industrialization"></div>
                    <div className="machinetools"></div>
                    <div className="classification"></div>
                    <div className="metricsystem"></div>
                    <div className="canning"></div>
                    <div className="vaccination"></div>
                    <div className="democracy"></div>
                    <div className="emancipation"></div>

                    <div className="evolution"></div>
                    <div className="publications"></div>
                    <div className="combustion"></div>
                    <div className="explosives"></div>
                    <div className="bicycle"></div>
                    <div className="electricity"></div>
                    <div className="refrigeration"></div>
                    <div className="sanitation"></div>
                    <div className="lighting"></div>
                    <div className="railroad"></div>


                    <div className="quantumtheory"></div>
                    <div className="rocketry"></div>
                    <div className="flight"></div>
                    <div className="mobility"></div>
                    <div className="corporations"></div>
                    <div className="massmedia"></div>
                    <div className="antibiotics"></div>
                    <div className="skyscrapers"></div>
                    <div className="empiricism"></div>
                    <div className="socialism"></div>

                    <div className="computers"></div>
                    <div className="genetics"></div>
                    <div className="composites"></div>
                    <div className="fission"></div>
                    <div className="collaboration"></div>
                    <div className="satellites"></div>
                    <div className="ecology"></div>
                    <div className="suburbia"></div>
                    <div className="services"></div>
                    <div className="specialization"></div>

                    <div className="bioengineering"></div>
                    <div className="software"></div>
                    <div className="miniaturization"></div>
                    <div className="robotics"></div>
                    <div className="databases"></div>
                    <div className="selfservice"></div>
                    <div className="globalization"></div>
                    <div className="stemcells"></div>
                    <div className="ai"></div>
                    <div className="theinternet"></div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;