import React from "react";
import "./Start.css";
import hand from "../../static/img/hand.png";

import { Link } from "react-router-dom";
import ButtonGame from "../UI/ButtonGame/ButtonGame";

const Start = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <img src={hand} className="hand" alt="" />
        <div className="block">
          <span className="title">Who wants to be a millionaire?</span>
          <Link to="/game">
            <ButtonGame title="Start" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
