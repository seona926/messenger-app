const express = require("express");
const router = express.Router();
const Question = require("../models/question"); // Question 모델 가져오기

router.post("/addQuestion", async (req, res) => {
  try {
    const { question, option1, option2, option3, option4, option5, order } =
      req.body;

    const newQuestion = new Question({
      question,
      option1,
      option2,
      option3,
      option4,
      option5,
      order,
    });

    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/getQuestions/:numQuestions", async (req, res) => {
  const numQuestions = parseInt(req.params.numQuestions, 10);
  try {
    // order 필드가 1부터 numQuestions 값까지인 질문을 조회
    const questions = await Question.find({
      order: { $lte: numQuestions },
    })
      .sort({ order: 1 })
      .limit(numQuestions);

    res.json(questions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
