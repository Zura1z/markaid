import * as React from "react";
import * as ReactDOM from "react-dom";
// import Main from "./main";
import { BrowserRouter } from "react-router-dom";

import { SideBar } from "./components/Sidebar/Sidebar";

import { BasicExample } from "./components/ScrollableCard/ScrollCard";

ReactDOM.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        {/* <Main /> */}
        <SideBar />
        <BasicExample />
      </BrowserRouter>
    </React.StrictMode>
    ,
  </>,
  document.getElementById("root")
);
