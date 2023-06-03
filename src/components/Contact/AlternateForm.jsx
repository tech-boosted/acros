import React, { useState } from "react";

const AlternateForm = () => {
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
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormError(errors);
  };

  // useEffect(() => {
  //   if (Object.keys(formError).length === 0) {
  //     console.log(formData);
  //   } else {
  //     console.log(formError);
  //   }
  // }, [formError]);

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
    if (!values.website) {
      errors.main = "*Please fill all the required fields";
    }
    if (!values.description) {
      errors.main = "*Please fill all the required fields";
    }

    return errors;
  };

  return (
    <div>
      <div className="text-center my-10 w-full">
        <h2 className="text-title-custom-mv md:text-title-custom font-satoshi-bold">
          {" "}
          Alternatively
        </h2>
        <p className="text-subtitle-custom-mv md:text-subtitle-custom">
          Connect with us by simply filling a form. This will allow us to know
          more about yourself and your brand.
        </p>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-10 gap-y-8">
          <p className="text-red-600 md:col-span-3 text-start">
            {" "}
            {formError.main}
          </p>

          <input
            type="text"
            name="name"
            value={formData.name}
            id=""
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="*Your Name"
            className="py-3 px-5 border-b focus:outline-none border-gray-800 "
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            id=""
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="*Email"
            className="py-3 px-5 border-b focus:outline-none border-gray-800 "
          />
          <input
            type="number"
            name="phoneNumber"
            value={formData.phonNumber}
            id=""
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="*Phone Number"
            className="py-3 px-5 border-b focus:outline-none border-gray-800 "
          />
          <textarea
            name="description"
            id=""
            cols="30"
            rows="1"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Tell us about your brand"
            value={formData.description}
            className="py-3 px-5 border-b focus:outline-none border-gray-800 md:col-span-2 "
          ></textarea>
          <input
            type="text"
            name="website"
            id=""
            value={formData.website}
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Website (if available)"
            className="py-3 px-5 border-b focus:outline-none border-gray-800 "
          />

          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="md:col-span-3 w-fit m-auto my-8 rounded-full bg-purple-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-purple-600 active:bg-purple-700 block"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlternateForm;
