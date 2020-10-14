import React from "react";
import "./ButtonAnswer.css";

const Button = ({ id, text, onAnswerClick, answeredQuestion }) => {
  const addClass = () => {
    if (answeredQuestion === "failed") {
      return "failed";
    } else if (answeredQuestion === "success") {
      return "success";
    } else {
      return "";
    }
  };

  // const withDelay = (fn, time) => {
  //   setDisabled(true);
  //   const context = this;
  //   const args = arguments;
  //   function wrapper() {
  //     fn.apply(context, args);

  //     let timeout = setTimeout(() => {
  //       setDisabled(false);
  //       clearTimeout(timeout);
  //     }, time);
  //   }
  //   return wrapper;
  // };

  return (
    <button
      className={`btn-answer ${addClass()}`}
      // onClick={() => withDelay(onAnswerClick(id), 5000)}
      onClick={() => onAnswerClick(id)}
    >
      <span className="id">{id}: </span>
      {text}
    </button>
  );
};

export default Button;
