import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

import * as Icon from "react-bootstrap-icons";

import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <Navbar
          variant="dark"
          style={{ backgroundColor: "#836eaa", borderRadius: "13px" }}
        >
          <Container fluid style={{ backgroundColor: "#836eaa" }}>
            <Navbar.Brand
              href="#home"
              style={{ fontSize: "30px", padding: "10px", color: "white" }}
            >
              MarkAid
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav style={{ marginLeft: "40px" }}>
                <Nav.Link href="/exam/create" style={{ color: "white" }}>
                  Create Exam
                </Nav.Link>
                <Nav.Link href="/grade/essay" style={{ color: "white" }}>
                  Grade Essay
                </Nav.Link>
                <Nav.Link href="/agent/qa" style={{ color: "white" }}>
                  Q&A
                </Nav.Link>
                <Nav.Link href="/student/info" style={{ color: "white" }}>
                  Students
                </Nav.Link>

                <NavDropdown id="nav-dropdown-dark-example" title="Marking">
                  <NavDropdown.Item href="#action/3.1">
                    Essay Marking
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Rubric Based Marking
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Icon.Person
                size="30"
                style={{ marginLeft: "850px", color: "white" }}
              />
              <div style={{ color: "white" }}>
                <NavDropdown id="nav-dropdown-dark-example" title="User">
                  <NavDropdown.Item href="#action/3.1">
                    Setting
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
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
