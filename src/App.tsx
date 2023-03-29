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
        <div>
          <div>
            <div>
              <Player />
            </div>
            <div>
              <Channel />
            </div>
          </div>
          <div>
            <SideBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
