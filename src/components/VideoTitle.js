import React from "react";
import "../css/videotitle.css";
import play_icon from "../images/play_icon.png";
import info_icon from "../images/infio_icon.png";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="video-title-cont">
      <h1>{title}</h1>
      <h4>{overview}</h4>
      <div className="video-title-buttons-cont">
        <button className="video-title-btn" id="play-btn">
          <span>
            <img src={play_icon} alt="" />
            PLAY
          </span>
        </button>
        <button className="video-title-btn">
          <span>
            <img src={info_icon} alt="" />
            More Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
