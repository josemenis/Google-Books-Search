import React, { Component } from 'react'
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Navbar from '../components/Navbar'
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import Book from '../components/Book';
import { List } from '../components/List';

class Search extends Component {
  state = {
    books: [],
    q: ''
  };

  componentDidMount() {
    // this.loadBooks()
  }

  loadBooks = () => {
    API.getBooks(this.state.q)
      .then(response => response.json())
      .then(results => {
        // q results
        console.log('------loadBooks Results--------')
        console.log(results)
        this.setState({
          // books comes back as an object, we only want the items.
          books: results.items
        })
        console.log('-----loadBooks this.state.book--------')
        console.log(this.state.books)
      })
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
    if (this.state.q) {
      this.loadBooks()
    }
  };

  handleSaveBook = id => {
    // get book details from state & save to a variable
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const book= this.state.books.find((book) => book.id === id)
    console.log('-------handleSaveBook book------')
    console.log(book)
    // send book details to savebook API method
    API.saveBook({
      // values from loadBook results.items
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink,
      googleId: book.id
    })
    .then(response => response.json())
    .then(res => this.loadBooks())

    .catch(err => console.log(err));
};

  render() {
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
              <Form
                q={this.state.q}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              <br />
              <br />
              {/* If books display books, if not diplay no results */}
              {this.state.books.length ? (
                <List>
                {
                  this.state.books.map(book => (                  
                    <Book
                      // values from loadBook results.items
                      id={book.id}
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      // not all books have authors, if no author ignore with conditional (ternary) operator
                      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
                      authors={book.volumeInfo.authors ? book.volumeInfo.authors.join(): ""}
                      link={book.volumeInfo.infoLink}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.smallThumbnail}
                      Button={() =>
                        <button onClick={() => this.handleSaveBook(book.id)}
                        >
                        Save Book
                        </button>
                      }
                    />
                  )
                )
              }
              </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Search
