import Card from "react-bootstrap/Card";
import styled from "styled-components";
import GridLayout from "react-grid-layout";
import "./Scroller.css";
import Button from 'react-bootstrap/Button';
import { CourseCardProps } from "../../types/index";
const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
  { i: "b", x: 2, y: 0, w: 2, h: 2, static: true  },
  { i: "c", x: 0, y: 2, w: 1, h: 2, static: true   },
];
const SCard = styled(Card)`
  background: white !important;
  border-radius: 0px !important;
  margin-left: 20% !important;
  border-color: #222;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export function ScrollCard() {
  return (
    <>
    <GridLayout
        className="layout"
        layout={layout}
        cols={4}
        rowHeight={180}
        width={1700}
        margin={[350,70]}
      >
        <div key="a" style={{padding:"20px"}}>
    <SCard style={{ width: "35rem", backgroundColor: "#836eaa" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title style={{ color: "black" ,textAlign:"center",fontWeight:"bold"}}>Pak studies</Card.Title>
        <div className="container1">
          <Card.Text
            className="center-col"
            style={{
              backgroundColor: "white",
              // borderRadius: "13px",
              padding: "20px",
              borderColor:"white"
            }}
          >
            <CourseInfo
              title="Assignments"
              studentCount={200}
              assignmentCount={10}
              quizCount={5}
              footer=""
            />
            <CourseInfo
              title="Quizes"
              studentCount={200}
              assignmentCount={10}
              quizCount={5}
              footer=""
            />
            
            <CourseInfo
              title="Exams"
              studentCount={200}
              assignmentCount={10}
              quizCount={5}
              footer=""
            />
            
          </Card.Text>
        </div>
      </Card.Body>
    </SCard>
    </div>
    <div key="b" style={{ padding: '20px' }}>
    <SCard style={{ width: "35rem", backgroundColor: "#836eaa" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title style={{ color: "black" ,textAlign:"center",fontWeight:"bold"}}>OOP</Card.Title>
        <div className="container1">
          <Card.Text
            className="center-col"
            style={{
              backgroundColor: "white",
              // borderRadius: "13px",
              padding: "20px",
            }}
          >
            <CourseInfo
              title="Assignments"
              studentCount={200}
              assignmentCount={10}
              quizCount={5}
              footer=""
            />
            <CourseInfo
              title="Quizes"
              studentCount={200}
              assignmentCount={10}
              quizCount={5}
              footer=""
            />
            
            <CourseInfo
              title="Exams"
              studentCount={200}
              assignmentCount={10}
              quizCount={5}
              footer=""
            />
            
          </Card.Text>
        </div>
      </Card.Body>
    </SCard>
    </div>
    
    </GridLayout>
    </>
  );
}

export function CourseInfo(props: CourseCardProps) {
  return (
    <div className="card" style={{borderColor:"white"}}>
      <Button variant="outline-light" style={{backgroundColor:"white",borderColor:"white"}}>
      <div className="card-header" style={{ color: "#836eaa" ,backgroundColor:"white"}}>
        {props.title}
      </div>
      </Button>
      <div className="card-body">

      <div className="student-count">{props.studentCount} students</div>
      </div>
    </div>
  );
}
