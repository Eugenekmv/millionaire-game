import React from "react";
import "./Start.css";
import hand from "../../static/img/hand.png";

const Start = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <img src={hand} className="hand" alt="" />
        <div className="block">
          <span className="title">Who wants to be a millionaire?</span>
          <button className="btn-start">Start</button>
        </div>
      </div>
    </div>
  );
};

export default Start;
