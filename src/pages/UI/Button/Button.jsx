import React from "react";
import "./Button.css";

const Button = ({ id, text, onAnswerClick, answeredQuestion }) => {
  // const classes = ['btn-question']
  // const addClass = () => {
  //   if (answeredQuestion === true) {
  //     return "success";
  //   } else if (answeredQuestion === false) {
  //     return "failed";
  //   } else
  // };

  return (
    <button className={"btn-question"} onClick={() => onAnswerClick(id)}>
      <span>{id}-----</span>
      {text}
    </button>
  );
};

export default Button;
