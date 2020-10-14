import React, { useContext } from 'react';

import { MenuContext } from '../../../context/navContext';

import './style.css';

const BurgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <div className={`icon nav-icon-5 ${isMenuOpen ? 'open' : ''}`} onClick={clickHandler}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerButton;
