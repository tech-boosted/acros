import React from "react";
import strings from "../../strings";
const Section1 = () => {
  return (
    <div className="w-screen h-fit flex items-end justify-center bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/acros-resources.appspot.com/o/Acros-files%2Fblue%20background.jpg?alt=media&token=2e85e984-90f7-43c4-893a-6a00910e9284')] ">
      <div className=" md:w-[60%] w-full px-10    my-auto h-[60%] justify-center gap-8 flex-col flex items-center pt-36 mb-28">
        <p className="md:text-title-extra-large text-title-extra-large-mv font-satoshi-bold">
          We are{" "}
          <div className="bg-white">
            <span
              style={{
                color: "red",
                marginRight: "1px",
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
            Acros
            <span
              style={{
                color: "red",
                marginRight: "1px",
                display: "inline-block",
              }}
            >
              &nbsp;
            </span>
          </div>
        </p>
        <p className="font-satoshi-medium md:text-subtitle-basic text-subtitle-basic-mv leading-relaxed text-center">
          {strings.ABOUT_SECTION_1_DESCRIPTION}
        </p>
      </div>
    </div>
  );
};

export default Section1;
