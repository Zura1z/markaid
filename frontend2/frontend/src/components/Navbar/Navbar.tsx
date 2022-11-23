import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg"  style={{backgroundColor:"#880e4f"}}>
      <Container>
        <Navbar.Brand href="#home" style={{color:"white"}}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{color:"white"}}>Features</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"white"}}>Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown" style={{color:"white"}}>
              <NavDropdown.Item href="#action/3.1" style={{color:"white"}}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{color:"white"}}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{color:"white"}}>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" style={{color:"white"}}>More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{color:"white"}}>
              Dank memes
            </Nav.Link>
          </Nav>
        
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;