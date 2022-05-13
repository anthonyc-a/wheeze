import React, { useState } from "react";
import { Header } from "../../styles/Header.styled";
import MenuComponent from "./Menu/Menu";
import UtilityComponent from "./Utility/Utility";

const HeaderComponent = ({menuOpen, setMenuOpen}) => {
  return (
    <Header>
      <div
        className="burger"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="logo">wheeze</div>
      <div className="cart">
        <svg
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_2_261"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="21"
          >
            <path
              d="M8.37299 0C10.2381 0 11.8616 1.58652 11.9993 3.54402L12.0267 3.94933L16 3.94937V20.8H0V3.94937L3.972 3.94933L4.00073 3.54402C4.1384 1.58671 5.75872 0 7.62701 0H8.37299ZM8.31468 1.2827H7.68532C6.44133 1.2827 5.34868 2.69126 5.25694 3.94937H10.7431C10.6514 2.69232 9.55703 1.2827 8.31468 1.2827Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_2_261)">
            <path
              d="M8.37299 0C10.2381 0 11.8616 1.58652 11.9993 3.54402L12.0267 3.94933L16 3.94937V20.8H0V3.94937L3.972 3.94933L4.00073 3.54402C4.1384 1.58671 5.75872 0 7.62701 0H8.37299ZM8.31468 1.2827H7.68532C6.44133 1.2827 5.34868 2.69126 5.25694 3.94937H10.7431C10.6514 2.69232 9.55703 1.2827 8.31468 1.2827Z"
              fill="black"
            />
          </g>
        </svg>
      </div>
     
    </Header>
  );
};

export default HeaderComponent;
