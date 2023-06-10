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

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <Section1 />
      <Section2 />
      <BrandGrid />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Connect />
    </div>
  );
};

export default Home;
