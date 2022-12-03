import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Login() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value: React.SetStateAction<string>) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
      <br />
      <br />
      <h1 style={{ color: "#220f22", textAlign: "center" }}>MarkAid</h1>
      <MDBContainer
        className="p-3 my-5 d-flex flex-column w-50"
        style={{ backgroundColor: "#ede5ed" }}
      >
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <MDBTabsItem style={{ marginRight: "10px" }}>
            <MDBTabsLink
              style={{
                backgroundColor: justifyActive ? "#9a499a" : "",
                color: "white",
              }}
              onClick={() => handleJustifyClick("tab1")}
              active={justifyActive === "tab1"}
            >
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
              style={{
                backgroundColor: justifyActive ? "#9a499a" : "",
                color: "white",
              }}
            >
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <h3 style={{ textAlign: "center", color: "#9a499a" }}>Sign In</h3>
            <br />
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#" style={{ color: "#9a499a" }}>
                Forgot password?
              </a>
            </div>

            <MDBBtn
              className="mb-4 w-100"
              style={{ backgroundColor: "#9a499a" }}
            >
              Sign in
            </MDBBtn>
            <p className="text-center">
              Not a member? <a href="#!">Register</a>
            </p>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "tab2"}>
            <h3 style={{ textAlign: "center", color: "#9a499a" }}>Sign Up</h3>
            <br />

            <MDBInput wrapperClass="mb-4" label="Name" id="form1" type="text" />
            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              id="form1"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              type="password"
            />

            <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I have read and agree to the terms"
              />
            </div>

            <MDBBtn
              className="mb-4 w-100"
              style={{ backgroundColor: "#9a499a" }}
            >
              Sign up
            </MDBBtn>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </>
  );
}

export default Login;
