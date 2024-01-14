const express = require("express");
const router = express.Router();
const triviaQuestions = require("../config/quizModel.js");

let userScore = 0;
let currentQuestionIndex = 0;

router.get("/quiz", (req, res) => {
  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({ question: triviaQuestions[currentQuestionIndex].question });
  } else {
    res.json({ message: "Quiz is finished. Use /quiz/score to view your score." });
  }
});

router.post("/quiz", (req, res) => {
  const userAnswer = req.body.answer;
  const currentQuestion = triviaQuestions[currentQuestionIndex];

  if (userAnswer && userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
    userScore++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({ question: triviaQuestions[currentQuestionIndex].question });
  } else {
    res.json({ message: "Quiz finished. Use /quiz/score to view your score." });
  }
});

router.get("/quiz/score", (req, res) => {
  res.json({ score: userScore });
});

module.exports = router;
