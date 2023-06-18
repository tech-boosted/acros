import React from "react";
import video from "../assests/hero-video.mp4";
const Banner3 = () => {
  return (
    <div className="flex flex-col h-fit mt-10 w-screen">
      <div className="">
        {/* <video
          src={video}
          className="banner-bg w-screen  md:h-[80vh] mx-auto  mt-24 mb-12 flex items-center justify-center"
          autoPlay
          loop
        ></video> */}
        <iframe 
            src="https://player.vimeo.com/video/789740940?autopause=0&amp;loop=1&amp;background=1&amp;app_id=122963" 
            width="426" 
            height="240" 
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen="" 
            title="Acros Commerce Reel" 
            loading="lazy" 
            className="banner-bg w-screen  md:h-[80vh] mx-auto  mt-24 mb-12 flex items-center justify-center"
            data-ready="true">

            </iframe>
      </div>
    </div>
  );
};

export default Banner3;
