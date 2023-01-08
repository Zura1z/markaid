import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";

import React, { useState } from "react";

import { makeQARequest } from "../../api/apiClient";

import { StudentSidebar } from "../Sidebar/StudentSidebar";
function QuestionAnswer() {
  const [answer, setAnswer] = useState(null);

  const sampleContext =
    "Barack Obama, in full Barack Hussein Obama II, (born August 4, 1961, Honolulu, Hawaii, U.S.), 44th president of the United States (2009–17) and the first African American to hold the office. Before winning the presidency, Obama represented Illinois in the U.S. Senate (2005–08). He was the third African American to be elected to that body since the end of Reconstruction (1877). In 2009 he was awarded the Nobel Peace Prize “for his extraordinary efforts to strengthen international diplomacy and cooperation between peoples. When Obama was age two, Barack Sr. left to study at Harvard University; shortly thereafter, in 1964, Ann and Barack Sr. divorced. (Obama saw his father only one more time, during a brief visit when Obama was 10.) Later Ann remarried, this time to another foreign student, Lolo Soetoro from Indonesia, with whom she had a second child, Maya. Obama lived for several years in Jakarta with his half sister, mother, and stepfather. While there, Obama attended both a government-run school where he received some instruction in Islam and a Catholic private school where he took part in Christian schooling. He returned to Hawaii in 1971 and lived in a modest apartment, sometimes with his grandparents and sometimes with his mother (she remained for a time in Indonesia, returned to Hawaii, and then went abroad again—partly to pursue work on a Ph.D.—before divorcing Soetoro in 1980). For a brief period his mother was aided by government food stamps, but the family mostly lived a middle-class existence. In 1979 Obama graduated from Punahou School, an elite college preparatory academy in Honolulu.";
  const [contextState, setContextState] = useState(sampleContext);
  const sampleQuestion = "Where did Obama study?";
  const [questionState, setQuestionState] = useState(sampleQuestion);

  const getAnswer = (context: string, question: string) => {
    const data = {
      context: context,
      question: question,
    };
    const getAnswer = async () => {
      try {
        const res = await makeQARequest(data);
        setAnswer(res["answer"]);
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
      <StudentSidebar />
      <div style={{ padding: "40px", marginLeft: "18%" }}>
        <h1 style={{ color: "#4e2a84" }}>Intelligent Q&A Agent</h1>
      </div>
      <div style={{ padding: "20px", marginLeft: "17%" }}>
        <Form
          style={{
            padding: "40px",
            backgroundColor: "#e4e0ee",
            borderRadius: "13px",
          }}
        >
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            style={{ color: "white" }}
          >
            <Form.Label style={{ color: "#4e2a84" }}>Context</Form.Label>
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
            <Form.Label style={{ color: "#4e2a84" }}>Question</Form.Label>
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
            <Form.Label style={{ color: "#4e2a84" }}>Answer</Form.Label>
            <Form.Control type="answer" placeholder={answer}></Form.Control>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default QuestionAnswer;
