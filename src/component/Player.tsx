import React from "react";
import "./styles/Player.css";

const Player = () => {
  return (
    <>
      <div className="playerMainContainer">
        <iframe
          title="player"
          width="80vw"
          height="70vh"
          src={"https://www.youtube.com/embed/s4BibernJxU"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default Player;
