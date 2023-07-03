import React, { useLayoutEffect } from "react";

import Connect from "../components/Connect";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import Section5 from "../components/Home/Section5";
import Section6 from "../components/Home/Section6";
import Section8 from "../components/Home/Section8";
import Section9 from "../components/Home/Section9";
import Section11 from "../components/Home/Section11";
import Slider from "../components/Slider";
import Section10 from "../components/Home/Section10";

import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

const Home = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useLayoutEffect(() => {
    ScrollSmoother.create();
  }, []);

  return (
    <div className="smooth-wrapper">
      <div id="smooth-content">
        <Section1 />
        <Section2 />
        <Slider />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <div className="flex md:flex-row md:w-screen flex-col ">
          <Section8 />
          <Section9 />
        </div>
        <Section10 />
        <Section11 />
        <Connect />
      </div>
    </div>
  );
};

export default Home;
