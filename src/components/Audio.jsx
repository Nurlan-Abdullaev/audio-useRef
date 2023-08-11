import React, { useRef } from "react";
import audioBaby from "../audio/Justin Bieber - Baby (acoustic).mp3";

const Audio = () => {
  const initionAudio = useRef(null);

  const PlayHandler = () => {
    initionAudio.current.play();
  };
  const PauseHandler = () => {
    initionAudio.current.pause();
  };
  return (
    <div>
      <h1>Play Muzik</h1>
      <audio ref={initionAudio} controls>
        <source src={audioBaby} type="audio/mpeg" />
      </audio>
      <div>
        <button onClick={PlayHandler}>play</button>
        <button onClick={PauseHandler}>pauze</button>
      </div>
    </div>
  );
};
export default Audio;
