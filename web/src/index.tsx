import * as React from "react";
import * as ReactDOM from "react-dom";
// import Main from "./main";
import { BrowserRouter } from "react-router-dom";
import OpenClassroom from "./components/Course/StudentClassroom/OpenClasrrom";
import StudentClassroom from "./components/Course/StudentClassroom/StudentClassroom";
import ExamDetails from "./components/CreateExam/ExamsDetails";
import Footer from "./components/Footer/Footer";

import { SideBar } from "./components/Sidebar/Sidebar";

ReactDOM.render(
  <>
    {/* <React.StrictMode>
      <BrowserRouter>
        
        <SideBar />
      </BrowserRouter>
    </React.StrictMode> */}
    <SideBar/>
    <OpenClassroom/>
    <Footer/>

    ,
  </>,
  document.getElementById("root")
);
