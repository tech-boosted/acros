import React, { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState("h-0 px-[10px]");
  const [showIcon,setShowIcon] = useState(false);

  const handleOpen = () => {
    if (open === "h-0 px-[10px]") { 
      setOpen("h-fit p-[10px]");
      setShowIcon(true);
    } else {
      setOpen("h-0 px-[10px]");
      setShowIcon(false);

    }
  };
  return (
    <div>
      <div className="accordion w-[80%]">
        <div className="contentBx relative mx-[10px] my-[20px]">
          <div
            className="label p-[10px] bg-[#2694af] cursor-pointer flex justify-between text-white rounded-lg"
            onClick={() => {
              handleOpen();
            }}
          >
            <div>Item 1</div>
            <div>
                {}
            </div>
          </div>
          <div
            className={` ${open} bg-white overflow-hidden transition-all ease-out `}
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
              placeat ad blanditiis nisi, sed at molestiae. Totam placeat cumque
              at, dolor reiciendis dignissimos maxime. Facilis officia
              laboriosam hic distinctio magnam.
            </p>
          </div>
        </div>
        <div className="contentBx relative mx-[10px] my-[20px]">
          <div className="label p-[10px] bg-[#2694af] cursor-pointer ">
            Item 2
          </div>
          <div className="content relative h-0 bg-white overflow-hidden duration-150 overflow-y-auto">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
              placeat ad blanditiis nisi, sed at molestiae. Totam placeat cumque
              at, dolor reiciendis dignissimos maxime. Facilis officia
              laboriosam hic distinctio magnam.
            </p>
          </div>
        </div>
        <div className="contentBx relative mx-[10px] my-[20px]">
          <div className="label p-[10px] bg-[#2694af] cursor-pointer ">
            Item 3
          </div>
          <div className="content relative h-0 bg-white overflow-hidden duration-150 overflow-y-auto">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
              placeat ad blanditiis nisi, sed at molestiae. Totam placeat cumque
              at, dolor reiciendis dignissimos maxime. Facilis officia
              laboriosam hic distinctio magnam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
