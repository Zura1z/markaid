
import Card from "react-bootstrap/Card";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function QuizBool() {
  return (
    <>
      <Card style={{ width: "22rem",padding:"20px"}}>
        <Card.Text>Arif Alvi is President of Pakistan</Card.Text>
       <div style={{padding:"10px"}}>
        <input type="radio" value="Male" name="gender" />{' '} True
        </div>
        <div style={{padding:"10px"}}>
        <input type="radio" value="Male" name="gender" />{' '}False
        </div>
        <hr/>
        <p style={{fontWeight:"bold",color:"green"}}>Correct Answer: True</p>
      </Card>
    </>
  );
}