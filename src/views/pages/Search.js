import React from 'react';
import { Form, FormControl, Button, Container, Col } from'react-bootstrap';
import axios from 'axios';
import Suggestions from './Suggestions';
import '../../Suggestions.css'


class Search extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            query: '',
            results: [],
            show: true, 
        };
        this.apiUrl = "http://localhost:3004/menu";
        this.formSubmit = this.formSubmit.bind(this);
        this.handleInputChange =this.handleInputChange.bind(this);
        
}

 handleInputChange() {
   this.setState({
     query: this.search.value    
   }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.formSubmit()
        }
      } else if (!this.state.query) {
      }
   })  
 }

 async formSubmit(e) { 
   e.preventDefault();     
  const url = this.apiUrl + "/?name=" + this.state.query; 
  const resp = await axios.get(url);
 
  if(resp.data[0]) {
    this.setState({results: resp.data});
  } else {
    this.setState({show: false})
  }
  console.log(this.state.results);
}


 render() {
   return (
    <Container>
      <Form inline  onSubmit={e => this.formSubmit(e)} >
          <FormControl 
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            />         
          <Button type="submit" variant="outline-success">Search</Button> </Form>
      <Col>
          <p>{!this.state.show ? ("No results found! Try something like Appeteasers ") : ''}</p>
          <Suggestions results={this.state.results} /> 
      </Col>
    </Container>
   )
 }
}

export default Search