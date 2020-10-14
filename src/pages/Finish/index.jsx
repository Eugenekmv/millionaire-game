import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import gameJson from '../../static/game.json';

import ButtonGame from '../UI/ButtonGame';

import './style.css';
import hand from '../../static/img/hand.png';

const Finish = () => {
  const location = useLocation();
  const prizeStep = location.state && location.state.prizeStep;

  const [prize, setPrize] = useState(0);

  useEffect(() => {
    gameJson.stages.forEach((step) => {
      if (step.id === prizeStep) {
        setPrize(step.amount);
      }
    });
  }, [prizeStep]);

  return (
    <div className="finish-wrapper">
      <div className="finish-container">
        <img src={hand} className="finish-hand" alt="" />
        <div className="finish-block">
          <div className="block-results">
            <span className="results__title">Total score:</span>
            <span className="results__earned">{`${prize} earned`}</span>
          </div>
          <Link to="/millionaire-game/game">
            <ButtonGame title="Try again" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Finish;
