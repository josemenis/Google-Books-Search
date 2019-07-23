import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

class Navb extends Component {
  render () {
    return (
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
export default Navb
