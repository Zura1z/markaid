import { Routes, Route } from "react-router-dom";

import CreateExamPage from "./pages/CreateExamPage";
import EssayGradingPage from "./pages/EssayGradingPage";
import QuestionAnswerPage from "./pages/QuestionAnswerPage";
import StudentTablePage from "./pages/StudentTablePage";
import CreateQuizPage from "./pages/CreateQuiz";
import TeacherCourses from "./pages/TeacherCourses";
import TeacherAssessments from "./pages/TeacherAssessments";

import Sidebar from "./components/Sidebar/nsb";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />} />
      <Route path="/exam/create" element={<CreateExamPage />} />
      <Route path="/grade/essay" element={<EssayGradingPage />} />
      <Route path="/agent/qa" element={<QuestionAnswerPage />} />
      <Route path="/student/info" element={<StudentTablePage />} />
      <Route path="/agent/generate" element={<CreateQuizPage />} />
      <Route path="/teacher/courses" element={<TeacherCourses id={1} />} />
      <Route
        path="/teacher/assignments"
        element={<TeacherAssessments id={1} />}
      />
    </Routes>
  );
};
export default Main;
