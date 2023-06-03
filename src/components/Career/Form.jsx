import React, { useEffect, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    qualification: "",
    position: "",
    experience: "",
    file: "",
    website:"",
    description:""
  });
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormError(errors);
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0) {
      // console.log(formData);
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

  return (
    <div className="text-desc-custom">
      <h2 className="text-center text-title-custom-mv md:text-title-custom-mv font-satoshi-bold mt-10">
        Help Us Know You Better
      </h2>
      <p className="mt-2 mb-10">
        If you are as passionate as our team of enthusiasts, you have <br />{" "}
        come to the right place.
      </p>
      <p className="text-red-500 mb-4">{formError.main}</p>

      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-12 gap-4 md:gap-y-12">
        <input
          type="text"
          name="name"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="*Your Name"
          className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
        />
        <input
          type="text"
          name="email"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="*Email"
          className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
        />
        <input
          type="number"
          name="phoneNumber"
          onChange={(e) => handleChange(e)}
          id=""
          placeholder="*Phone Number"
          className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
        />
        <input
          type="text"
          name="city"
          onChange={(e) => handleChange(e)}
          id=""
          placeholder="*City"
          className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
        />
        <input
          type="text"
          name="qualification"
          onChange={(e) => handleChange(e)}
          id=""
          placeholder="*Qualification"
          className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
        />
        <select
          name="position"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="*Select Position"
          required
          className="w-full border bg-white text-gray-700 border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
        >
          <option value="">-- *Select Position</option>
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
        </select>
        <input
          type="number"
          name="experience"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="*Years of Experience"
          className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
        />
        <input
          type="file"
          name="file"
          onChange={(e) => handleChange(e)}
          id=""
          accept="image/png,image/jpg , image/jpeg"
          className="w-full border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
        />
      </div>

      <button
        onClick={(e) => {
          handleSubmit(e);
        }}
        className="my-10 w-[200px] py-3 md:py-2 border-2 border-primary rounded-[30px] md:h-[45px] mb-5 block mx-auto "
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
