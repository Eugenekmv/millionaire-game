import React from 'react';

import './style.css';

const Button = ({ id, text, onAnswerClick, answeredQuestion }) => {
  const addClass = () => {
    if (answeredQuestion === 'failed') {
      return 'failed';
    }
    if (answeredQuestion === 'success') {
      return 'success';
    }
    return '';
  };

  return (
    <button className={`btn-answer ${addClass()}`} onClick={() => onAnswerClick(id)}>
      <span className="id">{id}: </span>
      {text}
    </button>
  );
};

export default Button;
