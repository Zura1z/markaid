import { useState } from "react";

import { Container, Content, ClosedSideBar, OpenSideBar } from "./styles";

// import { BsLockFill } from "react-icons/bs";

import * as Icon from "react-bootstrap-icons";
// import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
export function SideBar() {
  const [sideBar, setSideBar] = useState(false);
  function handleChangeSideBar() {
    setSideBar((prevState) => !prevState);
  }
  return (
    <Container style={{ backgroundColor: "black" }}>
      <Content>
        {!sideBar ? (
          <ClosedSideBar style={{ backgroundColor: "black" }}>
            <nav>
              <button
                onClick={handleChangeSideBar}
                style={{
                  backgroundColor: "transparent",
                  borderBlockColor: "transparent",
                }}
              >
                <Icon.List size={"20"} style={{ color: "white" }} />
              </button>

              {/* Links principais do app */}
              <ul>
                <a href="/" title="Assignment">
                  <Icon.CardText style={{ marginRight: "40%" }} />
                </a>
                <a href="/" title="Q&A">
                  <Icon.ChatFill style={{ marginRight: "40%" }} />
                </a>
                <a href="/" title="Quiz">
                  <Icon.CardChecklist style={{ marginRight: "40%" }} />
                </a>
                <a href="/" title="Feedback">
                  <Icon.Flag style={{ marginRight: "40%" }} />
                </a>
              </ul>
            </nav>
            <div>
              {/* Icones que pode não ser tão principais no app */}
              <ul>
                <a href="/" title="Notificações">
                  {/* <IoNotificationsSharp /> */}
                </a>
                <a href="/" title="Configurações">
                  <Icon.Sliders style={{ marginRight: "40%" }} />
                </a>
                <a href="/" title="Sair da conta">
                  <Icon.PersonCircle style={{ marginRight: "40%" }} />
                </a>
              </ul>

              <span></span>
            </div>
          </ClosedSideBar>
        ) : (
          <OpenSideBar style={{ backgroundColor: "#1b1919" }}>
            <section>
              <nav>
                <span>
                  <button
                    onClick={handleChangeSideBar}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <Icon.ArrowLeft size={"20"} style={{ color: "white" }} />
                  </button>
                </span>
                <div>
                  <h1>logo </h1>
                </div>

                {/* Icones principais do app */}
                <div>
                  <ul>
                    <a href="/">
                      <Icon.CardText style={{ color: "#836eaa" }} />
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
                      <Icon.ChatFill style={{ color: "#836eaa" }} />
                      <p
                        style={{
                          fontSize: "20px",
                          color: "white",
                          fontFamily: "fantasy",
                        }}
                      >
                        Q&A
                      </p>
                    </a>
                    <a href="/" title="Alguma coisa">
                      <Icon.CardChecklist style={{ color: "#836eaa" }} />
                      <p
                        style={{
                          fontSize: "20px",
                          color: "white",
                          fontFamily: "monospace",
                        }}
                      >
                        Quiz
                      </p>
                    </a>
                    <a href="/" title="Alguma coisa">
                      <Icon.Flag style={{ color: "#836eaa" }} />
                      <p
                        style={{
                          fontSize: "20px",
                          color: "white",
                          fontFamily: "sans-serif",
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
                    <Icon.Sliders style={{ color: "#836eaa" }} />
                    <p
                      style={{
                        fontSize: "20px",
                        color: "white",
                        fontFamily: "revert-layer",
                      }}
                    >
                      Setting
                    </p>
                  </a>
                  <a href="/">
                    <Icon.PersonCircle style={{ color: "#836eaa" }} />
                    <p
                      style={{
                        fontSize: "20px",
                        color: "white",
                        fontFamily: "serif",
                      }}
                    >
                      Profile
                    </p>
                  </a>
                </ul>
              </div>
              <span>{/* <img src={userImg} alt="Eu" /> */}</span>
            </section>
            <aside onClick={handleChangeSideBar} />
          </OpenSideBar>
        )}
      </Content>
    </Container>
  );
}
