import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as Icon from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
function AddClassroomButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} style={{backgroundColor:"#880e4f",width:"15rem",borderColor:"white" }}>
      <Icon.PlusLg size={"20"}></Icon.PlusLg>
        Add Classroom
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Classroom</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Teacher ID</Form.Label>
              <Form.Control
                type="TeacherID"
                placeholder="00"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Classroom Name</Form.Label>
              <Form.Control
                type="Classroom"
                placeholder="e.g Object Oriented Programing"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
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
export default AddClassroomButton;