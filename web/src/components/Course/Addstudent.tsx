import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as Icon from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
function Addstudent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} style={{backgroundColor:"#880e4f",borderColor:"white" }}>
      <Icon.PersonAdd size={"20"} style={{ color:"white", backgroundColor: "#880e4f", borderRadius:"10px" ,borderColor:"white"}}></Icon.PersonAdd>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Class ID</Form.Label>
              <Form.Control
                type="ClassID"
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Student Email</Form.Label>
              <Form.Control
                type="studentemail"
                placeholder="Email"
                autoFocus
              />
            </Form.Group>
            
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button style={{backgroundColor:"#4e2a84"}} onClick={handleClose}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Addstudent;