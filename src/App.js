import Navigation from "./components/navbar";
import shoesUp from './images/34a4256fc96d903a15b7741f63346d835e823a52.png'
import shoesDown from './images/c9d406da4eb1f2166903921444150809eb74e665.png'
import {Col, Container, Image, Row} from "react-bootstrap";
import ReactMarkdown from 'react-markdown'
import CallToAction from "./components/callToAction";
import ComboBox from "./components/comboBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';


function App() {

    return (
        <Container fluid className="App">
            <Container className={'grid'} fluid>
                <Navigation />
                <Row>
                    <Col sm={12} md={12} lg={12} xl={12} xxl={6}>
                        <h2 className={'header-title'}>
                            Feel Strong Like Lebron</h2>

                        <h4 className={'header-text'}>
                            <ReactMarkdown>
                                The LeBron 17 LMTD features a large **Max Air** until in the heel and Zoom Air
                                cushioning for extra **comfort**
                            </ReactMarkdown>
                        </h4>

                        <h4 className={'header-text'}>
                            <ReactMarkdown>
                                Knit material wraps your feet for **lightweight** support so you can make quick, powerful
                                moves like a champ.
                            </ReactMarkdown>
                        </h4>

                    </Col>
                    <Col className={'right-col'} sm={12} md={12} lg={12} xl={12} xxl={6}>
                        <Image src={shoesUp} className={'shoeUp'} />
                        <Image src={shoesDown} className={'shoeDown'} />
                        <Container className={'grid cta-container'}>
                            <Row>
                                <Col xs={12}>
                                    <ComboBox className={'combo'}/>
                                </Col>
                            </Row>
                            <Row style={{marginTop: 20}}>
                                <Col className={'left-col-button'} sm={6} xl={6}>
                                    <CallToAction className={'cta'}>Add to Cart</CallToAction>
                                </Col>
                                <Col className={'right-col-price'} sm={6} xl={6}>
                                    <h4 className={'price'}>$249</h4>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default App;
