import { Routes, Route } from "react-router-dom";
import EssayGradingPage from "./pages/EssayGradingPage";
import QuestionAnswerPage from "./pages/QuestionAnswerPage";
// import Settings from "./components/Settings";
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<EssayGradingPage />} />
      <Route path="/qa" element={<QuestionAnswerPage />} />
      {/* <Route path="/settings" element={<Settings />} /> */}
    </Routes>
  );
};
export default Main;
