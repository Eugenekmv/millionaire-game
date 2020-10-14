import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Game.css";
import gameJson from "../../static/game.json";
import AnswerList from "./AnswerList/AnswerList";
import Stages from "./Stages/Stages";
import BurgerButton from "../UI/BurgerButton/BurgerButton";
import NavState from "../../context/navContext";

const Question = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answeredQuestion, setAnsweredQuestion] = useState(null);

  const history = useHistory();

  const quiz = gameJson.quiz;
  const stages = gameJson.stages;
  const { answers } = gameJson.quiz[activeQuestion];
  const question = gameJson.quiz[activeQuestion];

  const onAnswerClick = (answerId) => {
    console.log(answerId);

    if (answerId === question.rightAnswerId) {
      setAnsweredQuestion({ [answerId]: "success" });

      const timeout = setTimeout(() => {
        if (isGameFinished()) {
          history.push({
            pathname: "/finish",
            state: {
              prizeStep: activeQuestion,
            },
          });
          setAnsweredQuestion(null);
          setActiveQuestion(0);
        } else {
          setActiveQuestion((prev) => prev + 1);
          setAnsweredQuestion(null);
        }

        clearTimeout(timeout);
      }, 1000);
    } else {
      setAnsweredQuestion({ [answerId]: "failed" });
      const timeout = setTimeout(() => {
        history.push({
          pathname: "/finish",
          state: {
            prizeStep: activeQuestion - 1,
          },
        });
        clearTimeout(timeout);
      }, 1000);
    }

    const isGameFinished = () => {
      return activeQuestion + 1 === quiz.length;
    };
  };

  return (
    <NavState>
      <div className="quiz-container">
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
        <BurgerButton></BurgerButton>
        <Stages stages={stages} activeQuestion={activeQuestion} />
      </div>
    </NavState>
  );
};

export default Question;
