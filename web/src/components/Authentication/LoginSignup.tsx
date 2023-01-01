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
    <div style={{backgroundImage: "url(C:\Users\BILAL\Downloads\background.png)"}}>
      <MDBContainer
        
        style={{ backgroundColor: "#ede5ed",borderRadius:"13px",width:"450px" }}
      >
        

        <MDBTabsContent style={{width:"400px",padding:"40px" }}>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <h3 style={{ textAlign: "center", color: "#9a499a" }}>Sign In</h3>
            <br />
            <p>Email address</p>
            <MDBInput
              wrapperClass="mb-4"
              
              id="form1"
              type="email"
            />
            <p>Password</p>
            <MDBInput
              wrapperClass="mb-4"
              
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
              Not a member? <a href="#"
              onClick={() => handleJustifyClick("tab2")}
              >Register</a>
            </p>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "tab2"}>
            <h3 style={{ textAlign: "center", color: "#9a499a" }}>Sign Up</h3>
            <br />
            <p>Name</p>
            <MDBInput wrapperClass="mb-4"  id="form1" type="text" />
            <p>Username</p>
            <MDBInput
              wrapperClass="mb-4"
              id="form1"
              type="text"
            />
            <p>Email</p>
            <MDBInput
              wrapperClass="mb-4"
             
              id="form1"
              type="email"
            />
            <p>Password</p>
            <MDBInput
              wrapperClass="mb-4"
             
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
              style={{ backgroundColor: "#9a499a",outlineColor:"#9a499a" }}
            >
              Sign up
            </MDBBtn>
            <p className="text-center">
              Already Member <a href="#"
              onClick={() => handleJustifyClick("tab1")}
              >Login</a>
            </p>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
      </div>
      {/* <MDBTabs
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
        </MDBTabs> */}
    </>
  );
}

export default Login;
