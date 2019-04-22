import React from 'react';
import '../../App.css';
import '../../Review.css';
import UserContext from '../../shared/user.context';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, Container, Row, Image, Col } from 'react-bootstrap';
import { logo } from '../../images/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.apiUrl = `http://localhost:3004/menu/${this.props.match.params.id}`;
        this.state = {
            menu: {},
            menu_items: [],
            tags:[],
            sub_items: [],
        };

        // this.inputChanged = this.inputChanged.bind(this);
        // this.formSubmit = this.formSubmit.bind(this);
    }

    async componentDidMount() {
        const menu = (await axios.get(this.apiUrl)).data;
        this.setState({ menu, menu_items: menu['menu-items'] });
        this.setState({ sub_items: menu['menu-items'][0]['sub-items'] })
        //console.log(menu['menu-items']);
    }

    render() {
        if (this.state.redirect === true) {
            return (
                <Redirect to='/' />
            );
        }
        const { validated } = this.state;
        return (
            <UserContext.Consumer>
                {({ user, handleUserChange }) => (
                    <Container fluid className="contact_container" >
                        <Row>
                            <Container className="form_container">
                                <Image src={logo} width="80" height="80" className="d-inline-block align-top" alt="React Bootstrap logo" />
                                <Col>
                                    <span className="star-review">Review</span>
                                </Col>
                                <Form noValidate validated={validated} onSubmit={e => this.formSubmit(e)}>         <Form.Group>
                                    <Form.Control as="textarea" id="comment" rows="3" value={this.menu} onChange={this.inputChanged} placeholder="Leave a comment:" />
                                    </Form.Group>
                                    <Form.Label>Tell your opinion by assigning a product note</Form.Label>
                                    <Form.Control as="select" multiple>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                    <Button type="submit" variant="outline-secondary">Send</Button>
                                </Form>

                            </Container>
                        </Row>
                    </Container>
                )}
            </UserContext.Consumer>
        );
    }
}

Review.contextType = UserContext;

export default Review;
