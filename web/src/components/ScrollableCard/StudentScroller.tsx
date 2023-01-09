import Card from "react-bootstrap/Card";
import styled from "styled-components";
import "./Scroller.css";
import Button from "react-bootstrap/Button";
import { CourseCardProps } from "../../types/index";

const SCard = styled(Card)`
  background: white !important;
  border-radius: 0px !important;
  margin-left: 20% !important;
  border-color: #222;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export function StudentScroller() {
  // const [hovering, setHovering] = useState(false);
  return (
    <>
      <SCard
        style={{
          width: "28rem",
          backgroundColor: "#b6acd1",
          borderColor: "white",
        }}
      >
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title
            style={{
              color: "#4e2a84",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Students
          </Card.Title>
          <div className="container2">
            <Card.Text
              className="center-col"
              style={{
                backgroundColor: "white",
                // borderRadius: "13px",
                padding: "20px",
                borderColor: "#e4e0ee",
              }}
            >
              <CourseInfo
                id={1}
                title="Student 1"
                studentCount={200}
                assignmentCount={10}
                quizCount={5}
                footer=""
              />
            </Card.Text>
          </div>
        </Card.Body>
      </SCard>
    </>
  );
}

export function CourseInfo(props: CourseCardProps) {
  return (
    <div
      className="card"
      style={{ borderColor: "white", backgroundColor: "white" }}
    >
      <Button
        variant="outline-light"
        style={{ backgroundColor: "white", borderColor: "white" }}
      >
        <div
          className="card-header"
          style={{ color: "#836eaa", backgroundColor: "white" }}
        >
          {props.title}
        </div>
      </Button>
      <div className="card-body"></div>
    </div>
  );
}
