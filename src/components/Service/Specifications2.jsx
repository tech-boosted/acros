import React, { useState } from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import {  BsArrowUpRight } from "react-icons/bs";
import { agencySpecificationsArr } from "../../utils/Variable";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `3px solid `,
  borderRight: `none`,
  borderLeft: "none",
  borderTop: "none",
  borderImageSlice: 1,
  borderImageSource:
    "linear-gradient(to left,lightgreen,lightgreen,blue,lightBlue)",

  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <BsArrowUpRight className="text-[24px] font-satoshi-bold text-blue-700" />
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

const Specifications = () => {
  const [expanded, setExpanded] = React.useState("PPC Ads");
  const[data,setData] = useState("A powerful advertising program for sellers & vendors that boosts visibility and drive sales with PPC campaigns. Customisable ad formats, budgets and real-time tracking to help you achieve your advertising goals. Grow your business on Amazon’s platform. ")

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <div className="flex justify-around  h-fit">
        <div className="w-[60%] h-fit">
          <div className="w-full md:text-desc-basic text-desc-basic-mv  mt-20 mb-10">
            <h2 className="md:text-title-basic text-title-basic-mv mb-4 font-satoshi-bold">
              Specialization
            </h2>
            <p className="mb-4">Unleashing your brand potential</p>
            <p className="">
              Our team has extensive experience in building and optimizing e-{" "}
              <br /> commerce advertising to drive sales and increase revenue.
            </p>

            <div className="my-10 mb-20">
              {agencySpecificationsArr.map((item, index) => (
                <Accordion
                  expanded={expanded === item.key}
                  onChange={handleChange(item.key)}
                  key={index}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <div className="grid h-fit md:grid-cols-2 grid-cols-1 my-4 md:pr-10 gap-0 items-center text-start">
                      <div className="md:text-subtitle-basic text-subtitle-basic-mv font-satoshi-bold  ">
                        {item.key}
                      </div>
                      <div className="   md:text-desc-basic text-desc-basic-mv  ">
                        {item.description}
                      </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* <Tabs arr={item.capabilities} /> */}
                    <div>
                      <h2 className="text-right my-4  md:text-subtitle-basic text-subtitle-basic-mv font-satoshi-bold">
                        Capabilities
                      </h2>
                        <div className="md:w-[50%] w-full mb-4 flex flex-col justify-start items-end">
                          {item.capabilities.map((item, index) => (
                            <div
                              key={index}
                              className="cursor-pointer flex md:w-[80%] w-full py-3   px-5   border-blue-700 border-b-[2px] items-center justify-between"
                              onClick={() => setData(item.desc)}
                            >
                              <p className="font-satoshi-bold">{item.key}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[25%] my-auto h-[350px] bg-black  text-white drop-shadow-3xl rounded-[30px] p-10 transition-all ease-in-out hover:scale-105">
            {data}
        </div>
      </div>
    </div>
  );
};

export default Specifications;
