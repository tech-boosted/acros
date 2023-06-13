import React, { useState } from "react";
import PriceCard from "./PriceCard";

import {
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
  FaTiktok,
  FaShopify,
  FaFacebook,
} from "react-icons/fa";

const Plans = () => {
  const [inputValue, setInputValue] = useState(1);
  const [monthly, setMonthly] = useState(
    "bg-brand-white  text-brand-500 border-r-[3px] border-brand-500 border-[3px]"
  );
  const [yearly, setYearly] = useState(
    "border-[3px] border-l-0 border-gray-500 text-gray-700"
  );

  const [cycle, setCycle] = useState("Monthly");

  const handleClick = (value) => {
    if (value === "Monthly") {
      if (
        monthly ===
        "bg-brand-white  text-brand-500 border-r-[3px] border-brand-500 border-[3px]"
      ) {
        // setMonthly("border-[3px] border-gray-500 text-gray-700 border-r-0")
      } else {
        setMonthly(
          "bg-brand-white  text-brand-500 border-r-[3px] border-brand-500 border-[3px]"
        );
        setCycle("Monthly");
        setYearly("border-[3px] border-gray-500 text-gray-700 border-l-0");
      }
    } else {
      if (
        yearly ===
        "bg-brand-white text-brand-500 border-r-[3px] border-brand-500 border-[3px]"
      ) {
        // setYearly("border-[3px] border-gray-500 text-gray-700 border-l-0")
      } else {
        setYearly(
          "bg-brand-white text-brand-500 border-r-[3px] border-brand-500 border-[3px]"
        );
        setCycle("Yearly");
        setMonthly("border-[3px] border-gray-500 text-gray-700 border-r-0");
      }
    }
  };

  return (
    <div>
      <section className="w-screen px-[10%] mt-5 rounded-[20px]  bg-white ">
        <div className="mx-auto py-8 ">
          <div className="flex md:flex-row flex-col w-full justify-between mx-auto mb-8  text-center lg:mb-12">
            <h2 className="md:w-[40%] md:text-title-custom text-title-custom-mv font-satoshi-bold">
              Pick your perfect plan
            </h2>
            <div className="flex md:flex-row flex-col md:items-baseline items-center  md:w-[60%] w-full md:justify-evenly justify-center">
              <div className="flex flex-col items-center justify-center md:my-0 my-10">
                <p className="font-satoshi-medium">Number of Channels</p>
                <div className="flex h-[45px] mt-2">
                  <button
                    className=" rounded-l-md border-[3px] border-brand-500 w-14 rounded-1 h-full cursor-pointer flex items-center justify-center"
                    onClick={() => {
                      inputValue > 0
                        ? setInputValue(inputValue - 1)
                        : setInputValue(inputValue);
                    }}
                  >
                    <span className="m-auto text-2xl text-brand-500 font-satoshi-bold">
                      -
                    </span>
                  </button>
                  <div className="text-center border-[3px] border-brand-500 border-l-0 border-r-0  w-[80px] bg-gray-100 font-semibold text-md focus:outline-none flex items-center justify-center">
                    {" "}
                    {inputValue}{" "}
                  </div>
                  <button
                    className="border-[3px] border-brand-500 rounded-r-md  w-14 rounded-1 h-full cursor-pointer flex items-center justify-center"
                    onClick={() => {
                      setInputValue(inputValue + 1);
                    }}
                  >
                    <span className="m-auto text-2xl text-brand-500 font-satoshi-bold">
                      +
                    </span>
                  </button>
                </div>

                <div className="flex mt-4 text-xl gap-2">
                  <FaFacebook />
                  <FaInstagram />
                  <FaTwitter />
                  <FaPinterest />
                  <FaLinkedin />
                  <FaShopify />
                  <FaTiktok />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <p className="font-satoshi-medium">Select Billing Cycle</p>
                <div className="flex h-[45px] mt-2">
                  {/* border-gray-500 border-[3px] border-r-0   text-gray-500*/}
                  <button
                    className={`${monthly} rounded-l-md font-satoshi-bold  px-5 py-2 text-base font-medium transition duration-200 active:bg-brand-700/5`}
                    onClick={() => handleClick("Monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={` ${yearly} font-satoshi-bold rounded-r-md  px-5 py-2 text-base font-medium  transition duration-200  active:bg-brand-700/5`}
                    onClick={() => handleClick("Yearly")}
                  >
                    Yearly
                  </button>
                </div>

                <div className="mt-4 bg-cyan-400 text-black font-satoshi-bold px-4 py-1 rounded-md">
                  Save 2 months with yearly billing 🎉
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%] space-y-8  sm:gap-6 lg:grid lg:grid-cols-4 lg:space-y-0 xl:gap-5">
            {/* <!-- Pricing Card --> */}
            <PriceCard
              plan={"Basic"}
              isdiscount={true}
              description={
                "Best option for personal use & for your next project"
              }
              price={"99"}
              upgradedescription={
                "Upgrade for additional User/AdType/Account/Platform"
              }
              upgradeprice={"20"}
              upgradediscount={"15"}
              discountprice={"49"}
              duration={"month"}
              includes={[
                "Upto 2 Ad Types",
                "Upto 3 Accoutns",
                "Upto 3 Platforms",
                "Upto 4 users",
                "User Profile Mangement",
                "Ad Measurement",
                "Ad Intelligence",
              ]}
              excludes={[
                "Exports Reports",
                "Custom Reporting",
                "Sales Threshold Tracker",
                "Profitablilty Tracker",
              ]}
            />
            <PriceCard
              isdiscount={true}
              plan={"Intermediate"}
              upgradedescription={
                "Upgrade for additional User/AdType/Account/Platform"
              }
              upgradeprice={"40"}
              upgradediscount={"25"}
              description={
                "Best option for personal use & for your next project"
              }
              price={"149"}
              discountprice={"74"}
              duration={"month"}
              includes={[
                "Upto 2 Ad Types",
                "Upto 3 Accoutns",
                "Upto 3 Platforms",
                "Upto 4 users",
                "User Profile Mangement",
                "Ad Measurement",
                "Ad Intelligence",
                "Exports Reports",
                "Custom Reporting",
              ]}
              excludes={["Sales Threshold Tracker", "Profitablilty Tracker"]}
            />
            <PriceCard
              isdiscount={true}
              upgradedescription={
                "Upgrade for additional User/AdType/Account/Platform"
              }
              upgradeprice={"60"}
              upgradediscount={"30"}
              plan={"Advance"}
              description={
                "Best option for personal use & for your next project"
              }
              price={"199"}
              discountprice={"99"}
              duration={"month"}
              includes={[
                "Upto 2 Ad Types",
                "Upto 3 Accoutns",
                "Upto 3 Platforms",
                "Upto 4 users",
                "User Profile Mangement",
                "Ad Measurement",
                "Ad Intelligence",
                "Exports Reports",
                "Custom Reporting",
                "Sales Threshold Tracker",
                "Profitablilty Tracker",
              ]}
              excludes={[]}
            />
            <PriceCard
              isdiscount={false}
              plan={"Enterprise"}
              description={
                "Best option for personal use & for your next project"
              }
              upgradedescription={
                "Upgrade your plan for additional 5 User in Enterprise."
              }
              price={"999"}
              //   discountprice={"99"}
              upgradediscount={"299"}
              duration={"month"}
              includes={[
                "Upto 2 Ad Types",
                "Unlimited accounts",
                "Ad Measurements",
                "Upto 10 users",
                "Ad Intelligence",
                "User Profile Management",
                "Export Reports",
                "Custom Reporting",
                "Sales Threshold Tracker",
                "Profitablilty Tracker",
                "Dedicated Tech Support",
              ]}
              excludes={[]}
            />
            {/* <!-- Pricing Card --> */}

            {/* <!-- Pricing Card --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
