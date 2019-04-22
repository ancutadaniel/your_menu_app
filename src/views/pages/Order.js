import React from 'react';
import UserContext from '../../shared/user.context';
import { logo } from '../../images/index.js';
import '../../App.css';
import '../../Order.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardDeck, Image} from 'react-bootstrap';


class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
        };
        this.apiUrl = "http://localhost:3004/menu";

    }

    async componentDidMount() {
        const resp = await axios.get(this.apiUrl);

        this.setState({category: resp.data});
       //console.log(resp.data);
    }

    render() {

        return (
            <>
                <UserContext.Consumer>
                    {({ user }) => (
                        <>
                        <Container fluid className="wrapper_homepage">
                            <Row className="order_intro">
                                <Col className="order_user">
                                    <p className="logo_rot"><Image src={logo} className="App-logo order" alt="menu" /></p>
                                    <h1>May I Take Your Order? <br></br> {user.name}</h1>
                                </Col>
                            </Row>
                        </Container>
                        <Container fluid className="categ_container">
                            <Row>
                                <Col>
                                    <h2>Please select Your favorite dish<br></br> from our Menu</h2>
                                    <Container>
                                        <p className="order_paragraph">It's as simple as picking a restaurant, inviting your<br></br>coworkers, and enjoying your meal.</p>
                                    </Container>
                                </Col>
                            </Row>
                            <Row>
                                 {this.state.category.map(categ =>
                                    <Col xl={3} md={6} xs={12} className="categ" key={categ.id}>
                                     <CardDeck className="card_deck">
                                             <Link to={"/ordermenu/" + categ.id}>
                                                 <Card className="card">
                                                     <Card.Img variant="top" src={"images/" + categ.images} />
                                                     <Card.Body>
                                                         <Card.Title>{categ.name}</Card.Title>
                                                         <Card.Text>
                                                         </Card.Text>
                                                     </Card.Body>
                                                     <Card.Footer>
                                                            <p>Order Now!</p>
                                                     </Card.Footer>
                                                 </Card>
                                             </Link>
                                         </CardDeck>
                                     </Col>
                                )}
                            </Row>
                        </Container>
                    </>
                    )}
                </UserContext.Consumer>
           </>
        );
    }
}
export default Order;
