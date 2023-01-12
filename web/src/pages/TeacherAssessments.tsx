import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import { IdProp, Course } from "../types";

import { ScrollCard } from "../components/ScrollableCard/ScrollCard";

import AddAssessmentButton from "../components/Course/AddAssessmentForm";

import { getCoursesByTeacher } from "../api/apiClient";

import Layout from "../components/Layout";

function TeacherAssessments(props: IdProp) {
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
      <Layout>
        <div style={{ marginLeft: "35%", marginTop: "50px" }}>
          <h1>My Assessments</h1>
        </div>
        <div
          style={{
            marginLeft: "80%",
            backgroundColor: "#4e2a84",
            width: "15rem",
            borderColor: "white",
          }}
        >
          <AddAssessmentButton courses={resdata} />
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
                <ScrollCard
                  id={id}
                  title={title}
                  description={description}
                  teacher={teacher}
                  students={students.map((student, index) => student)}
                />
              </Col>
            );
          })}
        </Row>
      </Layout>
    </>
  );
}

export default TeacherAssessments;
