import React, { useEffect } from "react";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { articles, blogs, caseStudies } from "../../utils/Variable";
import parse from "html-react-parser";

const WrittenContent = ({ obj }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="my-10 w-full flex flex-col items-center justify-center">
      {/* {category === "Blogs" && ( */}
        <div>
          <h2 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
            {obj.title}
          </h2>
          <div className="my-6  flex self-start gap-4 items-center">
            <BsCalendar2CheckFill /> {obj.date}
          </div>
          <img
            src={obj.imgSrc}
            alt="blogs/01"
            className="w-[100%] rounded-[30px] my-10 "
          />
          <p className="font-satoshi-bold text-desc-custom leading-20">
            {parse(obj.description)}
          </p>
        </div>
      
    </div>
  );
};

export default WrittenContent;
