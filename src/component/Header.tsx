import React from "react";
import "./styles/Header.css";
import menu from "../assests/Menu.png";
const Header = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="subContainer">
          <span>
            <img src={menu} alt="menu" />
          </span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Header;
