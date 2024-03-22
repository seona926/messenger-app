// QuestionPage.tsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout"; // Make sure the path is correct based on your project structure

interface Question {
  id: number;
  text: string;
  options: string[];
}

const QuestionPage: React.FC = () => {
  const { numQuestions } = useParams<{ numQuestions: string }>();
  const totalQuestions = parseInt(numQuestions || "0", 10); // Correctly parse numQuestions
  const navigate = useNavigate();
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  // Simulate fetching the questions. In a real application, you would fetch this data.
  const questions: Question[] = Array.from(
    { length: totalQuestions },
    (_, index) => ({
      id: index,
      text: `Question ${index + 1}`,
      options: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    })
  );

  const handleAnswerSelect = (questionId: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = () => {
    // Check if there are more questions to answer; otherwise, navigate to results
    const nextSetIndex = currentSetIndex + 3;
    if (nextSetIndex < totalQuestions) {
      setCurrentSetIndex(nextSetIndex);
    } else {
      navigate("/results"); // Adjust the navigation path as needed
    }
  };

  useEffect(() => {
    // Ensure there are questions to display; otherwise, redirect or show a message
    if (totalQuestions <= 0) {
      navigate("/find-matches"); // Navigate to an appropriate page if no questions
    }
  }, [totalQuestions, navigate]);

  return (
    <Layout>
      <div className="question-page-content">
        {questions
          .slice(currentSetIndex, currentSetIndex + 3)
          .map((question) => (
            <div key={question.id}>
              <p>{question.text}</p>
              {question.options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={() => handleAnswerSelect(question.id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
        <button onClick={handleSubmit}>Next</button>
      </div>
    </Layout>
  );
};

export default QuestionPage;
