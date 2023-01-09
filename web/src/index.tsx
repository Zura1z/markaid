import * as React from "react";
import * as ReactDOM from "react-dom";
// import Main from "./main";
import { BrowserRouter } from "react-router-dom";
import QuizQuestion from "./components/Quiz/QuizQuestion";

import Main from "./main";
ReactDOM.render(
  <>
    {/* <React.StrictMode>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </React.StrictMode> */}
    <QuizQuestion/>
  </>,
  document.getElementById("root")
);
