import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    description: "",
    shortDescription: "",
    imgSrc: "",
    date: "",
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

      axios
        .post("http://localhost:3600/api/v1/resource/new", formData)
        .then((response) => {
          return response;
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log(formError);
    }
  }, [formError]);

  const validate = (values) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.title) {
      errors.main = "*Please fill all the required fields";
    }
    if (!values.description) {
      errors.main = "*Please fill all the required fields";
    }
    if (!values.shortDescription) {
      errors.main = "*Please fill all the required fields";
    }
    if (!values.date) {
      errors.main = "*Please fill all the required fields";
    }

    return errors;
  };

  return (
    <div>
      <div className="text-desc-custom">
        <h2 className="text-center text-title-custom-mv md:text-title-custom-mv font-satoshi-bold mt-10">
          Admin Portal
        </h2>
        <p className="text-red-500 mb-4">{formError.main}</p>

        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-12 gap-4 md:gap-y-12">
          <select
            name="type"
            id=""
            onChange={(e) => handleChange(e)}
            placeholder="*Select Category"
            required
            className="w-full border bg-white text-gray-700 border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
          >
            <option value="">-- *Select Category</option>
            <option value="Article">Article</option>
            <option value="Blog">Blog</option>
            <option value="Case Study">Case Study</option>
          </select>
          <input
            type="text"
            name="title"
            id=""
            onChange={(e) => handleChange(e)}
            placeholder="*Enter title"
            className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
          />
          <input
            type="text"
            name="date"
            onChange={(e) => handleChange(e)}
            id=""
            placeholder="*Date in MMM DD, YYYY format"
            className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
          />
          <textarea
            className="md:col-span-2 w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
            name="description"
            id=""
            value={formData.description}
            onChange={(e) => handleChange(e)}
            placeholder={"**Description"}
            cols="10"
            rows="5"
          >
            yoyo
          </textarea>
          <textarea
            className=" w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
            name="shortDescription"
            id=""
            value={formData.ShortDescription}
            onChange={(e) => handleChange(e)}
            placeholder="**Short Description"
            cols="10"
            rows="5"
          ></textarea>

          <input
            type="file"
            name="imgSrc"
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
    </div>
  );
};

export default Admin;
