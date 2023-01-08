import React from "react";

import styled from "styled-components";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const SContainer = styled.div`
  background: rgba(247, 247, 250, 1) !important;
  position: sticky;
  top: 60px;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

const SLink = styled.div`
  color: #b6acd1;
  display: block;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background: 1px solid rgba(25, 0, 255, 1) !important;
    color: #401f68;
  }
`;

type Props = {};

const Sidebar: React.FC<Props> = () => {
  function navigateToNewPath(path: string) {
    history.push(path);
    window.location.reload();
  }
  return (
    <>
      <div
        style={{
          borderRadius: "15px",
          marginTop: "15%",
          marginLeft: "3%",
        }}
      >
        <p>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "50px",
              color: "#4e2a84",
            }}
          >
            MarkAID
          </h1>
        </p>
      </div>
      <SContainer className="pt-4 pb-4">
        <div>
          <SLink
            className="px-5 py-2"
            onClick={(event) => navigateToNewPath("/")}
          >
            Home
          </SLink>
          <SLink
            className="px-5 py-2"
            onClick={(event) => navigateToNewPath("/teacher/courses")}
          >
            <div
              style={{
                color: "#401f68",
                textDecorationColor: "#000",
              }}
            >
              Courses
            </div>
          </SLink>
          <SLink
            className="px-5 py-2"
            onClick={(event) => navigateToNewPath("/agent/qa")}
          >
            <div
              style={{
                color: "#401f68",
                textDecorationColor: "#000",
              }}
            >
              QA
            </div>
          </SLink>
          <SLink
            className="px-5 py-2"
            onClick={(event) => navigateToNewPath("/teacher/assignments")}
          >
            <div
              style={{
                color: "#401f68",
                textDecorationColor: "#000",
              }}
            >
              Assignments
            </div>
          </SLink>
        </div>
      </SContainer>
    </>
  );
};

export default Sidebar;
