import Card from "react-bootstrap/Card";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

type Props = {
  question: string;
  trueOption: number;
};
export default function BooleanQuestion(props: Props) {
  return (
    <>
      <Card style={{ width: "22rem", padding: "20px" }}>
        <Card.Text>{props.question}</Card.Text>

        {props.trueOption === 1 ? (
          <>
            <div
              style={{ padding: "10px", color: "green", fontWeight: "bold" }}
            >
              <input type="radio" value="" defaultChecked /> True
            </div>
            <div style={{ padding: "10px" }}>
              <input type="radio" value="Male" /> False
            </div>
          </>
        ) : (
          <>
            <div style={{ padding: "10px" }}>
              <input type="radio" value="" defaultChecked /> True
            </div>
            <div
              style={{ padding: "10px", color: "green", fontWeight: "bold" }}
            >
              <input type="radio" value="Male" defaultChecked /> False
            </div>
          </>
        )}

        <hr />
      </Card>
    </>
  );
}
