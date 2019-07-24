import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input } from "../components/Form";
// import SearchResult from '../components/SearchResult';

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// ATTENTION FOR WHOEVER IS GRADING THIS
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PSUEDO CODE CHECK POINTS FOR WHAT IS DONE
// [x] SearchPage.js fetch the google API for a book, console logged results
// [ ] Save it to my database
// [ ] SavedPage.js fetch my api
// [ ] Load the saved ones to your saved page
// [ ] @ saved page implement the delete button to delete the book from your database
// [ ] the view button its the most easy one, just get the link from the object and use the href attribute
////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Search extends Component {
    state = {
      books: [],
      q: ''
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
      API.getBooks(this.state.q)            
      .then(response => response.json())
      .then(results => 
        this.setState({
          books: results
        }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // defines object in let
    let {
      title,
      authors,
      description,
      image,
      link
        // gotta figure out why this doesn't work
    } = this.state.books[event]
    
      API.saveBook({
       title,
       authors,
       description,
       image,
       link
      })
        .then(response => response.json())
        .then(results => {
          console.log(results)
          console.log('book saved')
        })
        .catch(err => console.log(err));
  };

  render () {
    return (
      // jsx returns only one thing, wrap all in a div
      <div>
      <Navbar />
      <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <p>Search for and Save Books of Interest</p>
          </Jumbotron>
          <Card>
  <Card.Body>
    <Card.Title>Book Search</Card.Title>
          <Input
          onChange={this.handleInputChange}
          name="book"
          placeholder="Book Name (required)"
          />
        <Button variant="primary" onClick={() => this.loadBooks()}>
          Search
        </Button>
    </Card.Body>
    </Card>
      <Card>
        <Card.Body>
        <Card.Title>Results</Card.Title>
        {/* <SearchResult /> */}
        </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>
    </div>
    )
  }
}
export default Search
