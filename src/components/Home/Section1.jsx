import React, { useEffect } from "react";
// import img from "../../assests/acros-media/hero-curv-img-1-1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section1 = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#myvideo", {
      scrollTrigger: {
        trigger: "#myvideo",
        toggleActions: "restart pause reverse pause",
        start: "top 1",
        end: "bottom top",
        scrub: 1,
      },
      clipPath: "polygon(1vw 0%, 100vw 0%, 100vw 100%, 1vw 100%)", // Adjust the ending polygon width
      transform: 'translate3d(-20vw, 0, 0)',
      ease: 'none',
      duration: 3
    });
  }, []);

  return (
    <div className="w-screen bg-black relative flex flex-row h-[100vh]">

      <div className=" relative w-[43%] flex flex-col  px-12 justify-center
      uppercase text-white text-left font-satoshi-bold
      " style={styles.text}>
        {/* <img
          // src="https://firebasestorage.googleapis.com/v0/b/acros-resources.appspot.com/o/Acros-files%2F20230620_195918%20(1).png?alt=media"
          src="https://firebasestorage.googleapis.com/v0/b/acros-resources.appspot.com/o/Acros-files%2Fthe-a-team-black-bg.png?alt=media"
          alt="the A team"
          className=""
        /> */}
        {/* <div className="uppercase text-white tracking-tighter text-xl	text-left font-satoshi-bold"> */}
        <span style={styles.theateam}>The A Team</span>
        of
        E-Commerce Advertising
        {/* </div> */}
      </div>
      {/* <iframe
        // src="https://player.vimeo.com/video/789740940?autopause=0&amp;loop=1&amp;background=1&amp;app_id=122963"
        src="https://player.vimeo.com/video/744944951?autopause=0&loop=1&background=1"
        width="426"
        height="240"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen=""
        title="Acros Commerce Reel"
        loading="lazy"
        className=" md:w-[50%] w-full  md:h-[80vh] mx-auto  mt-24 mb-12 flex items-center justify-center"
        data-ready="true"
      ></iframe> */}
      <div id="myvideo" className="absolute top-0 bottom-0 left-[22%] w-[100%]" style={styles.video}>
        <iframe
          src="https://player.vimeo.com/video/789740940?autopause=0&amp;loop=1&amp;background=1&amp;app_id=122963"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen=""
          title="Acros Commerce Reel"
          loading="lazy"
          className="w-[100%]"
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  video: {
    clipPath: 'polygon(22vw 0%, 100vw 0%, 100vw 100%, 22vw 100%)',
    transform: 'translate3d(0px, 0px, 0px)'
  },
  theateam: {
    fontSize: 'clamp(2rem, 0.6737rem + 8vw, 10rem)',
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
  },
  text: {
    fontSize: 'clamp(2rem, 0.6737rem + 3vw, 10rem)',
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
  },
}

export default Section1;
