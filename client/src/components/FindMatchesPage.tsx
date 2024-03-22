// FindMatchesPage.jsx
import React from "react";
import Layout from "../layouts/Layout";
import { useNavigate } from "react-router-dom";

const FindMatchesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectQuestions = (numQuestions: number) => {
    navigate(`/questions/${numQuestions}`); // Pass the number of questions as a URL parameter
  };

  return (
    <Layout>
      <div className="find-matches-container">
        <h1>Find Matches</h1>
        <div className="options">
          <button onClick={() => handleSelectQuestions(10)}>
            10 Questions
          </button>
          <button onClick={() => handleSelectQuestions(15)}>
            15 Questions
          </button>
          <button onClick={() => handleSelectQuestions(20)}>
            20 Questions
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default FindMatchesPage;
