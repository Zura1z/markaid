import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from 'react-bootstrap-icons';
import { Icon0Circle } from 'react-bootstrap-icons';

function Header() {
  return (
    <>
    <div style={{padding:"20px"}}>
    <Navbar variant="dark" style={{backgroundColor:"#836eaa",borderRadius:"13px"}}>
      <Container fluid style={{backgroundColor:"#836eaa"}}>
        <Navbar.Brand href="#home" style={{fontSize:"30px", padding:"10px", color:"white"}}>MarkAid</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav style={{ marginLeft:"40px"}}>
          <Nav.Link href="#features" style={{ color: "white" }}>
            Classroom
          </Nav.Link>
          <Nav.Link href="#pricing" style={{ color: "white" }}>
            Exam Genration
          </Nav.Link>
          <Nav.Link href="#pricing" style={{ color: "white" }}>
            Exam Genration
          </Nav.Link>
          <Nav.Link href="#pricing" style={{ color: "white" }}>
            Exam Genration
          </Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Marking">
              <NavDropdown.Item href="#action/3.1">Essay Marking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Rubric Based Marking
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Icon.Person size="30"style={{marginLeft:"600px", color:"white"}} />
          <div style={{ color:"white"}}>
         
          <NavDropdown
              id="nav-dropdown-dark-example"
              title="User">
              <NavDropdown.Item href="#action/3.1">Setting</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            </div>
        </Navbar.Collapse>
      </Container>

    </Navbar>
    </div>
    </>
  );
}

export default Header;