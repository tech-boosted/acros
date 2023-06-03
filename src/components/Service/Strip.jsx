import React from "react";

const Strip = () => {
    const Logo1 = "https://res.cloudinary.com/dfwvu60ef/image/upload/v1685737101/unnamed-removebg-preview_u3b7py.png";
    const Logo2 = "https://b2292265.smushcdn.com/2292265/wp-content/uploads/2018/02/amazon-partner.png?lossy=1&strip=1&webp=1"
    const Logo3 = "https://www.prospectivemedia.co.uk/wp-content/uploads/2017/09/facebook-business.png"
    const Logo4 = "https://callservicefirst.com/wp-content/uploads/2014/06/LinkedIn-for-Businesses-1.png"
    const Logo5 = "https://assets.entrepreneur.com/static/1413842518-entrepreneur-logo.jpg"
  return (
    <div>
      <div className="my-10 md:h-[100px] w-full bg-white rounded-[30px] grid md:grid-cols-5 grid-cols-1  md:justify-center gap-8 px-5 items-center">
        <img
          src={Logo1}
          alt="clever click 360"
          className="h-[60px] object-contain block m-auto"
        />
        <img
          src={Logo2}
          alt="pie analysis"
          className=" block m-auto"
        />
        <img src={Logo3} alt="sidle" className="h-[60px] object-contain block m-auto" />
        <img src={Logo4} alt="tetramind" className="h-[50px] block m-auto" />
        <img src={Logo5} alt="wake" className="block m-auto" />
      </div>
    </div>
  );
};

export default Strip;
