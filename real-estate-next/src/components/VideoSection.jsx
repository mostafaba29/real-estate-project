import React from "react";
import videoImg from "@/assets/imgs/pagefive/video.png";
import Image from "next/image";
const VideoSection = () => {
  return (
    <div className="shadow videosection p-4">
      <h3 className="bold">Video</h3>
      <br />
      <Image src={videoImg} alt="Video Thumbnail" width="100%" />
    </div>
  );
};

export default VideoSection;
