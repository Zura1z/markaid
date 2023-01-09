import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import * as Icon from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import { createCourse } from "../../api/apiClient";

function addAssessmentButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [teacher, setTeacher] = useState(null);

  const onTeacherChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTeacher(event.target.value);
  };

  const onTitleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onDescriptionChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  async function handleCreateCourse(event: React.FormEvent) {
    event.preventDefault();
    const data = {
      id: id,
      title: title,
      description: description,
      teacher: teacher,
      students: [11],
    };
    const result = await createCourse(data);
    setShow(false);
    window.location.reload();
    // handle success/failure of course creation
  }

  return (
    <>
      <Button
        onClick={handleShow}
        style={{
          backgroundColor: "#880e4f",
          width: "15rem",
          borderColor: "white",
        }}
      >
        <Icon.PlusLg size={"20"}></Icon.PlusLg>
        Add Assessment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Classroom</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Classroom Name</Form.Label>
              <Form.Control
                type="Classroom"
                placeholder="e.g Object Oriented Programing"
                autoFocus
                onChange={onTitleChangeHandler}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={onDescriptionChangeHandler}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            style={{ backgroundColor: "#4e2a84" }}
            onClick={handleCreateCourse}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default addAssessmentButton;
