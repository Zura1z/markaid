import * as React from "react";
import * as ReactDOM from "react-dom";
// import Main from "./main";
import { BrowserRouter } from "react-router-dom";

import { SideBar } from "./components/Sidebar/Sidebar";

import Main from "./main";
ReactDOM.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <SideBar />
        <Main />
      </BrowserRouter>
    </React.StrictMode>
    {/* <SideBar /> */}
    {/* <AssesmentsUI/> */}
    {/* <AssesmentsUI/> */}
    {/* <Assesment/> */}
    {/* <Footer /> */}
    {/* <TeacherClassroom id={1} />, */}
    {/* <QuestionAnswer /> */}
  </>,
  document.getElementById("root")
);
