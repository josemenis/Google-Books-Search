import React, { Component } from 'react'
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Navbar from '../components/Navbar'
import Jumbotron from "../components/Jumbotron";
import Book from '../components/Book';
import { List } from '../components/List';

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getSavedBooks()
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(response => response.json())
      .then(results => {
        console.log(results)
        this.setState({
          books: results
        })
        console.log(this.state.books)
      })
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(response => response.json())
      .then(res => this.getSavedBooks())
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
                <h1>(React) Google Books Saved</h1>
                <p>Search for and Save Books of Interest</p>
              </Jumbotron>
              <br />
              {/* If books display books, if not diplay no results */}
              {this.state.books.length ? (
                <List>
                {
                  this.state.books.map(book => (                  
                    <Book
                      id={book._id}
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      // if no author ignore with ternary
                      authors={book.authors ? book.authors.join(): ""}
                      link={book.link}
                      description={book.description}
                      image={book.image}
                      Button={() =>
                        <button onClick={() => this.deleteBook(book._id)}
                        >
                        Delete Book
                        </button>
                      }
                    />
                  )
                )
              }
              </List>
              ) : (
                  <h3>No Saved Books to Display</h3>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Saved
