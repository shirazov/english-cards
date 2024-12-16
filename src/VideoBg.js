import React from "react";
import "./VideoBg.css"; // Стили для видео

const VideoBg = () => {
  return (
    <div className="video-bg">
      <video autoPlay loop muted playsInline>
        <source
          src="https://assets.codepen.io/3364143/7btrrd.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBg;
