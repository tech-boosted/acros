import React from "react";
import video from "../assests/hero-video.mp4";
const Banner3 = () => {
  return (
    <div className="flex flex-col h-fit  w-screen">
      <div className="">
        <video
          src={video}
          className="banner-bg w-screen  md:h-[80vh] mx-auto  mt-24 mb-12 flex items-center justify-center"
          autoPlay
          loop
        ></video>
      </div>
    </div>
  );
};

export default Banner3;
