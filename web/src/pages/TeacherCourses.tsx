import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import GridLayout from "react-grid-layout";
import Container from "react-bootstrap/Container";

import AddClassroomButton from "../components/Course/AddClassroomForm";

import TeacherCourseCard from "../components/Course/TeacherCourseCard";

import { IdProp } from "../types";

import { getCoursesByTeacher } from "../api/apiClient";

import { StudentSidebar } from "../components/Sidebar/StudentSidebar";

interface Course {
  id: number;
  title: string;
  description: string;
  teacher: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    is_teacher: boolean;
  };
  students: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    is_teacher: boolean;
  }[];
}

function TeacherCourses(props: IdProp) {
  const [resdata, setResdata] = useState<Course[]>([]);

  const getCourses = (id: number) => {
    console.log("id", id);
    // define a vairable to store the json

    const getAnswer = async (id: number) => {
      try {
        const res = await getCoursesByTeacher(1);
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
      await getCourses(1);
    }
    fetchData();
  }, []);

  return (
    <>
      <Row>
        <Col xs={2}>
          <StudentSidebar />
        </Col>
        <Col xs={10}>
          <div style={{ marginLeft: "35%", marginTop: "50px" }}>
            <h1>My Courses</h1>
          </div>
          <div
            style={{
              marginLeft: "80%",
              backgroundColor: "#4e2a84",
              width: "15rem",
              borderColor: "white",
            }}
          >
            <AddClassroomButton />
          </div>

          <Row>
            {resdata.map((course, index) => {
              // custom typecast
              const { id, title, description, teacher, students } = course;

              return (
                <Col
                  xs={12}
                  md={12}
                  lg={6}
                  xl={4}
                  className="mb-2"
                  key={`course-key${index}`}
                >
                  <TeacherCourseCard
                    id={id}
                    title={title}
                    description={description}
                    teacher={teacher.id}
                    students={students.map((student) => student.id)}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default TeacherCourses;
