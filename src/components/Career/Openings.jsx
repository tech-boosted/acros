import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Openings = () => {
  return (
    <div className="w-full my-10 h-fit p-5 flex flex-col items-center justify-center text-desc-custom">
      <div className="w-full my-10">
        <h2 className="md:text-title-custom text-title-custom-mv mb-10 text-left">Learn About Us</h2>
        <div className="w-full text-right mb-10">
          <span>/about/</span>
          <p>
            We’re a group of passionate and creative individuals who are on a
            mission to make your life easier and <br /> more enjoyable. We
            believe in hard work, laughter, and a good cup of coffee (or tea, if
            that’s your <br /> thing). Get to know us better by checking out our
            story and our team. Let’s grow together!
          </p>
        </div>
      </div>

      <div className="w-full my-10">
        <h2 className="md:text-title-custom text-title-custom-mv mb-10 text-right">Current Openings</h2>
        <div className="w-full text-left mb-10">
          <p>
            Explore our current job opportunities and join our team of <br />{" "}
            passionate professionals.
          </p>
        </div>
      </div>

      <Accordion defaultIndex={[0]} allowMultiple allowToggle width={"80vw"}>
        <AccordionItem>
          <h2>
            <AccordionButton py={"10px"} >
              <Box as={"span"} gap={"4"} className="flex items-center md:flex-row flex-col">
                <button className="rounded-full h-[50px] bg-purple-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:text=black hover:bg-purple-600 active:bg-purple-700 dark:bg-purple-400 dark:text-white dark:hover:bg-purple-300 dark:active:bg-purple-200">
                  Advertising
                </button>
                <p className="md:w-[50%] w-full text-subtitle-custom-mv md:text-subtitle-custom">
                  Search Advertising Manager
                </p>

                <p className="md:w-[30%] w-full text-start">
                  This position requires the candidate to have a minimum of 6{" "}
                  years of expert level experience in strategizing and execution{" "}
                  of PPC campaigns in an Amazon Advertising Agency environment.{" "}
                </p>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} borderBottom={"2px"} borderColor={"Pink"}>
            <div>
              <h2 className="bold text-desc-custom text-start mb-10">
                /Position Description/
              </h2>
              <p className="text-desc-custom text-start mb-10">
                Formulate, strategize, and initiate growth-oriented advertising
                plans for e-commerce businesses.
              </p>

              <ul className="mb-10 list-disc px-5">
                <li>
                  Expert level hands on expertise of PPC Advertising in a Search
                  or Marketplace environment.
                </li>
                <li>
                  Intermediate level hands on expertise in supporting
                  Advertising disciplines such as Social Ads, DSP Ads, Native
                  Ads, and e-mail advertising)
                </li>
                <li>
                  Create, launch, traffic and Optimise campaigns on marketplaces
                  and/or Search platforms.
                </li>
                <li>
                  Build, traffic, pace, optimize, split, and cycle campaigns
                  effectively.
                </li>

                <li>
                  Analyze the effectiveness of Advertising (campaigns, Ad
                  groups, targeting, matches, SKU etc).
                </li>
                <li>Set up a list of KPIs to track on a regular basis.</li>
                <li>
                  Troubleshooting and creating course correction action plans.
                </li>
                <li>
                  Factor business indicators into Advertising strategy and
                  execution.
                </li>
                <li>
                  Keep abreast of new social updates, policies, Market trends
                  and implement the learnings accordingly.
                </li>
              </ul>

              <h2 className="font-thin text-desc-custom text-start mb-10">
                /Responsibility/
              </h2>
              <p className="text-desc-custom text-start mb-10">
                Formulate, strategize, and initiate growth-oriented advertising
                plans for e-commerce businesses.
              </p>

              <ul className="mb-10 list-disc px-5">
                <li className="list-disc">
                  Expert level hands on expertise of PPC Advertising in a Search
                  or Marketplace environment.
                </li>
                <li>
                  Intermediate level hands on expertise in supporting
                  Advertising disciplines such as Social Ads, DSP Ads, Native
                  Ads, and e-mail advertising)
                </li>
                <li>
                  Create, launch, traffic and Optimise campaigns on marketplaces
                  and/or Search platforms.
                </li>
                <li>
                  Build, traffic, pace, optimize, split, and cycle campaigns
                  effectively.
                </li>

                <li>
                  Analyze the effectiveness of Advertising (campaigns, Ad
                  groups, targeting, matches, SKU etc).
                </li>
                <li>Set up a list of KPIs to track on a regular basis.</li>
                <li>
                  Troubleshooting and creating course correction action plans.
                </li>
                <li>
                  Factor business indicators into Advertising strategy and
                  execution.
                </li>
                <li>
                  Keep abreast of new social updates, policies, Market trends
                  and implement the learnings accordingly.
                </li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>
        

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Openings;
