import React  from 'react';
import UserContext from '../../shared/user.context';
import { bottle, phone, trophy, cell, shadow, h2_pic, h2_pic_1, h2_pic_2, line, appstore, google } from '../../images/index.js';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { logo } from '../../images/index' ;
import {TestimonialCarousel} from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from './Search';
import '../../App.css';
import '../../Homepage.css';



class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcome: "Welcome To our Food App Menu",
            posts: []
        };
    }
    render() {
        return (
            <>
            <UserContext.Consumer>
                { ({user}) => (
                    <>
                            <Container fluid className="wrapper_homepage" id="welcome">
                            <Row className="homepage_intro">
                                <Col className="homepage_user">
                                    <Col>
                                        <Image src= {logo} width="150" height="150" className="d-inline-block align-top" alt="React Bootstrap logo" />
                                        <p>Welcome {user.name}</p>
                                        <p>YourMenu delivers in your neighborhood</p> 
                                        <Search></Search>                                       
                                    </Col>
                                </Col>
                            </Row>
                        </Container>
                        <Container className="homepage_middle">
                            <Row className="homepage_middle_header">
                                <Col>
                                    <h1>Why order with YourMenu </h1>
                                    <p className="homepage_divider"></p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={4}>
                                    <Image className="homepage_middle_img" src={bottle} alt="Bottle"/>
                                    <Image className="homepage_middle_shadow" src={shadow}/>
                                    <Col className="bubbles">
                                        <span className="bubbles-bubbles" ></span>
                                        <span className="bubbles-bubbles" ></span>
                                        <span className="bubbles-bubbles" ></span>
                                        <span className="bubbles-bubbles" ></span>
                                        <span className="bubbles-bubbles" ></span>
                                        <span className="bubbles-bubbles"></span>
                                        <span className="bubbles-bubbles"></span>
                                        <span className="bubbles-bubbles"></span>
                                    </Col>
                                    <Col>
                                        <Col><h3>Find Favorites and Discover New Ones</h3></Col>
                                        <p>Browse thousands of restaurants and stores to get the best of your neighborhood delivered.</p>
                                    </Col>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Image className="homepage_middle_img" src={phone} alt="Phone" />
                                    <Image className="homepage_middle_shadow" src={shadow}/>
                                    <Col className="bubbles">
                                        <span className="bubbles-bubbles" ></span>
                                        <span className="bubbles-bubbles" ></span>
                                        <span className="bubbles-bubbles" ></span>
                                        <span className="bubbles-bubbles" ></span>
                                        <span className="bubbles-bubbles" ></span>
                                        <span className="bubbles-bubbles"></span>
                                        <span className="bubbles-bubbles"></span>
                                        <span className="bubbles-bubbles"></span>
                                    </Col>
                                    <Col>
                                        <Col><h3>Free, Easy,<br></br> and Essential</h3></Col>
                                        <p>It's free to order, so save time tackling your to-do list at home, at work, or on the go.</p>
                                    </Col>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Image className="homepage_middle_img" src={trophy} alt="Trophy" />
                                    <Image className="homepage_middle_shadow" src={shadow}/>
                                    <Col>
                                        <Col><h3>Earn Points and Get Rewards</h3></Col>
                                        <p>It's free to order, so save time tackling your to-do list at home, at work, or on the go.</p>
                                    </Col>
                                </Col>
                            </Row>
                            </Container>
                        <Container fluid className="homepage_about_us" id="about">
                            <Row>
                            <Container>
                                <Col>
                                    <h1>About us</h1>
                                    <div className="homepage_divider"></div>
                                    <p className="hompage_paragraph">YourMenu.com lets people order online from their favorite local restaurants, liquor stores, grocery stores, and laundry and dry cleaning providers.</p>
                                </Col>
                                <Col>
                                    <ListGroup as ="ul">
                                         <ListGroup.Item as="li">
                                            <p><FontAwesomeIcon icon={['fas', 'users']} size={'3x'}/></p>
                                            <h5><Image src={h2_pic}></Image>2 MILLION+ USERS<Image src={h2_pic_1}></Image></h5><span>order online</span>
                                         </ListGroup.Item>
                                         <ListGroup.Item as="li">
                                            <p><FontAwesomeIcon icon={['fas', 'store']} size={'3x'}/></p>
                                            <h5>12,000+ MERCHANTS</h5><span>grow their businesses</span>
                                         </ListGroup.Item>
                                         <ListGroup.Item as="li">
                                            <p><FontAwesomeIcon icon={['fas', 'globe-americas']} size={'3x'}/></p>
                                            <h5><Image src={h2_pic_2}></Image>100+ CITIES</h5><span>& even more on the way</span>
                                         </ListGroup.Item>
                                         <ListGroup.Item as="li">
                                         <p><FontAwesomeIcon icon={['fas', 'clipboard-list']} size={'3x'}/></p>
                                            <h5>25MM ORDERS</h5><span>and counting</span>
                                         </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Container>
                            </Row>
                            <Row className="cell_row">
                                <Container className="cell_about">
                                    <Image fluid src = {cell} className="cell" alt="About Us"/>
                                </Container>
                                <Container className="cell_about_sec">
                                    <h1>The neighborhood <br></br>in your pocket</h1>
                                    <Col className="line"><Image src={line}></Image></Col>
                                    <Col className="easy_more">
                                        <span><strong>EASY ORDERING</strong><br></br> Quick, convenient & free to order on any device.</span>
                                        <span><strong>MORE CHOICES</strong><br></br>Your one-stop shop for everything from food to dry cleaning.</span>
                                        <p><Image className="social_app" src={appstore}></Image></p>
                                        <p><Image className="social_google" src={google}></Image></p>
                                    </Col>
                                </Container>
                            </Row>
                        </Container>
                        <Container fluid className="homepage_testimonial">
                            <Row className="homepage_middle_header">
                                <Col>
                                    <h1>Merchant testimonials</h1>
                                    <p className="homepage_divider"></p>
                                </Col>
                            </Row>
                            <TestimonialCarousel></TestimonialCarousel>
                        </Container>
                        <Container fluid>
                            <Row className="map_row">
                                <Col xs={12} md={6} className="homepage_localization">
                                    <h3 className="homepage_title">Discover, order, and track in the app.</h3>
                                    <p className="hompage_paragraph">We are a start-up on-demand network in the industry and  you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. </p>
                                </Col>
                                <Col xs={12} md={6} className="map" >
                                    <Col className="homepage_google_map">
                                        <Map className="map_google" google={this.props.google}
                                            initialCenter={{
                                                    lat: 45.6525767,
                                                    lng: 25.5264224
                                                }}
                                            zoom={10}
                                        >
                                        <Marker onClick={this.onMarkerClick} name={'Current location'} />
                                    </Map>
                                    </Col>
                                </Col>
                            </Row>
                        </Container>

                    </>
                )}
            </UserContext.Consumer>
            </>


        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyA8IRQEYZiMYyOsk5SNapLmyprA5g_Ol1Y"
})(HomePage)
