import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

import * as Icon from "react-bootstrap-icons";

import "bootstrap/dist/css/bootstrap.min.css";

function TeacherHeader() {
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
                <Nav.Link href="" style={{ color: "white" }}>
                  Classrooms
                </Nav.Link>
                
                <Nav.Link href="" style={{ color: "white" }}>
                  Feedbacks
                </Nav.Link>
                <NavDropdown id="nav-dropdown-dark-example" title="Marking" >
                  <NavDropdown.Item href="#action/3.1">
                    Essay Marking
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Rubric Based Marking
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/student/info" style={{ color: "white",marginLeft:"700px",width:"150px"}}>
                  Manage Profile
                </Nav.Link>
              </Nav>
              <Icon.Person
                size="30"
                style={{ color: "white" }}
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

export default TeacherHeader;
