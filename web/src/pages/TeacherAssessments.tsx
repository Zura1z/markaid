import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import { IdProp, Course } from "../types";

import { ScrollCard } from "../components/ScrollableCard/ScrollCard";

import { getCoursesByTeacher } from "../api/apiClient";

function TeacherAssessments(props: IdProp) {
  const [resdata, setResdata] = useState<Course[]>([]);

  return (
    <>
      {resdata.map((course, index) => {
        // custom typecast
        const { id, title, description, teacher, students } = course;

        return (
          <div key={id} style={{ padding: "20px" }}>
            <ScrollCard
              id={id}
              title={title}
              description={description}
              teacher={teacher}
              students={students.map((student, index) => student)}
            />
          </div>
        );
      })}
      {/* <ScrollCard /> */}
    </>
  );
}

export default TeacherAssessments;
