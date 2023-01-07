import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as Icon from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
function StudentExam() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div style={{marginLeft:"20%"}}>
      <Button onClick={handleShow} style={{borderColor:"white",backgroundColor:"white",color:"red"}}>
      <Icon.BoxArrowInUpRight size={'20'}/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Student Exam</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Question</Form.Label>
              <Form.Control
                type="Question"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Teacher Answer</Form.Label>
              <Form.Control
                type="Teacher-Answer"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="Student-Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Student Answer</Form.Label>
              <Form.Control
                type="Student-Answer"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Total Marks</Form.Label>
              <Form.Control
                type="Total-Marks"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Auto Graded Marks</Form.Label>
              <Form.Control
                type="Auto-Marks"
                autoFocus
              />
            </Form.Group>
            
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:"#4e2a84"}} onClick={handleClose}>
           Modify Marks
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}
export default StudentExam;