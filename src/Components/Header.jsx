import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-white">
          <i><b>Academy Path</b></i>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar "   />
        <Navbar.Collapse id="main-navbar" >
          <Nav className="me-auto ">
            <Nav.Link  as={Link} to="/" className="text-primary">Home</Nav.Link>
            <Nav.Link as={Link} to="/plans" className="text-primary">Plans & Pricing</Nav.Link>
            <Nav.Link as={Link} to="/courses" className="text-primary">Courses</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-primary">About Us</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center">
            <input
              type="text"
              className="form-control me-2"
              style={{ maxWidth: '300px' }}
              placeholder="Search"
            />
            <Link to="/login">
              <Button variant="info" className="me-3">Sign In</Button>
            </Link>
           
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;