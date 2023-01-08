import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import * as Icon from "react-bootstrap-icons";
import Addstudent from "./Addstudent";

import { Course } from "../../types";

import { deleteCourse } from "../../api/apiClient";

function TeacherCourseCard(props: Course) {
  const onClickHandler = () => {
    deleteCourse(props.id);
    window.location.reload();
  };
  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Addstudent />
          {"   "}
          <Button
            onClick={onClickHandler}
            style={{ backgroundColor: "#b71c1c", borderColor: "white" }}
          >
            <Icon.XLg size={"20"} />
          </Button>
          {"   "}
          <Button style={{ backgroundColor: "#836eaa", borderColor: "white" }}>
            Open Course
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default TeacherCourseCard;
