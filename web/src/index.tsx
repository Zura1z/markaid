import * as React from "react";
import * as ReactDOM from "react-dom";
// import Main from "./main";
import { BrowserRouter } from "react-router-dom";

import { SideBar } from "./components/Sidebar/Sidebar";

ReactDOM.render(
  <>
    {/* <React.StrictMode>
      <BrowserRouter>
        
        <SideBar />
      </BrowserRouter>
    </React.StrictMode> */}
    <SideBar/>
    <ExamDetails/>
    <Footer/>
    ,
  </>,
  document.getElementById("root")
);
