import React from "react";
import "./styles/Player.css";

const Player = (props: any) => {
  console.log(props.id);
  
  return (
    <>
      <div className="playerMainContainer">
        <iframe
          title="player"
          width="80vw"
          height="70vh"
          src={`https://www.youtube.com/embed/${props.video.id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default Player;
