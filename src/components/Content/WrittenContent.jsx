import React, { useEffect } from "react";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { articles, blogs, caseStudies } from "../../utils/Variable";
import parse from "html-react-parser";

const WrittenContent = ({ obj }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen">
      <div className="my-20 w-[92%] mx-auto flex flex-col items-center justify-center">
        <div>
          <h2 className="md:text-title-basic text-title-basic-mv font-satoshi-bold">
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
          <p className="font-satoshi-bold text-desc-basic leading-20">
            {parse(obj.description)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WrittenContent;
