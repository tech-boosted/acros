import React, { useState } from "react";
import { Link } from "react-router-dom";
import { articles, blogs, caseStudies } from "../../utils/Variable";


const InsightsBanner = () => {


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
      <div className="bg-gradient-to-r from-[#AA00FF] to-[#0044FF]  w-full h-fit px-12 py-10  rounded-[30px] text-white mt-16 text-desc-custom">
        <h2 className="mb-10 md:text-title-custom text-title-custom-mv font-satoshi-bold">
          Insightful Digital Buzz
        </h2>
        <p className="">
          Explore the world of advertising with our engaging and informative
          blogs, offering valuable <br /> insights and inspiration for
          businesses of all sizes.
        </p>
      </div>


      <div className="tabs h-[22vh] w-full flex justify-start gap-4 items-center   md:my-0 ">
        <button
          className={` ${showArticle ? "bg-primary text-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1" : "text-primary border border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}`}
          onClick={() => {
            handleClick("Articles");
          }}
        >
          Article
        </button>
        <button
          className={` ${showBlogs ? "bg-primary text-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1" : "text-primary border border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}`}
          onClick={() => {
            handleClick("Blogs");
          }}
        >
          Blogs
        </button>
        <button
          className={` ${showCaseStudies ? "bg-primary text-white font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1" : "text-primary border border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-4 py-2 rounded-[30px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}`}
          onClick={() => {
            handleClick("Case Studies");
          }}
        >
          Case Studies
        </button>
      </div>

      {showArticle && (
        <div className="w-full grid md:grid-cols-2  grid-cols-1 gap-8  m-auto">
          {articles.map((item, index) => (
            <Link to={`/articles/0${index + 1}`}>
              <div>
                <img
                  src={item.img}
                  alt="Article1"
                  className="w-full rounded-[30px]"
                />
                <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold my-4">
                  {item.title}
                </h2>
                <span className="text-[12px]  text-gray-600">{item.date}</span>
                <p className=" my-4">{item.shortDescription}</p>
                <button>Read More</button>
              </div>
            </Link>
          ))}
        </div>
      )}

      {showBlogs && (
        <div className="w-full grid md:grid-cols-2  grid-cols-1 gap-8  m-auto">
          {blogs.map((item, index) => (
            <Link to={`/blogs/0${index + 1}`}>
              <div>
                <img
                  src={item.img}
                  alt="Article1"
                  className="w-full rounded-[30px]"
                />
                <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold my-4">
                  {item.title}
                </h2>
                <span className="text-[12px]  text-gray-600">{item.date}</span>
                <p className=" my-4">{item.shortDescription}</p>
                <button>Read More</button>
              </div>
            </Link>
          ))}
        </div>
      )}

      {showCaseStudies && (
        <div className="w-full grid md:grid-cols-2  grid-cols-1 gap-8  m-auto">
          {caseStudies.map((item, index) => (
            <Link to={`/caseStudies/0${index + 1}`}>
              <div>
                <img
                  src={item.img}
                  alt="Article1"
                  className="w-full rounded-[30px]"
                />
                <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-bold my-4">
                  {item.title}
                </h2>
                <span className="text-[12px]  text-gray-600">{item.date}</span>
                <p className=" my-4">{item.shortDescription}</p>
                <button>Read More</button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default InsightsBanner;
