import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import GridLayout from "react-grid-layout";
import "./Scroller.css";
import Button from "react-bootstrap/Button";
import { CourseCardProps } from "../../types/index";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";

import { Course } from "../../types/index";

import { getQuizzesByCourse } from "../../api/apiClient";

const SCard = styled(Card)`
  background: white !important;

  margin-left: 10% !important;

  border-color: black;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

interface Quiz {
  id: number;
  title: string;
  course: number;
}

export function ScrollCard(props: Course) {
  const [resdata, setResdata] = useState<Quiz[]>([]);

  const getQuizzes = (id: number) => {
    // define a vairable to store the json

    const getAnswer = async (id: number) => {
      try {
        const res = await getQuizzesByCourse(id);
        setResdata(res);
        console.log(data);

        return res;
      } catch (e) {
        console.log(e);
      }
    };
    const data = getAnswer(id);

    return data;
  };

  useEffect(() => {
    async function fetchData() {
      await getQuizzes(props.id);
    }
    fetchData();
  }, []);
  return (
    <>
      <SCard
        style={{
          width: "35rem",
          backgroundColor: "#836eaa",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{
              color: "white",
              background: "#401f68",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            {props.title}
          </Card.Title>
          <div className="container1">
            <Card.Text
              className="center-col"
              style={{
                backgroundColor: "white",
                // borderRadius: "13px",
                padding: "20px",
                borderColor: "white",
              }}
            >
              <Row>
                {resdata.map((quiz) => {
                  const { id, title, course } = quiz;
                  return (
                    <CourseInfo
                      id={id}
                      title={title}
                      studentCount={props.students.length}
                      assignmentCount={10}
                      quizCount={5}
                      footer=""
                    />
                  );
                })}
              </Row>
            </Card.Text>
          </div>
        </Card.Body>
      </SCard>
    </>
  );
}

export function CourseInfo(props: CourseCardProps) {
  return (
    <>
      <div className="card" style={{ borderColor: "white", marginLeft: "20%" }}>
        <Button
          style={{
            backgroundColor: "white",
            borderColor: "white",
          }}
        >
          <div
            className="card-header"
            style={{
              color: "#836eaa",
              backgroundColor: "white",
              textAlign: "center",
              borderColor: "white",
            }}
          >
            {props.title}
          </div>
        </Button>
        <div className="card-body">
          <div className="student-count">{props.studentCount} students</div>
        </div>
      </div>
    </>
  );
}
