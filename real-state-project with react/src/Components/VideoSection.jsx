import React from "react";
import videoImg from "../assets/imgs/pagefive/video.png";
const VideoSection = () => {
  return (
    <div className="shadow videosection p-4">
      <h3 className="bold">Video</h3>
      <br />
      <img src={videoImg} alt="Video Thumbnail" width="100%" />
    </div>
  );
};

export default VideoSection;
