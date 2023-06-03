import React from "react";
import Home from "../components/Technology/Home";
import Dashboards from "../components/Technology/Dashboards";
import PlatformProductFit from "../components/Technology/PlatformProductFit";
import Plans from "../components/Technology/Plans";
import Connect from "../components/Connect";
// import Strip from "../components/Service/Strip";

const Technology = () => {
  return (
    <div>
      <Home />
      <Dashboards />
      <PlatformProductFit />
      <Plans />
      <Connect />
      {/* <Strip/> */}
    </div>

  );
};

export default Technology;
