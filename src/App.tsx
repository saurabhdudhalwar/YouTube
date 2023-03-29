import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Player from "./component/Player";
import SideBox from "./component/SideBox";
import Channel from "./component/Channel";

function App() {
  const [video, setVideo] = useState({
    key: 1,
    name: "Cartoon - On & On (feat. Daniel Levi)",
    id: 'K4DyBUG242c'
  })
  const Array = [
    {
      key: 1,
      name: "Cartoon - On & On (feat. Daniel Levi)",
      id: 'K4DyBUG242c'
    },
    {
      key: 2,
      name: "Janji - Heroes Tonight (feat. Johnning)",
      id: '3nQNiWdeH2Q'
    },
    {
      key: 3,
      name: "Alan Walker - Spectre / Force / Fade",
      id: 'KsxoJwX1w-E'
    },
    {
      key: 4,
      name: "Jarico - Landscape",
      id: 'oZyGl9cNc24'
    }
    , {
      key: 5,
      name: "Alan Walker Mashup Spectrex Fade",
      id: '2Do9mxOtJC0'
    }, {
      key: 6,
      name: "Alan Walker - Spectre But is made by Elektronomia",
      id: 'MgWJscRv7ek'
    },
    {
      key: 7,
      name: "Janji - Heroes Tonight (feat. Johnning) ",
      id: 'Ia67vOEOMKA'
    },
    {
      key: 8,
      name: "Lost Sky - Fearless",
      id: 'nlYtvcy8p08'
    },
    {
      key: 9,
      name: "Jarico - Landscape ",
      id: 'SaWyYJXbobY'
    }
    , {
      key: 10,
      name: "Julius Dreisig & Zeus X Crona Invisible",
      id: '3rR8owI7KiQ'
    }
  ]
  return (
    <>
      <div className="rootConatiner">
        <div>
          <Header />
        </div>
        <div className="playerContainer">
          <div className="playerAndChannel">
            <div className="player">
              <Player video={video} Array={Array}/>
            </div>
            <div className="channel">
              <Channel video={video} />
            </div>
          </div>
          <div className="sideBox">
            <SideBox Array={Array} setVideo={setVideo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
