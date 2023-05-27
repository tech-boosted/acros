import React from "react";
import Navbar from "../components/Navbar";
import WhoAreWe from "../components/About/WhoAreWe";
import Footer from "../components/Footer";
import Values from "../components/About/Values";
import Slider from "../components/Slider";

const AboutUs = () => {
  return (
    <div>
      <WhoAreWe />
      <Slider />
      <Values />
    </div>
  );
};

export default AboutUs;
