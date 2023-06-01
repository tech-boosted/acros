import React, { useEffect } from "react";
import { BsCalendar, BsCalendar2, BsCalendar2CheckFill } from "react-icons/bs";
import { articles, blogs, caseStudies } from "../../utils/Variable";


const WrittenContent = ({ category, indexValue }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="my-10 w-full flex flex-col items-center justify-center">
      {category === "Blogs" && (
      <div>
        <h2 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
        {blogs[indexValue].title}
      </h2>
      <div className="my-6  flex self-start gap-4 items-center">
        <BsCalendar2CheckFill /> {blogs[indexValue].date}
      </div>
      <img
        src={blogs[indexValue].img}
        alt="blogs/01"
        className="w-[100%] rounded-[30px] my-10 "
      />
      <p className="font-satoshi-bold text-desc-custom leading-20">
        {blogs[indexValue].description}
      </p>

      </div>
      )}
      {category === "Articles" && (
      <div>
        <h2 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
        {articles[indexValue].title}
      </h2>
      <div className="my-6  flex self-start gap-4 items-center">
        <BsCalendar2CheckFill /> {articles[indexValue].date}
      </div>
      <img
        src={articles[indexValue].img}
        alt="articles/01"
        className="w-[100%] rounded-[30px] my-10 "
      />
      <p className="font-satoshi-bold text-desc-custom leading-20">
        {articles[indexValue].description}
      </p>

      </div>
      )}
      {category === "CaseStudies" && (
      <div>
        <h2 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
        {caseStudies[indexValue].title}
      </h2>
      <div className="my-6  flex self-start gap-4 items-center">
        <BsCalendar2CheckFill /> {caseStudies[indexValue].date}
      </div>
      <img
        src={caseStudies[indexValue].img}
        alt="caseStudies/01"
        className="w-[100%] rounded-[30px] my-10 "
      />
      <p className="font-satoshi-bold text-desc-custom leading-20">
        {caseStudies[indexValue].description}
      </p>

      </div>
      )}
    </div>
  );
  
};

export default WrittenContent;
