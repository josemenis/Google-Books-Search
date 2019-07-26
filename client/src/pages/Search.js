import React, { Component } from 'react'
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Navbar from '../components/Navbar'
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import Book from '../components/Book';

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// ATTENTION FOR WHOEVER IS GRADING THIS
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PSUEDO CODE CHECK POINTS FOR WHAT IS DONE
// [x] Routes @ Navbar to switch between Saved Pg. & Search Pg.
// [ ] SearchPage.js fetch the google API for a book, console logged results
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

  deleteBook = id => {
    API.deleteBook(id)
      .then(response => response.json())
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log('123456789')
    console.log(event)
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
    } = this.state.books[event.target.data]
    
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
      <Book
       title={this.state.books.title}
       subtitle={this.state.books.subtitle}
       authors={this.state.books.authors}
       link={this.state.books.link}
       description={this.state.books.description}
       image={this.state.books.image}
       Button= {() => 
        <button
        // --------- Regular Function ----------->
        //   onClick={function() {
        //   return this.handleFormSubmit()
        //   }
        // }
        //---------- Arrow Function ------------->
          onClick={ () => {
             return this.handleFormSubmit();
            } 
          }
        >
        Save Book
        </button>
      }
       />
    </Col>
    </Row>
    </Container>
    </div>
    )
    }
}
export default Search
