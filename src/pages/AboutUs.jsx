import React from "react";
import Slider from "../components/Slider";
import Section2 from "../components/About/Section2";
import Section1 from "../components/About/Section1";
import Section3 from "../components/About/Section3";

const AboutUs = () => {
  return (
    <div>
      <Section1 />
      <Section2 />

      <Slider />

      <Section3 />
    </div>
  );
};

export default AboutUs;
