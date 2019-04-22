import React from 'react';
import axios from 'axios';
import UserContext from '../../shared/user.context';
import '../../App.css';
import { Container, Row, Col, Figure, Image, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Review from '../../views/pages/Review';
import '../../OrderMenu.css';
import { logo } from '../../images/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class OrderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.apiUrl = `http://localhost:3004/menu/${this.props.match.params.id}`;
        this.state = {
            menu: {},
            menu_items: [],
            sub_items: [],
            tags:[]
        };

    }
    async componentDidMount() {
        const menu = (await axios.get(this.apiUrl)).data;
        this.setState({menu, menu_items: menu['menu-items']});
        this.setState({sub_items: menu['menu-items'][0]['sub-items']})
        this.setState({sub_items: menu['menu-items'][0]['tags']})
        //console.log(menu['menu-items']);
    }

    render() {
        return (
            <>
                <UserContext.Consumer>
                    {({ user }) => (
                    <>
                        <Container fluid className="wrapper_homepage">
                            <Row className="ordermenu_intro">
                                <Col className="order_user">
                                    <Image src={logo} className="App-logo order" alt="menu" />
                                    <h1>Are you ready to order? <br></br> {user.name}</h1>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Col className="ordermenu_wrapper">
                                <ListGroup as="ul">
                                    {this.state.menu_items.map(menu =>
                                        <ListGroupItem as="li" key={menu.name} className="ordermenu_list">
                                            <Row>
                                                <Col md={3} sm={10}>
                                                    <Figure>
                                                        <Figure.Image className="ordermenu_img"
                                                            src={"../images/" + menu.images} width={280} height={190} alt="171x180" title={menu.name} />
                                                        <Figure.Caption>
                                                            <p>Plate size: {menu['sub-items'][0].name}</p>
                                                        </Figure.Caption>
                                                    </Figure>
                                                </Col>
                                                <Col md={3} sm={12} xs={12} className="ordermenu_review">
                                                    <FontAwesomeIcon className="star-review" icon={['fas', 'star']} size={'1x'} />
                                                    <FontAwesomeIcon className="star-review" icon={['fas', 'star']} size={'1x'} />
                                                    <FontAwesomeIcon className="star-review" icon={['fas', 'star']} size={'1x'} />
                                                    <FontAwesomeIcon className="star-review" icon={['fas', 'star']} size={'1x'} />
                                                    <FontAwesomeIcon className="star-review" icon={['fas', 'star']} size={'1x'} /><br/>
                                                    <Link className="ordermenu_review_title" key={menu.tags} to={"/ordermenu/review/" + menu.id }>Review</Link>
                                                </Col>
                                                <Col md={3} sm={12} xs={12} className="order_dish">
                                                    <p className="ordermenu_price">{menu['sub-items'][0].cuisine_name}</p>
                                                </Col>
                                                <Col md={3} sm={12} xs={12}>
                                                    <p className="ordermenu_price">{menu['sub-items'][0].price + "$"}</p>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>

                                    )}
                                </ListGroup>
                            </Col>
                        </Container>
                    </>
                    )}
                </UserContext.Consumer>
            </>
        );
    }
}

export default OrderMenu;
