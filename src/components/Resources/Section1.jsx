import React, { useState } from "react";
import { Link } from "react-router-dom";
import strings from "../../strings";
const Section1 = ({ blogs, articles, cs }) => {
  const [showArticle, setShowArticle] = useState(true);
  const [showBlogs, setShowBlogs] = useState(false);
  const [showCaseStudies, setShowCaseStudies] = useState(false);

  const handleClick = (value) => {
    if (value === "Articles") {
      setShowArticle(true);
      setShowBlogs(false);
      setShowCaseStudies(false);
    }
    if (value === "Blogs") {
      setShowArticle(false);
      setShowBlogs(true);
      setShowCaseStudies(false);
    }
    if (value === "Case Studies") {
      setShowArticle(false);
      setShowBlogs(false);
      setShowCaseStudies(true);
    }
  };

  return (
    <div>
      <div className="h-fit w-screen bg-[url('https://firebasestorage.googleapis.com/v0/b/acros-resources.appspot.com/o/Acros-files%2Fblue%20background.jpg?alt=media&token=2e85e984-90f7-43c4-893a-6a00910e9284')] py-10 px-[10%]  text-black  md:mt-32 mt-[120px]">
        <h2 className="mb-10 md:text-title-basic text-title-basic-mv font-satoshi-bold">
          {strings.RESOURCE_SECTION_1_TITLE}{" "}
        </h2>
        <p className="font-satoshi-medium text-subtitle-basic-mv md:text-subtitle-basic leading-relaxed ">
          {strings.RESOURCE_SECTION_1_DESCRIPTION}
        </p>

        <div className="tabs h-fit mt-10 w-full flex justify-start gap-4 items-center   md:mt-10 ">
          <button
            className={` ${
              showArticle
                ? "bg-black text-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1"
                : "text-black border border-black hover:bg-black hover:text-white active:bg-black font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            }`}
            onClick={() => {
              handleClick("Articles");
            }}
          >
            Article
          </button>
          <button
            className={` ${
              showBlogs
                ? "bg-black text-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1"
                : "text-black border border-black hover:bg-black hover:text-white active:bg-black font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            }`}
            onClick={() => {
              handleClick("Blogs");
            }}
          >
            Blogs
          </button>
          <button
            className={` ${
              showCaseStudies
                ? "bg-black text-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1"
                : "text-black border border-black hover:bg-black hover:text-white active:bg-black font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            }`}
            onClick={() => {
              handleClick("Case Studies");
            }}
          >
            Case Studies
          </button>
        </div>
      </div>

      {showArticle && (
        <div className="w-screen px-[10%] grid md:grid-cols-2  grid-cols-1 gap-8  m-auto  my-10">
          {articles.map((item, index) => (
            <div>
              <Link to={`/articles/0${index + 1}`} key={index}>
                <img
                  src={item.imgSrc}
                  alt="Article1"
                  key={index}
                  className="w-full rounded-[30px]"
                />
              </Link>
              <h2 className="text-subtitle-basic-mv md:text-subtitle-basic font-satoshi-bold my-4">
                {item.title}
              </h2>
              <span className="text-[12px]  ">{item.date}</span>
              <p className=" my-4">{item.shortDescription}</p>
              <Link to={`/articles/0${index + 1}`} key={index}>
                <button className="text-black border border-black hover:bg-black hover:text-white active:bg-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  Read More
                </button>
              </Link>{" "}
            </div>
          ))}
        </div>
      )}

      {showBlogs && (
        <div className="w-screen px-[10%] grid md:grid-cols-2  grid-cols-1 gap-8  m-auto  my-10">
          {blogs.map((item, index) => (
            <div>
              <Link to={`/blogs/0${index + 1}`} key={index}>
                <img
                  src={item.imgSrc}
                  alt="Article1"
                  key={index}
                  className="w-full rounded-[30px]"
                />
              </Link>
              <h2 className="text-subtitle-basic-mv md:text-subtitle-basic font-satoshi-bold my-4">
                {item.title}
              </h2>
              <span className="text-[12px]  text-gray-600">{item.date}</span>
              <p className=" my-4">{item.shortDescription}</p>
              <Link to={`/blogs/0${index + 1}`} key={index}>
              <button className="text-black border border-black hover:bg-black hover:text-white active:bg-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}

      {showCaseStudies && (
        <div className="w-screen px-[10%] grid md:grid-cols-2  grid-cols-1 gap-8  m-auto  my-10">
          {cs.map((item, index) => (
            <div>
              <Link to={`/caseStudies/0${index + 1}`} key={index}>
                <img
                  src={item.imgSrc}
                  alt="Article1"
                  key={index}
                  className="w-full rounded-[30px]"
                />
              </Link>
              <h2 className="text-subtitle-basic-mv md:text-subtitle-basic font-satoshi-bold my-4">
                {item.title}
              </h2>
              <span className="text-[12px]  text-gray-600">{item.date}</span>
              <p className=" my-4">{item.shortDescription}</p>
              <Link to={`/caseStudies/0${index + 1}`} key={index}>
              <button className="text-black border border-black hover:bg-black hover:text-white active:bg-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  Read More
                </button>
              </Link>{" "}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Section1;
