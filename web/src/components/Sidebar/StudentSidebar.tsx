import { useState } from "react";

import { Container, Content,OpenSideBar } from "./styles";

// import { BsLockFill } from "react-icons/bs";

import * as Icon from "react-bootstrap-icons";
// import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
export function StudentSideBar() {
    const hello = 'Hello, ';
    const world = 'World!';
  const [sideBar, setSideBar] = useState(false);
  function handleChangeSideBar() {
    setSideBar((prevState) => !prevState);
  }
  return (
    
    <Container style={{ backgroundColor: "#b6acd1" }}>
      <Content>
       
          <OpenSideBar style={{ backgroundColor: "#836eaa" ,borderRadius:"13px"}}>
            <section>
              <nav>
                <span>
                 
                </span>
                <div style={{marginLeft:"90px",marginTop:"50px",backgroundColor:"white",borderRadius:"15px"}}>
                  <h1 style={{fontWeight:"bold",fontSize:"50px",color:"#4e2a84"}}>Mark</h1><h1 style={{fontWeight:"bold",fontSize:"50px",color:"#b6acd1",marginLeft:"-11px"}}>Aid </h1>
                </div>

                {/* Icones principais do app */}
                <div>
                  <ul>
                    <a href="/">
                      <Icon.CardText style={{ color: "white" }} />
                      <p
                        style={{
                          fontSize: "20px",
                          color: "white",
                          fontFamily: "cursive",
                        }}
                      >
                        Courses
                      </p>
                    </a>
                    <a href="/">
                      <Icon.CardText style={{ color: "white" }} />
                      <p
                        style={{
                          fontSize: "20px",
                          color: "white",
                          fontFamily: "cursive",
                        }}
                      >
                        Assignment
                      </p>
                    </a>
                    
                    <a href="/" title="Alguma coisa">
                      <Icon.CardChecklist style={{ color: "white" }} />
                      <p
                        style={{
                          fontSize: "20px",
                          color: "white",
                          fontFamily: "cursive",
                        }}
                      >
                        Q&Ans
                      </p>
                    </a>
                    <a href="/" title="Alguma coisa">
                      <Icon.Flag style={{ color: "white" }} />
                      <p
                        style={{
                          fontSize: "20px",
                          color: "white",
                          fontFamily: "cursive",
                        }}
                      >
                        Feedback
                      </p>
                    </a>
                  </ul>
                </div>
              </nav>
              <div>
                {/* Icones que pode não ser tão principais no app */}
                <ul style={{ marginLeft: "22%" }}>
                  <a href="/" style={{ fontFamily: "Abril Fatface" }}>
                    <Icon.Sliders style={{ color: "white" }} />
                    <p
                      style={{
                        fontSize: "20px",
                        color: "white",
                        fontFamily: "cursive",
                      }}
                    >
                      Setting
                    </p>
                  </a>
                  <a href="/">
                    <Icon.PersonCircle style={{ color: "white" }} />
                    <p
                      style={{
                        fontSize: "20px",
                        color: "white",
                        fontFamily: "cursive",
                      }}
                    >
                      Profile
                    </p>
                  </a>
                  <a href="/">
                    <Icon.BoxArrowRight style={{ color: "white" }} />
                    <p
                      style={{
                        fontSize: "20px",
                        color: "white",
                        fontFamily: "cursive",
                      }}
                    >
                      Logout
                    </p>
                  </a>
                </ul>
              </div>
              <span>{/* <img src={userImg} alt="Eu" /> */}</span>
            </section>
            <aside onClick={handleChangeSideBar} />
          </OpenSideBar>
        
      </Content>
    </Container>
  );
}
