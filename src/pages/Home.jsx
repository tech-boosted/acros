import React from "react";

import Connect from "../components/Connect";
import Section3 from "../components/Home/Section3";
import Section2 from "../components/Home/Section2";
import Section4 from "../components/Home/Section4";
import Section6 from "../components/Home/Section6";
import Section8 from "../components/Home/Section8";
import Section9 from "../components/Home/Section9";
import Section11 from "../components/Home/Section11";
import BrandGrid from "../components/BrandGrid";
import Banner from "../components/Banner";
import Banner3 from "./Banner3";
import Slider from "../components/Slider";
import Section5 from "../components/Home/Section5";
import Section10 from "../components/Home/Section10";
import Section1 from "../components/Home/Section1";

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <Section1 />
      {/* <Banner3 /> */}
      <Section2 />
      {/* <BrandGrid /> */}
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
  );
};

export default Home;
