import Card from "react-bootstrap/Card";
import styled from "styled-components";

import "./Scroller.css";

import { CourseCardProps } from "../../types/index";

const SCard = styled(Card)`
  background: #836eaa !important;
  border-radius: 0px !important;
  margin-left: 350px !important;
  border-color: #222;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export function BasicExample() {
  return (
    <SCard style={{ width: "30rem", backgroundColor: "#836eaa" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title style={{ color: "white" }}>Courses</Card.Title>
        <div className="container">
          <Card.Text
            className="center-col"
            style={{
              backgroundColor: "white",
              // borderRadius: "13px",
              padding: "20px",
            }}
          >
            <CourseInfo
              title="Introduction to React"
              studentCount={200}
              footer=""
            />
            <CourseInfo
              title="Introduction to React"
              studentCount={200}
              footer=""
            />
            <CourseInfo
              title="Introduction to React"
              studentCount={200}
              footer=""
            />
            <CourseInfo
              title="Introduction to React"
              studentCount={200}
              footer=""
            />
            <CourseInfo
              title="Introduction to React"
              studentCount={200}
              footer=""
            />
          </Card.Text>
        </div>
      </Card.Body>
    </SCard>
  );
}

export function CourseInfo(props: CourseCardProps) {
  return (
    <div className="card">
      <div className="card-header" style={{ color: "blue" }}>
        {props.title}
      </div>
      <div className="card-body">
        <div className="student-count">{props.studentCount} students</div>
      </div>
    </div>
  );
}
