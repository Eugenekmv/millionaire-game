import React, { useContext } from "react";

import { MenuContext } from "../../../context/navContext";

import "./BurgerButton.css";

const BurgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <div
      class={`icon nav-icon-5 ${isMenuOpen ? "open" : ""}`}
      onClick={clickHandler}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerButton;
