import React, { useEffect, useState } from "react";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    description: "",
    website: "",
  });
  const [formError, setFormError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormError(errors);
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0) {
      console.log(formData);
    } else {
      console.log(formError);
    }
  }, [formError]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.main = "*Please fill all the required fields";
    } else if (!regex.test(values.email)) {
      errors.main = "*Please enter valid email";
    }
    if (!values.name) {
      errors.main = "*Please fill all the required fields";
    }
    if (!values.phoneNumber) {
      errors.main = "*Please fill all the required fields";
    }
 

    return errors;
  };


  const dj = ()=>{
    const sanju = "sharm ";
    const satish = "sharma";
    const dabbu = "nisha";
    console.log(dabbu);
  }
  dj();



  return (
    <div className="w-full text-desc-custom">
      <h2 className="md:text-title-custom text-title-custom-mv font-satoshi-bold my-6">
        Let's talk
      </h2>
      <p className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-medium mb-10">
        Schedule a Meeting with the Experts
      </p>
      <div className="md:flex flex-cols justify-between">
        <p className="text-red-500">{formError.main}</p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 w-full">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => {
              handleChange(e);
            }}

            id=""
            placeholder="*Your Name"
            className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              handleChange(e);
            }}

            id=""
            placeholder="*Email"
            className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
          />
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => {
              handleChange(e);
            }}

            id=""
            placeholder="*Phone Number"
            className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
          />
          <div>
            <button onClick={(e)=>{handleSubmit(e)}} className="w-[200px] py-3 md:py-2 border-2 border-primary rounded-[30px] md:h-[45px] mb-5 m-auto ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
