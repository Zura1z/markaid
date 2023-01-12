import Card from "react-bootstrap/Card";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

export default function ShortQuestion() {
  return (
    <>
      <Card style={{ width: "22rem", padding: "20px" }}>
        <Card.Text>Quesstion?</Card.Text>
        <Form.Control
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
          Your Answer must be 8-20 characters long, contain letters and numbers
        </Form.Text>
        <hr />
        <p style={{ fontWeight: "bold", color: "green" }}>
          Correct Answer: Subjective
        </p>
      </Card>
    </>
  );
}
