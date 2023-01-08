import { Routes, Route } from "react-router-dom";

import AddCoursePage from "./pages/AddCoursePage";
import CreateExamPage from "./pages/CreateExamPage";
import EssayGradingPage from "./pages/EssayGradingPage";
import QuestionAnswerPage from "./pages/QuestionAnswerPage";
import StudentTablePage from "./pages/StudentTablePage";
import CreateQuizPage from "./pages/CreateQuiz";
import TeacherCourses from "./pages/TeacherCourses";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<EssayGradingPage />} />
      <Route path="/addcourse" element={<AddCoursePage />} />
      <Route path="/exam/create" element={<CreateExamPage />} />
      <Route path="/grade/essay" element={<EssayGradingPage />} />
      <Route path="/agent/qa" element={<QuestionAnswerPage />} />
      <Route path="/student/info" element={<StudentTablePage />} />
      <Route path="/agent/generate" element={<CreateQuizPage />} />
      <Route path="/teacher/courses" element={<TeacherCourses id={1} />} />
    </Routes>
  );
};
export default Main;
