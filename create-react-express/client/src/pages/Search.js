import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input } from "../components/Form";
// import SearchResult from '../components/SearchResult';
import {GoogleBooksAPI as Keys} from "../utils/Key";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Search extends Component {
    state = {
      books: [],
      title: "",
      author: "",
      synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    fetch(`https://WWW.googleapis.com/books/v1/volumes?q=${this.state.book}`)
      .then(response => response.json())
      .then(res =>
        // this.setState({ books: res, title: "", author: "", description: "", image: "", link: "" })
        this.setState({ books: res, title: "", author: "", synopsis: "" })
        )
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
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(response => response.json())
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render () {
    return (
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
    {/* <Input      type="text"    
                title={this.state.title1}
                value={this.state.author}
                description={this.state.description}
                image={this.state.image}
                link={this.state.link}
                onChange={this.handleInputChange}
                name="book"
                placeholder="Book Name (required)"
              /> */}
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
        <Button variant="primary" onClick={() => this.loadBooks()}>Search</Button>
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
