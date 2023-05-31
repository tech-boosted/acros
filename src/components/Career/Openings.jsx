import * as React from "react";
import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from '@mui/icons-material'

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FiChevronDown } from "react-icons/fi";
import { Button } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `3px solid `,
  borderRight: `none`,
  borderLeft: "none",
  borderTop: "none",
  borderImageSlice: 1,
  borderImageSource:
    "linear-gradient(to left,lightBlue,blue,green,yellow,purple)",

  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <FiChevronDown className="text-[20px] font-satoshi-bold text-black" />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "white",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Openings() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (

    <div className="w-full my-10 h-fit p-5 flex flex-col items-center justify-center text-desc-custom">
      <div className="w-full my-10">
        <h2 className="md:text-title-custom text-title-custom-mv mb-10 text-left font-satoshi-bold">
          Learn About Us
        </h2>
        <div className="w-full text-right mb-10">
          <span>/about/</span>
          <p className="mt-6"> 
            We’re a group of passionate and creative individuals who are on a
            mission to make your life easier and <br /> more enjoyable. We
            believe in hard work, laughter, and a good cup of coffee (or tea, if
            that’s your <br /> thing). Get to know us better by checking out our
            story and our team. Let’s grow together!
          </p>
        </div>
      </div>

      <div className="w-full my-10">
        <h2 className="md:text-title-custom text-title-custom-mv mb-10 text-right font-satoshi-bold">
          Current Openings
        </h2>
        <div className="w-full text-left mb-10">
          <p>
            Explore our current job opportunities and join our team of <br />{" "}
            passionate professionals.
          </p>
        </div>
      </div>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="grid grid-cols-6 my-4 items-center">
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #AA00FF 30%, #49219C 90%)",
                borderRadius: "30px",
                border: 0,
                color: "white",
                height: "48px",
                padding: "0 30px",
                boxShadow: "0 3px 5px 2px rgba(132, 140, 207, 0.3)",
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0 6px 10px 4px rgba(82, 78, 132, 0.3)",
                },
              }}
            >
              Advertising
            </Button>
            <div className="col-span-3 flex items-center justify-center md:text-subtitle-custom text-subtitle-custom-mv font-satoshi-bold">
              Search Advertising Manager
            </div>
            <div className="col-span-2 text-desc-custom">
              This position requires the candidate to have a minimum of 6 years
              of expert level experience in strategizing and execution of PPC
              campaigns in an Amazon Advertising Agency environment.{" "}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <h2 className="bold text-desc-custom text-start mb-10 font-satoshi-bold">
              /Position Description/
            </h2>
            <p className="text-desc-custom text-start mb-10 font-satoshi-medium">
              Formulate, strategize, and initiate growth-oriented advertising
              plans for e-commerce businesses.
            </p>

            <ul className="mb-10 list-disc px-5">
              <li>
                Expert level hands on expertise of PPC Advertising in a Search
                or Marketplace environment.
              </li>
              <li>
                Intermediate level hands on expertise in supporting Advertising
                disciplines such as Social Ads, DSP Ads, Native Ads, and e-mail
                advertising)
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
                Analyze the effectiveness of Advertising (campaigns, Ad groups,
                targeting, matches, SKU etc).
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
                Keep abreast of new social updates, policies, Market trends and
                implement the learnings accordingly.
              </li>
            </ul>

            <h2 className="font-thin text-desc-custom text-start mb-10 font-satoshi-bold">
              /Responsibility/
            </h2>
            <p className="text-desc-custom text-start mb-10 font-satoshi-medium">
              Formulate, strategize, and initiate growth-oriented advertising
              plans for e-commerce businesses.
            </p>

            <ul className="mb-10 list-disc px-5">
              <li className="list-disc">
                Expert level hands on expertise of PPC Advertising in a Search
                or Marketplace environment.
              </li>
              <li>
                Intermediate level hands on expertise in supporting Advertising
                disciplines such as Social Ads, DSP Ads, Native Ads, and e-mail
                advertising)
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
                Analyze the effectiveness of Advertising (campaigns, Ad groups,
                targeting, matches, SKU etc).
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
                Keep abreast of new social updates, policies, Market trends and
                implement the learnings accordingly.
              </li>
            </ul>
          </div>{" "}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="grid grid-cols-6 my-4 items-center">
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #AA00FF 30%, #49219C 90%)",
                borderRadius: "30px",
                border: 0,
                color: "white",
                height: "48px",
                padding: "0 30px",
                boxShadow: "0 3px 5px 2px rgba(132, 140, 207, 0.3)",
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0 6px 10px 4px rgba(82, 78, 132, 0.3)",
                },
              }}
            >
              Advertising
            </Button>
            <div className="col-span-3 flex items-center justify-center md:text-subtitle-custom text-subtitle-custom-mv font-satoshi-bold">
              Search Advertising Manager
            </div>
            <div className="col-span-2 text-desc-custom">
              This position requires the candidate to have a minimum of 6 years
              of expert level experience in strategizing and execution of PPC
              campaigns in an Amazon Advertising Agency environment.{" "}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <h2 className="bold text-desc-custom text-start mb-10 font-satoshi-bold">
              /Position Description/
            </h2>
            <p className="text-desc-custom text-start mb-10 font-satoshi-medium">
              Formulate, strategize, and initiate growth-oriented advertising
              plans for e-commerce businesses.
            </p>

            <ul className="mb-10 list-disc px-5">
              <li>
                Expert level hands on expertise of PPC Advertising in a Search
                or Marketplace environment.
              </li>
              <li>
                Intermediate level hands on expertise in supporting Advertising
                disciplines such as Social Ads, DSP Ads, Native Ads, and e-mail
                advertising)
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
                Analyze the effectiveness of Advertising (campaigns, Ad groups,
                targeting, matches, SKU etc).
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
                Keep abreast of new social updates, policies, Market trends and
                implement the learnings accordingly.
              </li>
            </ul>

            <h2 className="font-thin text-desc-custom text-start mb-10 font-satoshi-bold">
              /Responsibility/
            </h2>
            <p className="text-desc-custom text-start mb-10 font-satoshi-medium">
              Formulate, strategize, and initiate growth-oriented advertising
              plans for e-commerce businesses.
            </p>

            <ul className="mb-10 list-disc px-5">
              <li className="list-disc">
                Expert level hands on expertise of PPC Advertising in a Search
                or Marketplace environment.
              </li>
              <li>
                Intermediate level hands on expertise in supporting Advertising
                disciplines such as Social Ads, DSP Ads, Native Ads, and e-mail
                advertising)
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
                Analyze the effectiveness of Advertising (campaigns, Ad groups,
                targeting, matches, SKU etc).
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
                Keep abreast of new social updates, policies, Market trends and
                implement the learnings accordingly.
              </li>
            </ul>
          </div>{" "}
        </AccordionDetails>
      </Accordion>

      
    </div>
  );
}
