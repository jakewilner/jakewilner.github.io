import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

function MyNavbar() {
  return (
      <Navbar variant='dark' expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='hamburger'>
            <Nav className="ml-auto">
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/#/projects">Overview</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="/#/projects/saguaro">Saguaro Identification</NavDropdown.Item>
                <NavDropdown.Item href="/#/projects/forex">Forex Assistant</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="/#/projects/other">Other Work</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/#/contact">Contact</Nav.Link>
              <Nav.Link href="/#/about">About Me</Nav.Link>
              <Nav.Link href="/#/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
  );
}

export default MyNavbar;