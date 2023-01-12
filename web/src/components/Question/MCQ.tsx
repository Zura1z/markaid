import Card from "react-bootstrap/Card";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

export default function MCQQuestion() {
  return (
    <>
      <Card style={{ width: "22rem", padding: "20px" }}>
        <Card.Text>Who is the Prime Manister of Pakistan</Card.Text>
        <div>
          <input type="radio" value="Male" name="gender" /> Imran Khan
        </div>
        <div>
          <input type="radio" value="Male" name="gender" /> Shabaz Shareef
        </div>
        <div>
          <input type="radio" value="Male" name="gender" /> Asif Zardari
        </div>
        <div>
          <input type="radio" value="Male" name="gender" /> Non of the above
        </div>
        <hr />
        <p style={{ fontWeight: "bold" }}>Correct Answer: Shabaz Shareef</p>
      </Card>
    </>
  );
}
