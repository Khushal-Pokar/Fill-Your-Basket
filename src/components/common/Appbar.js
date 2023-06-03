import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../assets/styles/Search.css'
import { NavLink } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import Login from './Login';
import Register from './Register';
import CartBtn from './CartBtn';

function Appbar() {
    let activeStyle = {
        color: 'white',
        textDecoration: 'underline',
    };
    let notActiveStyle = {
        color: 'white',
    };
    
  return (
    <Navbar bg="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className="nav-link nav"
              style={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link nav"
              style={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              to="/categories"
            >
              Categories
            </NavLink>
            <NavLink
              className="nav-link nav"
              style={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              to="/about-us"
            >
              About Us
            </NavLink>
            <NavLink
              className="nav-link nav"
              style={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              to="/contact-us"
            >
              Contact Us
            </NavLink>
          </Nav>
          <Navbar.Brand
            className="me-auto"
            style={{
              color: "white",
              fontFamily: 'cursive',
              fontWeight: "bold",
              fontSize: "26px",
              letterSpacing: "8px",
            }}
          >
            Fill Your Basket
          </Navbar.Brand>
          <Nav>
            {/* <Form className="d-flex me-2">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light"><GoSearch /></Button>
            </Form> */}
            {/* <div class="search-box d-flex justify-center align-center me-2">
              <input type="text" placeholder="Search" />
              <Button variant="outline-light">
                <GoSearch />
              </Button>
            </div> */}
            <Login />
            <Register />
            <CartBtn />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;