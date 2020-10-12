import React from "react";
import Button from "../../UI/Button/Button";

const AnswerList = ({ answers, onAnswerClick, answeredQuestion }) => {
  console.log(answers);
  return (
    <>
      {answers.map((answer) => (
        <Button
          key={answer.id}
          id={answer.id}
          text={answer.text}
          onAnswerClick={onAnswerClick}
          answeredQuestion={answeredQuestion}
        />
      ))}
    </>
  );
};

export default AnswerList;
