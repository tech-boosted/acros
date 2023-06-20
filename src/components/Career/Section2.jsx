import * as React from "react";
import { styled } from "@mui/material/styles";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { FiChevronDown } from "react-icons/fi";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { getMiddleware } from "../../middleware";
import strings from "../../strings";
const parse = require("html-react-parser");

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

export default function Section2() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [careerOpenings, setCareerOpenings] = useState([]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    const callback = (res) => {
      setCareerOpenings(res.data.careers);
    };
    getMiddleware("/career/all", callback, false);
  }, []);

  return (
    <div className="w-screen mt-10  h-fit  flex flex-col items-center justify-center md:text-desc-basic text-desc-basic-mv ">
      <div className="w-full my-10 px-[10%] py-20 ">
        <p className=" font-satoshi-bold md:text-title-basic text-title-basic-mv tracking-tight leading-snug">
         {strings.CAREER_SECTION_2_DESCRIPTION}
        </p>
      </div>

      <div className="w-screen mt-10 px-[10%] py-20 bg-[#e2e2e2]">
        <h2 className="md:text-title-large text-title-large-mv mb-10 text-left font-satoshi-bold ">
          {strings.CAREER_SECTION_3_TITLE}
        </h2>

        <div className="w-full  font-satoshi-regular text-left mb-10">
          <p>
          {strings.CAREER_SECTION_3_DESCRIPTION}
          </p>
        </div>

        {careerOpenings.map((item, index) => (
          <Accordion
            expanded={expanded === item._id}
            onChange={handleChange(item._id)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <div
                className="grid md:grid-cols-6 grid-cols-1 my-4 items-center"
                key={index}
              >
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(45deg, #AA00FF 30%, #49219C 90%)",
                    borderRadius: "30px",
                    border: 0,
                    color: "white",
                    height: "48px",
                    padding: "0 10px",
                    boxShadow: "0 3px 5px 2px rgba(132, 140, 207, 0.3)",
                    transition: "box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 6px 10px 4px rgba(82, 78, 132, 0.3)",
                    },
                  }}
                >
                  {item.category}
                </Button>
                <div className="md:col-span-3 flex items-center md:my-0 my-4 justify-center md:text-subtitle-basic text-subtitle-basic-mv font-satoshi-bold">
                  {item.position}
                </div>
                <div className="md:col-span-2 ">
                  {item.shortDescription}
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>{parse(item.description)}</AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
