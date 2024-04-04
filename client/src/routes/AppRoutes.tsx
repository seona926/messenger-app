// AppRoutes.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";
import MainPage from "../components/MainPage";
import SendMessageModal from "../components/SendMessageModal";
import FindMatchesPage from "../components/FindMatchesPage";
import QuestionPage from "../components/QuestionPage";
import ResultsPage from "../components/ResultsPage";
// Import other pages similarly

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/send-message/:userId" element={<SendMessageModal />} />
      <Route path="/find-matches" element={<FindMatchesPage />} />
      <Route path="/questions" element={<QuestionPage />} />
      <Route path="/questions/:numQuestions" element={<QuestionPage />} />
      <Route path="/results" element={<ResultsPage />} />
      {/* Define routes for other components here */}
      {/* Redirect to login or another default route as a fallback */}
      <Route path="/" element={<Navigate to="/main" />} />
    </Routes>
  );
};

export default AppRoutes;
