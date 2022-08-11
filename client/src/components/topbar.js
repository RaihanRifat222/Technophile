import React from 'react'
import '../App.css'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {LinkContainer } from 'react-router-bootstrap'
import {MdLocalOffer} from 'react-icons/md'
const TopBar = () => {
  return (
    <div>
        <Navbar  bg='nav' varient='dark' expand='lg'>
            <Container fluid >
                
                <Navbar.Brand style={{ color: "white" }}>Technophile</Navbar.Brand>
                <Nav className='ms-auto'>
                    <LinkContainer to="/" style={{ color: "white" }}>
                        <Nav.Link > Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about" style={{ color: "white" }}>
                        <Nav.Link> About Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact" style={{ color: "white" }}>
                        <Nav.Link> Contact</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/policy" style={{ color: "white" }}>
                        <Nav.Link> Terms and Policy</Nav.Link>
                    </LinkContainer>
                </Nav>
                
            </Container>
        </Navbar>
    </div>
  )
}

export default TopBar;