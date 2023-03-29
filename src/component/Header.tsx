import React from "react";
import "./styles/Header.css";
import { MenuBar, YouTube } from "../assests/Icons";

const Header = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="subContainer">
          <span>
            <MenuBar />
          </span>
          <span className="youtubeLogo">
           <YouTube />
          </span>
          <span>
            
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
