import React from "react";
const Section1 = () => {
  return (
    <div className="w-screen h-[80vh] flex items-end justify-center bg-cover bg-[url('https://res.cloudinary.com/dfwvu60ef/image/upload/v1686093632/bkg_1_bjjncw.jpg')] ">

      <div className=" w-[60%]   my-auto h-[60%] justify-center gap-8 flex-col flex items-center">

        <p className="text-title-extra-large font-satoshi-bold">We are {" "}
          <span className="bg-white">
            <span style={{color:'red', marginRight: '1px', display: 'inline-block'}}>&nbsp;</span>
            Acros
            <span style={{color:'red', marginRight: '1px', display: 'inline-block'}}>&nbsp;</span>
          </span>
        </p>
        <p className="font-satoshi-medium text-subtitle-custom leading-relaxed text-center">
          We are a team of ex-Amazon, Google and Meta executives who make a
          bigger impact in the e-commerce industry via thought
          leadership and client servicing. A proven leader in the industry that 
          believes in providing end-to-end advertising solutions for your
          business growth across multiple channels.
        </p>
      </div>



    </div>

  );
};

export default Section1;
