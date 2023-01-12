import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import * as Icon from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import { createQuiz } from "../../api/apiClient";

import { Course } from "../../types";

interface AddAssessmentButtonProps {
  courses: Course[];
}

function AddAssessmentButton(props: AddAssessmentButtonProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState(0);

  const onTitleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onCourseChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCourseId(parseInt(event.target.value));
  };

  async function handleCreateAssessment(event: React.FormEvent) {
    const data = {
      title: title,
      course: courseId,
    };
    const result = await createQuiz(data);
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
              <Form.Label>Assessment Name</Form.Label>
              <Form.Control
                type="Classroom"
                placeholder="e.g Object Oriented Programing Quiz"
                autoFocus
                onChange={onTitleChangeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select menu</Form.Label>
              <Form.Select onChange={onCourseChangeHandler}>
                {props.courses.map((course) => {
                  return <option value={course.id}>{course.title}</option>;
                })}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>

          <Button
            style={{ backgroundColor: "#4e2a84" }}
            onClick={handleCreateAssessment}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddAssessmentButton;
