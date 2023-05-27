import React, { useState } from "react";
import Rectangle1 from "../../assests/acros-media/Rectangle-165.png";
import CS1 from "../../assests/acros-media/Case-Study-2.jpg";
import CS2 from "../../assests/acros-media/Case-Study-1.jpg";
import BG1 from "../../assests/acros-media/Blog-1.jpg";
import BG2 from "../../assests/acros-media/Blog-2.jpg";
import AR1 from "../../assests/acros-media/Article-1.jpg";
import AR2 from "../../assests/acros-media/Article-2.jpg";
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
      <div className="bg-gradient-to-r from-[#AA00FF] to-[#0044FF]  w-full h-fit px-12 py-10  rounded-[30px] text-white my-12 text-desc-custom">
        <h2 className="mb-10 md:text-title-custom text-title-custom-mv font-bold">
          Insightful Digital Buzz
        </h2>
        <p className="">
          Explore the world of advertising with our engaging and informative
          blogs, offering valuable <br /> insights and inspiration for
          businesses of all sizes.
        </p>
      </div>

      <div className="tabs h-[22vh] w-full flex justify-start gap-4 items-center   md:my-6 ">
        <button
          className="px-5 py-2 text-gray-100 rounded-[30px] bg-gradient-to-r from-yellow-500 to-green-300"
          onClick={() => {
            handleClick("Articles");
          }}
        >
          Article
        </button>
        <button
          className="px-5 py-2 text-gray-100 rounded-[30px] bg-gradient-to-r from-yellow-500 to-green-300"
          onClick={() => {
            handleClick("Blogs");
          }}
        >
          Blogs
        </button>
        <button
          className="px-5 py-2 text-gray-100 rounded-[30px] bg-gradient-to-r from-yellow-500 to-green-300"
          onClick={() => {
            handleClick("Case Studies");
          }}
        >
          Case Studies
        </button>
      </div>

      {showArticle && (
        <div className="w-full grid md:grid-cols-2  grid-cols-1 gap-28  m-auto">
          <div>
            <img
              src={Rectangle1}
              alt="Article1"
              className="h-[360px] rounded-[30px]"
            />
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-bold my-4">
              Keep customers hooked to your brand
            </h2>
            <span className="text-[12px]  text-gray-600">May 1, 2023</span>
            <p className=" my-4">
              In recent years, the rise of e-commerce has transformed the way
              people shop. With the convenience of online shopping and the
              plethora of options available,
            </p>
            <button>Read More</button>
          </div>
          <div>
            <img
              src={AR1}
              alt="Article1"
              className="h-[360px] rounded-[30px]"
            />
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-bold my-4">
              Build a Hero Brand by Merit
            </h2>
            <span className="text-[12px]  text-gray-600">April 29, 2023</span>
            <p className=" my-4">
              In today’s competitive market, building a brand is crucial to the
              success of any e-commerce business. One effective way to build a
              standout brand and
            </p>
            <button>Read More</button>
          </div>
          <div>
            <img
              src={AR2}
              alt="Article1"
              className="h-[360px] rounded-[30px]"
            />
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-bold my-4">
              Different types of shoppers and how to engage them
            </h2>
            <span className="text-[12px]  text-gray-600">April 29, 2023</span>
            <p className=" my-4">
              In the highly competitive world of e-commerce, engaging customers
              is an essential part of building a successful online business.
              However, not all customers are created
            </p>
            <button>Read More</button>
          </div>
        </div>
      )}

      {showBlogs && (
        <div className="w-full grid md:grid-cols-2  grid-cols-1 gap-8  m-auto">
          <div>
            <img
              src={Rectangle1}
              alt="Article1"
              className="h-[360px] rounded-[30px]"
            />
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-bold my-4">
              What is the most important metric of E-Commerce Advertising to
              build a HERO BRAND.?{" "}
            </h2>
            <span className="text-[12px]  text-gray-600">May 1, 2023</span>
            <p className=" my-4">
              When it comes to building a hero brand with e-commerce
              advertising, few of the most important metrics to track are: a)
              Customer Lifetime Value (CLV).
            </p>
            <button>Read More</button>
          </div>
          <div>
            <img
              src={BG2}
              alt="Article1"
              className="h-[360px] rounded-[30px]"
            />
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-bold my-4">
              Difference between an e-commerce Shopper, Consumer and Customer
              and how to engage them.{" "}
            </h2>
            <span className="text-[12px]  text-gray-600">April 29, 2023</span>
            <p className=" my-4">
              An e-commerce shopper is anyone who visits an online store to
              browse products or make a purchase. A consumer is someone who buys
              and uses
            </p>
            <button>Read More</button>
          </div>
          <div>
            <img
              src={BG1}
              alt="Article1"
              className="h-[360px] rounded-[30px]"
            />
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-bold my-4">
              How to build an online first retail brand which keeps its
              customers hooked to the brand and products.{" "}
            </h2>
            <span className="text-[12px]  text-gray-600">April 29, 2023</span>
            <p className=" my-4">
              Building an online first retail brand requires a focus on creating
              a unique and engaging customer experience. Here are some
              strategies to keep customers hooked
            </p>
            <button>Read More</button>
          </div>
        </div>
      )}

      {showCaseStudies && (
        <div className="w-full grid md:grid-cols-2  grid-cols-1 gap-8  m-auto">
          <div>
            <img
              src={BG1}
              alt="Article1"
              className="h-[360px] rounded-[30px]"
            />
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-bold my-4">
              Outdoing Nike with their own mantra of “Just Do It”.{" "}
            </h2>
            <span className="text-[12px]  text-gray-600">May 1, 2023</span>
            <p className=" my-4">
              This brand sells Solid colour T-shirts without any Branding on the
              product. No Brand Name, No Label and no catchy Catchphrase. Just
              simple solid T-shirts.
            </p>
            <button>Read More</button>
          </div>
          <div>
            <img
              src={CS2}
              alt="Article1"
              className="h-[360px] rounded-[30px]"
            />
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-bold my-4">
              Driven by Omni-Channel Strategy. Campus is Asia’s Largest Sports
              Footwear Brand.{" "}
            </h2>
            <span className="text-[12px]  text-gray-600">April 29, 2023</span>
            <p className=" my-4">
              Introduction: While prominent Western sneaker brands like Nike,
              Adidas, Puma and Skechers might immediately come to mind, Campus
              is Asia’s largest sports footwear brand by{" "}
            </p>
            <button>Read More</button>
          </div>
          <div>
            <img
              src={CS1}
              alt="Article1"
              className="h-[360px] rounded-[30px]"
            />
            <h2 className="text-subtitle-custom-mv md:text-subtitle-custom font-bold my-4">
              Brand Outperformed Nike’s Catchphrase with Simple Keyword
              Strategy.{" "}
            </h2>
            <span className="text-[12px]  text-gray-600">April 29, 2023</span>
            <p className=" my-4">
              Introduction: Nike’s slogan “Just Do It” is an iconic branding
              strategy that has become synonymous with the superstar brand.
              However, a brand has sold more{" "}
            </p>
            <button>Read More</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsightsBanner;
