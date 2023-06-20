import React from "react";
import img from "../../assests/acros-media/hero-curv-img-1-1.png";
const Section1 = () => {
  return (
    <div className="w-screen flex md:flex-row flex-col-reverse bg-black">
      <div className="md:w-[50%] w-[80%] mx-auto md:h-screen ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/acros-resources.appspot.com/o/Acros-files%2F20230620_165751.png?alt=media&token=9dcef544-fb39-48cf-a0c0-0e30557e3bb1"
          alt="the A team"
          className="block mx-auto md:mt-[150px] mb-16 h-[60%]"
        />
      </div>
      <iframe
        src="https://player.vimeo.com/video/789740940?autopause=0&amp;loop=1&amp;background=1&amp;app_id=122963"
        width="426"
        height="240"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen=""
        title="Acros Commerce Reel"
        loading="lazy"
        className=" md:w-[50%] w-full  md:h-[80vh] mx-auto  mt-24 mb-12 flex items-center justify-center"
        data-ready="true"
      ></iframe>
    </div>
  );
};

export default Section1;