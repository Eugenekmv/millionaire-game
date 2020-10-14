import React, { useContext } from "react";
import { act } from "react-dom/test-utils";
import { MenuContext } from "../../../context/navContext";

import "./Stages.css";

const Stages = ({ stages, activeQuestion }) => {
  const { isMenuOpen } = useContext(MenuContext);

  const setActiveStage = (stage) => {
    if (activeQuestion === stage.id) {
      return "current";
    } else if (activeQuestion > stage.id) {
      return "completed";
    } else {
      return "";
    }
  };

  return (
    <>
      <div className={`quiz-stage ${isMenuOpen ? "opened" : ""}`}>
        {stages.map((stage) => (
          <div className={`stage ${setActiveStage(stage)}`} key={stage.id}>
            {stage.amount}
          </div>
        ))}
      </div>
    </>
  );
};

export default Stages;
