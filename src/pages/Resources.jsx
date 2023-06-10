import React from "react";
import Section1 from "../components/Resources/Section1";

const Resources = ({ blogs, articles, cs }) => {
  return (
    <div>
      <Section1 blogs={blogs} articles={articles} cs={cs} />
    </div>
  );
};

export default Resources;
