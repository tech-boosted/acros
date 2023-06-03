import React from "react";

import Connect from "../components/Connect";
import Partners from "../components/Partners";
import Section from "../components/Section";
import Specializations from "../components/Specializations";
import TechStack from "../components/TechStack";
import Testimonials from "../components/Testimonials";
import WorkWithUs from "../components/WorkWithUs";
// import Banner from "../components/Banner";
import Banner1 from "../components/Banner1";

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <Banner1/>
      <Section />
      <Partners />
      <Testimonials />
      <Specializations />
      <WorkWithUs />
      <TechStack />
      <Connect />
    </div>
  );
};

export default Home;
