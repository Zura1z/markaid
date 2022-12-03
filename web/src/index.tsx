import * as React from "react";
import * as ReactDOM from "react-dom";
import Main from "./main";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </React.StrictMode>
    ,
  </>,
  document.getElementById("root")
);
