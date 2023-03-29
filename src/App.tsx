import React from "react";
import "./App.css";
import Header from "./component/Header";
import Player from "./component/Player";
import SideBox from "./component/SideBox";
import Channel from "./component/Channel";

function App() {
  return (
    <>
      <div className="rootConatiner">
        <div>
          <Header />
        </div>
        <div className="playerContainer">
          <div className="playerAndChannel">
            <div className="player">
              <Player />
            </div>
            <div className="channel">
              <Channel />
            </div>
          </div>
          <div className="sideBox">
            <SideBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
