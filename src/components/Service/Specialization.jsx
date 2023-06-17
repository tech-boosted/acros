import React from 'react';

const Specialization = () => {
    return (
        <div className="w-screen text-center text-desc-custom bg-[#e2e2e2] my-10 px-[5%] py-20">

            <h2 className="md:text-title-large text-title-custom-mv mb-4 font-satoshi-bold">
                Specialization
            </h2>
            <p className="mb-12 font-satoshi-medium">Unleashing your brand potential
                <br />
                Our team has extensive experience in building and optimizing e-commerce<br /> advertising to drive sales and increase revenue.
            </p>

            <div className='flex flex-row grid grid-cols-4 gap-8'>
                <div className=" bg-black rounded-[15px] h-[450px] flex flex-col justify-end">
                    <div className="text-white ">
                        PPC Ads
                    </div>
                    <p className="text-white">Hello</p>
                </div>
                <div className=" bg-black rounded-[15px] h-[450px] mt-24 ">
                    <div className="">
                        PPC Ads
                    </div>

                </div>
                <div className=" bg-black rounded-[15px] h-[450px] mt-14 ">

                </div>
                <div className=" bg-black rounded-[15px] h-[450px] ">

                </div>
            </div>
        </div>
    )
}

export default Specialization;