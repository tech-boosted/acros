import React from "react";
import Navbar from "../components/Navbar";
import WhoAreWe from "../components/About/WhoAreWe";
import Footer from "../components/Footer";
import Values from "../components/About/Values";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <WhoAreWe />
      <Values/>
      <Footer/>
    </div>
  );
};

export default AboutUs;
