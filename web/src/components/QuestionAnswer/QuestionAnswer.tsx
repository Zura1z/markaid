import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";
import axios from "axios";

import React, { useState, useEffect } from "react";

function QuestionAnswer() {
  const [answer, setAnswer] = useState(null);

  const [contextState, setContextState] = useState("");
  const [questionState, setQuestionState] = useState("");

  const getAnswer = (context: string, question: string) => {
    const data = {
      context: context,
      question: question,
    };
    const getAnswer = async () => {
      try {
        const res = await axios.post("http://127.0.0.1:8000/api/model/", data);
        setAnswer(res.data["answer"]);
      } catch (e) {
        console.log(e);
      }
    };
    getAnswer();
    console.log(answer);

    return answer;
  };

  const onSubmit = () => {
    getAnswer(contextState, questionState);
  };

  const onContextChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContextState(event.target.value);
  };

  const onQuestionChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuestionState(event.target.value);
  };

  return (
    <>
      <div style={{ marginLeft: "50px", marginTop: "50px", color: "#4e2a84" }}>
        <Button variant="outline-secondary" style={{ color: "#4e2a84" }}>
          <Icon.ArrowLeft size={"20"} />
          Back
        </Button>
      </div>
      <div style={{ padding: "40px" }}>
        <h1 style={{ color: "#4e2a84" }}>Intelligent Q&A Agent</h1>
      </div>
      <div style={{ padding: "40px" }}>
        <Form
          style={{
            padding: "40px",
            backgroundColor: "#b6acd1",
            borderRadius: "13px",
          }}
        >
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            style={{ color: "#4e2a84" }}
          >
            <Form.Label>Context</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Context"
              rows={3}
              id="context"
              value={contextState}
              onChange={onContextChangeHandler}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            style={{ color: "#4e2a84" }}
          >
            <Form.Label>Question</Form.Label>
            <Form.Control
              type="question"
              placeholder="Question"
              id="question"
              value={questionState}
              onChange={onQuestionChangeHandler}
            />
          </Form.Group>
          <Button
            variant="outline-secondary"
            style={{
              marginLeft: "700px",
              backgroundColor: "#4e2a84",
              color: "white",
            }}
            onClick={() => onSubmit()}
          >
            Get Answer
          </Button>{" "}
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            style={{ color: "#4e2a84" }}
          >
            <Form.Label>Answer</Form.Label>
            <Form.Control type="answer" placeholder={answer}></Form.Control>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default QuestionAnswer;
