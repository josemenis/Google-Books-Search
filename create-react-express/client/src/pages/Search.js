import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

class Search extends Component {
  render () {
    return (
      // <h1>TEST</h1>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href='/'>Googlebooks</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/Search'>Search</Nav.Link>
          <Nav.Link href='/Saved'>Saved</Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}
export default Search
