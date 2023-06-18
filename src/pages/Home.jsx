import React from "react";

import Connect from "../components/Connect";
import Section3 from "../components/Section3";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section5 from "../components/Section5";
import Section4 from "../components/Section4";
import Section6 from "../components/Section6";
import Section8 from "../components/Section8";
import Section9 from "../components/Section9";
import Section10 from "../components/Section10";
import Section11 from "../components/Section11";
import BrandGrid from "../components/BrandGrid";
import Banner from "../components/Banner";
import Banner3 from "./Banner3";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      {/* <Section1 /> */}
      <Banner3 />
      <Section2 />
      {/* <BrandGrid /> */}
      <Slider />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <div className="flex md:w-screen">
        <Section8 />
        <Section9 />
      </div>
      <Section10 />
      <Section11 />
      <Connect />
    </div>
  );
};

export default Home;
