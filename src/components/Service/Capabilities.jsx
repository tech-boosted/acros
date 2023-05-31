import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Capabilities = () => {
  const [data, setdata] = useState(0);
  const arr = [
    {
      key: "Media Buying",
      desc: "Media Buying is the purchasing advertising space or time on various media platforms and negotiating rates with publishers or media companies. It's a crucial component of a successful advertising campaign performance to maximize return on investment for clients.",
    },
    {
      key: "Campaign Management",
      desc: "Campaign management refers to the strategic planning, execution, and monitoring of marketing or advertising campaigns to achieve specific objectives. It involves overseeing the entire lifecycle of a campaign, from conceptualization and development to implementation and analysis",
    },
    {
      key: "Trafficking",
      desc: "Trafficking refers to the strategic planning, execution, and monitoring of marketing or advertising campaigns to achieve specific objectives. It involves overseeing the entire lifecycle of a campaign, from conceptualization and development to implementation and analysis",
    },
    {
      key: "Conversion Strategising",
      desc: "Conversion Strategising refers to the strategic planning, execution, and monitoring of marketing or advertising campaigns to achieve specific objectives. It involves overseeing the entire lifecycle of a campaign, from conceptualization and development to implementation and analysis",
    },
    {
      key: "Partner Network Access",
      desc: "Partner Network Access refers to the strategic planning, execution, and monitoring of marketing or advertising campaigns to achieve specific objectives. It involves overseeing the entire lifecycle of a campaign, from conceptualization and development to implementation and analysis",
    },
  ];
  return (
    <div className="w-full h-fit text-desc-custom my-20">
      <div className="font-bold text-right mb-10 text-title-custom font-satoshi-bold">
        <p>Revolutionize Your</p>
        <p>Adverstising Strategy</p>
      </div>
      <div className="text-right flex-col justify-end gap-12">
        <p className="mt-6">
          Native ads offer less intrusive and more engaging adverstising,
          reaching specific audiences and <br /> increasing brand
          awareness.Learn how native ads can improve the performance and ROI of
          your digital <br /> ad campaigns.
        </p>
      </div>

      <div>
        <h2 className="text-right my-10 md:text-subtitle-custom text-subtitle-custom-mv font-satoshi-bold">
          Capabilities
        </h2>
        <div className="flex md:flex-row flex-col-reverse w-full justify-between ">
          <div className="md:w-[45%] w-full h-[220px] md:m-auto my-10 bg-gradient-to-r from-[#AA00FF] to-[#0044FF] py-8 px-12 rounded-[30px]">
            <p className="text-white">{arr[data].desc}</p>
          </div>
          <div className="md:w-[50%] w-full  flex flex-col justify-start items-end">
            {arr.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer flex md:w-[80%] w-full py-3 b  px-5   border-blue-700 border-b-[2px] items-center justify-between"
                onClick={() => setdata(index)}
              >
                <p className="font-satoshi-bold">{item.key}</p>
                <BsArrowRight className="transform hover:translate-x-2 transition-all delay-2 font-bold text-blue-700 text-[23px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
