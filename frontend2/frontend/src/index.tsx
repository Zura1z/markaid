import * as React from "react";
import * as ReactDOM from "react-dom";

import Header from "./components/Header/Header";

import QuestionAnswerPage from "./pages/QuestionAnswerPage";
// import StudentTablePage from "./pages/StudentTablePage";
// import FirstComponent from "./components/FirstComponent";
// import UserComponent from "./components/UserComponent";
// import AddCoursePage from "./pages/AddCoursePage";
// import EssayGradingPage from "./pages/EssayGradingPage";
// import CreateExam from "./components/CreateExam/CreateExam";
ReactDOM.render(
  <>
    <Header />
    <QuestionAnswerPage />,
  </>,
  document.getElementById("root")
);
