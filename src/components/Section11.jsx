import React from "react";
import map from "../assests/acros-media/FINAL-MAP-1024x510.png";

const Section11 = () => {
  return (
    <div className="w-screen">
      <div className="md:w-[92%] w-[90%] h-fit grid md:grid-cols-2 grid-cols-1 gap-10 text-white md:mx-[4%] mx-auto my-10">
        <div className="w-full md:h-full h-fit flex flex-col gap-10">
          <div className="w-full md:h-[40vh] h-fit bg-gradient-to-br from-[#cef76d] from-1%  via-[#66b636] via-40%  to-[#00e89e] to-80% rounded-[30px] px-10 py-4">
            <div className="font-satoshi-bold text-right mb-4 text-title-custom">
              <p>Agency Partners</p>
            </div>
            <div className="text-left flex-col  mt-4">
              <p className="">
                Our adverstising agency companies throughbred e-commerce
                Advertising Experts who can create conversion focused ad
                campaigns and strategies that resonate with the e-commerce
                target audience. They work with highly efficient customer
                behaviour patterns, buyers mind mapping and decision influencing
                tools to deliver gold-standard ROI.
              </p>

              <button className="my-4 bg-black  text-white rounded-lg py-2 px-3">
                Learn More.
              </button>
            </div>
          </div>
          <div className="w-full md:h-[40vh] h-fit bg-gradient-to-tr from-[#ff9022] from-25% via-50%   via-[#bb65da]  to-[#7034fc] to-65%     rounded-[30px] px-10 py-4">
            <div className="font-satoshi-bold text-right mb-4 text-title-custom">
              <p>Expertise</p>
            </div>
            <div className="text-left flex-col  mt-4">
              <p className="">
                Our Ad Ops services provide a seamless and cost effective
                solution to an Ad agency's needs. Our Ad Operations team handles
                all aspects of your ads, Freeing up your resources and time to
                focus on your core business.
              </p>
              <button className="my-4 bg-black  text-white rounded-lg py-2 px-3">
                Learn More.
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-fit bg-gradient-to-br from-[#cef76d] from-1%  via-[#66b636] via-40%  to-[#00e89e] to-80% rounded-[30px] px-10 ">
          <img src={map} alt="geographical map" className="mx-auto mt-10" />
          <div className=" flex items-center justify-center  ">
            <div className="my-16 w-full text-right">
              <h1 className="md:md:text-title-custom text-title-custom-mv mb-8 font-satoshi-bold">
                Geographical Presence
              </h1>
              <p className="text-subtitle-custom-mv md:text-subtitle-custom mb-8">
                Deep understanding of worldwide marketplaces and local consumer
                behaviors.
              </p>
              <div className=" mb-8">
                <p>
                  We have developed targeted marketing campaigns that resonate
                  with diverse customer segments. By tailoring their messaging
                  and promotions to specific regions and cultures, we build
                  brand loyalty and generate sales effectively.
                </p>
              </div>
              <div className="grid md:grid-cols-4 grid-cols-1 gap-4 text-center">
                <div>
                  <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                    150+
                  </h1>
                  <p className="font-satoshi-medium">
                    Extensive Experience with Top E-commerce Brands
                  </p>
                </div>
                <div>
                  <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                    15+
                  </h1>
                  <p className="font-satoshi-medium">
                    Expanding Horizons with Clients from 15+ Countries
                  </p>
                </div>
                <div>
                  <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                    70+
                  </h1>
                  <p className="font-satoshi-medium">
                    Amplify your Growth with our Team of Experts
                  </p>
                </div>
                <div>
                  <h1 className="md:text-title-custom text-title-custom-mv font-satoshi-bold">
                    12+
                  </h1>
                  <p className="font-satoshi-medium">
                    Ecommerce Solutions Perfected over 12+ Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section11;
