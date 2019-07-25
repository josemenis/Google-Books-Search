import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Book } from '../components/Book';
import { Col, Row, Container } from "../components/Grid";
import Form from "../components/Form";

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
      query: value
    });
  };

  handleFormSubmit = event => {
    // defines object in let
    let {
      title,
      subtitle,
      authors,
      description,
      image,
      link,
      googleID
        // gotta figure out why this doesn't work
    } = this.state.books[event.target]
    
      API.saveBook({
        title,
        subtitle,
        authors,
        description,
        image,
        link,
        googleID
      })
        .then(response => response.json())
        .then(results => {
          console.log(results)
          console.log('book saved')
        })
        .catch(err => console.log(err));
  };

  // render () {
  //   return (
  //     // jsx returns only one thing, wrap all in a div
  //     <div>
  //     <Navbar />
  //     <Container fluid>
  //     <Row>
  //       <Col size="md-12">
  //         <Jumbotron>
  //           <h1>(React) Google Books Search</h1>
  //           <p>Search for and Save Books of Interest</p>
  //         </Jumbotron>
  //         <Card>
  // <Card.Body>
  //   <Card.Title>Book Search</Card.Title>
  //         <Form
  //         onChange={this.handleInputChange}
  //         name="book"
  //         placeholder="Book Name (required)"
  //         />
  //       <Button variant="primary" onClick={() => this.loadBooks()}>
  //         Search
  //       </Button>
  //   </Card.Body>
  //   </Card>
  //     <Card>
  //       <Card.Body>
  //       <Card.Title>Results</Card.Title>
  //       {/* <SearchResult /> */}
  //       </Card.Body>
  //     </Card>
  //       </Col>
  //     </Row>
  //   </Container>
  //   </div>
  //   )
  // }

  render() {
    return(
    <div>
    <Navbar />
    <Container fluid>
    <Row>
    <Col size="md-12">
      <Jumbotron>
       <h1>(React) Google Books Search</h1>
       <p>Search for and Save Books of Interest</p>
      </Jumbotron>
      <Form />
      {/* <Book 
      
      /> */}
    </Col>
    </Row>
    </Container>
    </div>
    )
    }
}
export default Search
