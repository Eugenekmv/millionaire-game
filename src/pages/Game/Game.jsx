import React, { useState } from "react";
import "./Game.css";
import gameJson from "../../static/game.json";
import AnswerList from "./AnswerList/AnswerList";

const Question = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answeredQuestion, setAnsweredQuestion] = useState(null);

  const quiz = gameJson.quiz;
  const { answers } = gameJson.quiz[activeQuestion];
  const question = gameJson.quiz[activeQuestion];

  console.log(question);

  const onAnswerClick = (answerId) => {
    console.log(answerId);

    if (answerId === question.rightAnswerId) {
      const timeout = setTimeout(() => {
        if (isGameFinished()) {
          console.log("Finished");
        } else {
          setAnsweredQuestion(true);
          setActiveQuestion((prev) => prev + 1);
        }

        clearTimeout(timeout);
      }, 1000);
    } else {
      setAnsweredQuestion(false);
    }

    const isGameFinished = () => {
      return activeQuestion + 1 === quiz.length;
    };
  };

  return (
    <div className="quiz-container">
      <div className="quiz-wrapper">
        <div className="quiz-game">
          <div className="game-container">
            <span className="quiz-game__title">{question.question}</span>
            <div className="quiz-game__questions">
              <AnswerList
                answers={answers}
                onAnswerClick={onAnswerClick}
                answeredQuestion={answeredQuestion}
              />
            </div>
          </div>
        </div>
        <div className="quiz-stage">Stage: {activeQuestion}</div>
      </div>
    </div>
  );
};

export default Question;
