import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image} from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch, useSelector} from 'react-redux'

const NavBar = () => {
  const dispatch = useDispatch()
  const cartState = useSelector(state => state.cartReducer)
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand >
            <Image src='images/logo.png' alt='logo' style= {{height: '70px'}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/login'>
            <Nav.Link >Login</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to='/cart'>
            <Nav.Link >Cart {cartState.cartItems.length}</Nav.Link>
            </LinkContainer>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;