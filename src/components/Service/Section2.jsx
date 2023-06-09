import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { styled } from "@mui/material/styles";
import { agencySpecificationsArr } from "../../utils/Variable";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Tabs from "../../utils/Tabs";
import strings from "../../strings";

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

const Section2 = () => {
  const [expanded, setExpanded] = React.useState("PPC Ads");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="w-screen md:text-desc-basic text-desc-basic-mv bg-[#e2e2e2] mt-10 px-[10%] py-20">
      <h2 className="md:text-title-basic text-title-basic-mv mb-4 font-satoshi-bold">
        {strings.AGENCY_SECTION_3_TITLE}{" "}
      </h2>
      <p className="mb-12 font-satoshi-medium">
        Unleashing your brand potential
        <br />
        {strings.AGENCY_SECTION_3_DESCRIPTION}{" "}
      </p>

      <div className="py-8">
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
              <div className="grid md:grid-cols-2 grid-cols-1 my-4 md:pr-10 gap-0 items-center text-start">
                <div className="  md:text-subtitle-basic text-subtitle-basic-mv font-satoshi-bold  ">
                  {item.key}
                </div>
                <div className="   ">{item.description}</div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Tabs arr={item.capabilities} />
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Section2;
