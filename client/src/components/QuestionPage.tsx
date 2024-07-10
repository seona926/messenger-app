// QuestionPage.tsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";

interface Question {
  id: number;
  text: string;
  options: string[];
}

interface Option {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
}

const QuestionPage: React.FC = () => {
  const { numQuestions } = useParams<{ numQuestions: string }>();
  const totalQuestions = parseInt(numQuestions || "0", 10);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [options, setOptions] = useState<{ [key: string]: string }>({});
  const [questions, setQuestions] = useState<Question[]>([]);
  const navigate = useNavigate();

  const handleAnswerSelect = (questionId: number, option: string) => {
    setOptions((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = () => {
    const nextSetIndex = currentSetIndex + 3;
    if (nextSetIndex < totalQuestions) {
      setCurrentSetIndex(nextSetIndex);
    } else {
      navigate("/results");
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(
        `http://localhost:3001/getQuestions/${numQuestions}`
      );
      const data = await response.json();
      setQuestions(data.question);

      const questionOptions = data.map((question: Option) => ({
        option1: question.option1,
        option2: question.option2,
        option3: question.option3,
        option4: question.option4,
        option5: question.option5,
      }));

      setOptions(questionOptions);
    };

    if (totalQuestions > 0) {
      fetchQuestions();
    } else {
      navigate("/find-matches");
    }
  }, [numQuestions, totalQuestions, navigate]);

  return (
    <Layout>
      <div className="question-page-content">
        {questions
          .slice(currentSetIndex, currentSetIndex + 3)
          .map((question) => (
            <div key={question.id}>
              <p>{question.text}</p>
              {/* {options.map(option => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={options[question.id] === option}
                    onChange={() => handleAnswerSelect(question.id, option)}
                  />
                  {option}
                </label>
              ))} */}
            </div>
          ))}
        <button onClick={handleSubmit}>Next</button>
      </div>
    </Layout>
  );
};

export default QuestionPage;
