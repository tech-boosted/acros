import React from "react";
import Section1 from "../components/Service/Section1";
import { Section4 } from "../components/Service/Section4";
import Connect from "../components/Connect";
import Section2 from "../components/Service/Section2";
import Section3 from "../components/Service/Section3";
import Specialization from "../components/Service/Specialization";

const Services = () => {
  return (
    <div>
      <Section1 />
      <Specialization />
      <Section3 />
      {/* <Section2 /> */}
      <Section4 />
      <Connect />
    </div>
  );
};

export default Services;
