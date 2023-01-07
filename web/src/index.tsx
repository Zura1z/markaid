import * as React from "react";
import * as ReactDOM from "react-dom";
// import Main from "./main";
import { BrowserRouter } from "react-router-dom";

import { SideBar } from "./components/Sidebar/Sidebar";


import ExamDetails from "./components/CreateExam/ExamsDetails";
import Footer from "./components/Footer/Footer";
import StudentExam from "./components/CreateExam/StudentExam";

ReactDOM.render(
  <>
    {/* <React.StrictMode>
      <BrowserRouter>
        
        <SideBar />
        <BasicExample />
      </BrowserRouter>
    </React.StrictMode> */}
    <SideBar/>
    <ExamDetails/>
    <Footer/>
    ,
  </>,
  document.getElementById("root")
);
