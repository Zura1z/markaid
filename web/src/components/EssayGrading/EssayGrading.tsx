import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Icon from "react-bootstrap-icons";
import GridLayout from "react-grid-layout";
import { StudentScroller } from "../ScrollableCard/StudentScroller";
import { useState } from "react";

import { makeGradingRequest } from "../../api/apiClient";

function grade(score: number): string {
  if (score >= 9) {
    return "A";
  } else if (score >= 8) {
    return "B";
  } else if (score >= 7) {
    return "C";
  } else if (score >= 6) {
    return "D";
  } else if (score >= 0) {
    return "F";
  } else {
    return "-";
  }
}

const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 0, static: true },
  { i: "b", x: 6, y: 0, w: 2, h: 0, static: true },
  { i: "c", x: 8, y: -1, w: 1, h: 0, static: true },
];
function EssayGrading() {
  const [answer, setAnswer] = useState("");
  const [ms, setMs] = useState("");
  const [score, setScore] = useState("");

  const letterGrade = "-";

  const getScore = (answer: string, ms: string) => {
    const data = {
      answer: answer,
      marking_scheme: ms,
    };
    const getAnswer = async () => {
      try {
        const res = await makeGradingRequest(data);
        setScore(res["score"]);
      } catch (e) {
        console.log(e);
      }
    };
    getAnswer();
    console.log(answer);
    // window.location.reload();

    return answer;
  };

  const onSubmit = () => {
    getScore(answer, ms);
  };

  const onMsChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMs(event.target.value);
  };

  const onAnswerChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAnswer(event.target.value);
  };

  return (
    <>
      <div>
        <h1 style={{ padding: "50px", color: "#4e2a84" }}>Essay Grading</h1>
      </div>

      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={180}
        width={1800}
        margin={[200, 5]}
      >
        <div key="a">
          <Form
            style={{
              width: "800px",
              borderRadius: "13px",
            }}
          >
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              style={{ color: "#4e2a84" }}
            >
              <Form.Label className="fw-bold">Marking Scheme</Form.Label>
              <Form.Control
                type="essay"
                style={{ height: "150px" }}
                onChange={onMsChangeHandler}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              style={{ color: "#4e2a84" }}
            >
              <Form.Label className="fw-bold">Input Essay Answer</Form.Label>
              <Form.Control
                type="essay-ans"
                style={{ height: "150px" }}
                onChange={onAnswerChangeHandler}
              />
            </Form.Group>
            <Button
              variant="outline-light"
              className="fw-bold"
              style={{
                color: "white",
                backgroundColor: "#4e2a84",
                width: "300px",
              }}
              onClick={() => onSubmit()}
            >
              Submit
            </Button>{" "}
            <br />
            <br />
          </Form>
        </div>
        <div key="b" style={{ padding: "20px" }}>
          {/* <StudentScroller /> */}
        </div>

        <div key="c" style={{ padding: "20px" }}>
          <h2
            style={{
              fontWeight: "bold",
              marginTop: "200px",
              color: "#4e2a84",
              fontSize: "80px",
            }}
          >
            Grade
          </h2>
          <h3
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "60px",
            }}
          >
            {grade(parseInt(score))}
          </h3>
        </div>
      </GridLayout>
    </>
  );
}

export default EssayGrading;
