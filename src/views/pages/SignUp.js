import React  from 'react';
import '../../App.css';
import '../../SignUp.css';
import UserContext from '../../shared/user.context';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, Container, Row, Image, Col } from 'react-bootstrap';
import { logo } from '../../images/index' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SignUp extends React.Component {
  constructor(props) {
      super(props);
      this.apiUrl = "http://localhost:3004/users";
      this.state = {
        id: 0,
        user: {},
        name: '',
        email: '',
        password: '',
        redirect: false,
        validated: false,
        isValid: true,
        userExist: []
      };

      this.inputChanged = this.inputChanged.bind(this);
      this.formSubmit = this.formSubmit.bind(this);
  }

  async inputChanged(e) { // boiled plate
    const value = e.currentTarget.value;
    const user = this.state.user;
    user[e.currentTarget.id] = value;
    this.setState({user});
  }

  async formSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      return;
    }

    const resp =  await axios.post(this.apiUrl, this.state.user);
    console.log(resp.data);

    this.context.handleUserChange(resp.data);
    this.setState({validated: true, user: resp.data, redirect: true});
  }

  render() {
      if (this.state.redirect === true) {
          return (
          <Redirect to='/' />
          );
      }
      const {validated} = this.state;
      return (
        <UserContext.Consumer>
          { ({ user, handleUserChange }) => (
            <Container fluid className="sign_up_container" >
              <Row>
                <Container className="form_container">
                    <Image src= {logo} width="80" height="80" className="d-inline-block align-top" alt="React Bootstrap logo" />
                    <Col>

                      <h2><FontAwesomeIcon icon={['fas', 'user-plus']} size={'lg'}/>SIGN UP</h2>
                    </Col>
                    <Form noValidate validated= {validated} onSubmit={e => this.formSubmit(e)} >
                      <Form.Group className="form_name">
                          <Form.Control required id="name" type="text" value={this.state.user.name} onChange={this.inputChanged} placeholder="Name" />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">Please enter a name.</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form_email">
                          <Form.Control required id="email" type="email" value={this.state.user.email}  onChange={this.inputChanged} placeholder="Enter email"  />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                          <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                          </Form.Text>
                      </Form.Group>
                      <Form.Group className="form_password">
                          <Form.Control required id="password" type="password" value={this.state.user.password}  onChange={this.inputChanged} placeholder="Password" />
                          <Form.Control.Feedback>Super Password!</Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">Please set a strong password.</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="form_submit">
                          <Form.Check id="formBasicChecbox" type="checkbox" label="Keep me logged in to my account" />
                      </Form.Group>
                      <Button type="submit" variant="outline-secondary">Login</Button>
                     </Form>
                     <p>{!this.state.isValid ? ("Name, email or password is missing") : ''}</p>
                  </Container>
                </Row>
            </Container>
            // <div className="App">
            //     <h2>Welcome, {user.name} { this.state.userExist.map(user => user.name)}</h2>
            //   {/* <ButtonToolbar>
            //     <Button variant="primary" onClick={() => this.setState({ modalShow: true })}> Log In </Button>
            //     <ModalLogin show={this.state.modalShow} onHide={modalClose} />
            //   </ButtonToolbar> */}
            //     <div>
            //       {/* <p>{JSON.stringify(this.state)}</p>   */}
            //       <p>{ this.state.userExist.map(user => user.name)}</p>
            //     </div>
            // </div>
          ) }
          </UserContext.Consumer>
    );
  }
}

SignUp.contextType = UserContext;

export default SignUp;
