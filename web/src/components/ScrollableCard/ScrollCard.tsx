import Card from "react-bootstrap/Card";
import "./Scroller.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { CourseCardProps } from "../../types/index";
const items = [...Array(100)].map((val, i) => `Item ${i}`);

export function BasicExample() {
  return (
    <Card style={{ width: "30rem", backgroundColor: "#836eaa" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title style={{ color: "white" }}>Card Title</Card.Title>
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
    </Card>
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

// export  CourseInfo;

// export default ScrollableCard;
