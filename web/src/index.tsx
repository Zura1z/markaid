import * as React from "react";
import * as ReactDOM from "react-dom";
// import Main from "./main";
import { BrowserRouter } from "react-router-dom";
import AssesmentsUI from "./components/Assesments/Assesments";

import OpenClassroom from "./components/Course/StudentClassroom/OpenClasrrom";
import StudentClassroom from "./components/Course/StudentClassroom/StudentClassroom";
import TeacherClassroom from "./pages/TeacherClassroom";
import ExamDetails from "./components/CreateExam/ExamsDetails";
import Footer from "./components/Footer/Footer";

// import { SideBar } from "./components/Sidebar/Sidebar";
import QuestionAnswer from "./components/QuestionAnswer/QuestionAnswer";
import { ScrollCard } from "./components/ScrollableCard/ScrollCard";
import { TeacherSideBar } from "./components/Sidebar/TeacherSideBar";
import EssayGrading from "./components/EssayGrading/EssayGrading";
import CreateExam from "./components/CreateExam/CreateExam";
ReactDOM.render(
  <>
    {/* <React.StrictMode>
      <BrowserRouter>
        
        <SideBar />
      </BrowserRouter>
    </React.StrictMode> */}
    {/* <SideBar /> */}
    {/* <AssesmentsUI/> */}
    {/* <AssesmentsUI/> */}
    {/* <Assesment/> */}
    {/* <Footer /> */}
    <TeacherSideBar/>
    <CreateExam/>
    {/* <TeacherClassroom id={1} />,<QuestionAnswer /> */}
  </>,
  document.getElementById("root")
);
