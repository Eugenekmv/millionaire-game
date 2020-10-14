import React from 'react';

import ButtonAnswer from '../../UI/ButtonAnswer';

const AnswerList = ({ answers, onAnswerClick, answeredQuestion }) => {
  return (
    <>
      {answers.map((answer) => (
        <ButtonAnswer
          key={answer.id}
          id={answer.id}
          text={answer.text}
          onAnswerClick={onAnswerClick}
          answeredQuestion={answeredQuestion ? answeredQuestion[answer.id] : null}
        />
      ))}
    </>
  );
};

export default AnswerList;
