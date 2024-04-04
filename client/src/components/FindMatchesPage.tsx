// FindMatchesPage.jsx
import React from "react";
import Layout from "../layouts/Layout";
import { useNavigate } from "react-router-dom";
import styles from "../styles/findMatches.module.css";

const FindMatchesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectQuestions = (numQuestions: number) => {
    navigate(`/questions/${numQuestions}`); // Pass the number of questions as a URL parameter
  };

  return (
    <Layout>
      <div className={styles.findMatchesContainer}>
        <div className={styles.title}>질문 갯수를 골라주세요!</div>
        <div className={styles.options}>
          <button onClick={() => handleSelectQuestions(10)}>
            10개 - 간단하게!
          </button>
          <button onClick={() => handleSelectQuestions(15)}>
            15개 - 보다 정밀하게!
          </button>
          <button onClick={() => handleSelectQuestions(20)}>
            20개 - 나와 꼭맞는 단짝 찾기!
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default FindMatchesPage;
