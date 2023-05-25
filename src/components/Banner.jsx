import React from "react";
import video from "../assests/hero-video.mp4"
const Banner = () => {
  return (
    <div >
      <div className="max-w-[100vw] h-[100vh] overflow-hidden flex items-center justify-center ">
        <video className="absolute top-0 left-0 w-full h-full object-cover " autoPlay  loop>
          <source
            src={video}
            type="video/mp4"
          />
        </video>
        <h2 className="absolute top-0 left-0 w-full h-full bg-[#fff] text-[25vw] leading-[22vw] font-extrabold flex justify-center items-center text-center text-[#000] uppercase mix-blend-screen">
          The A Team
        </h2>
      </div>
    </div>
  );
};

export default Banner;
