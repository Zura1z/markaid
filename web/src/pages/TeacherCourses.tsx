import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import GridLayout from "react-grid-layout";

import AddClassroomButton from "../components/Course/AddClassroomForm";

import TeacherCourseCard from "../components/Course/TeacherCourseCard";

import { IdProp } from "../types";

import { getCoursesByTeacher } from "../api/apiClient";

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

  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 2, static: true },
    { i: "b", x: 2, y: 0, w: 2, h: 2, static: true },
    { i: "c", x: 4, y: 0, w: 2, h: 2, static: true },
    { i: "D", x: 6, y: 0, w: 2, h: 2, static: true },
    { i: "e", x: 0, y: 2, w: 2, h: 2, static: true },
  ];
  return (
    <>
      <div style={{ marginLeft: "18%", marginTop: "50px" }}>
        <h1>My Classrooms</h1>
      </div>
      {/* <Button  style={{marginLeft:"80%",backgroundColor:"#4e2a84",width:"15rem"}}>
        <Icon.PlusLg size={"20"}></Icon.PlusLg>
        Add Classroom</Button>{' '} */}
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
      <GridLayout
        className="layout"
        layout={layout}
        cols={8}
        rowHeight={90}
        width={2000}
        margin={[350, 70]}
      >
        {/* <div key="a" style={{ padding: "20px" }}>
          <TeacherCourseCard
            title="something"
            description="something"
            teacher={1}
            students={[1, 2]}
          />
        </div> */}
        {resdata.map((course, index) => {
          // custom typecast
          const { id, title, description, teacher, students } = course;

          return (
            <div key={id} style={{ padding: "20px" }}>
              <TeacherCourseCard
                id={id}
                title={title}
                description={description}
                teacher={teacher.id}
                students={students.map((student) => student.id)}
              />
            </div>
          );
        })}
        {/* {resdata.map((course, index) => {
          // custom typecast
          const teacher = {
            id: course.teacher.id,
            firstName: course.teacher.first_name,
            lastName: course.teacher.last_name,
            email: course.teacher.email,
            isTeacher: course.teacher.is_teacher,
          };

          const students = course.students.map((student: any) => ({
            id: student.id,
            firstName: student.first_name,
            lastName: student.last_name,
            email: student.email,
            isTeacher: student.is_teacher,
          }));

          return (
            <div key="a" style={{ padding: "20px" }}>
              <TeacherCourseCard
                title={course.title}
                description={course.description}
                teacher={teacher.id}
                students={students.map((student) => student.id)}
              />
            </div>
          );
        })} */}
      </GridLayout>
    </>
  );
}

export default TeacherCourses;
