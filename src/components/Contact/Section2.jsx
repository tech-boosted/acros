import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { postMiddleware } from "../../middleware";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Section2 = () => {
  const inputNumberRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [formData, setFormData] = useState({
    category: "Contact-us",
    name: "",
    email: "",
    phoneNumber: null,
    city: "",
    qualification: "",
    position: "",
    experience: "",
    file: "",
    website: "",
    description: "",
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

  useEffect(() => {
    const callback = (res) => {
      setOpen(true);

      setFormData({
        category: "Contact-us",
        name: "",
        email: "",
        phoneNumber: null,
        city: "",
        qualification: "",
        position: "",
        experience: "",
        file: "",
        website: "",
        description: "",
      });
      if (inputNumberRef.current) {
        inputNumberRef.current.value = null;
      }
      setFormError({});
    };
    if (Object.keys(formError).length === 0) {
      if (formData.email.length !== 0) {
        postMiddleware("/form/new", formData, callback, true);
      }
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
    if (!values.website) {
      errors.main = "*Please fill all the required fields";
    }
    if (!values.description) {
      errors.main = "*Please fill all the required fields";
    }

    return errors;
  };

  return (
    <div className="w-screen">
      <div className="flex w-[92%] rounded-[30px] my-10  h-fit mx-auto  gap-4  items-center bg-[#e2e2e2]">
        <div className=" text-start my-10 w-[55%] px-16">
          <h2 className="text-title-large font-satoshi-bold">
            {" "}
            Alternatively
          </h2>
          <p className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-medium mt-2 mb-10">
            Connect with us by simply filling a form. This will allow us to know
            more about yourself and your brand.
          </p>

          <div className="h-fit grid md:grid-cols-2 grid-cols-1 gap-4 my-10 gap-y-8 ">
            <p className="text-red-600 md:col-span-2 text-start">
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
              className="py-3 px-5 focus:outline-none border-gray-800 bg-inherit"
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
              className="py-3 px-5 focus:outline-none border-gray-800 bg-inherit"
            />
            <input
              type="number"
              name="phoneNumber"
              value={formData.phonNumber}
              id=""
              ref={inputNumberRef}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="*Phone Number"
              className="py-3 px-5 focus:outline-none border-gray-800 bg-inherit"
            />

            <input
              type="text"
              name="website"
              id=""
              value={formData.website}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Website (if available)"
              className="py-3 px-5 focus:outline-none border-gray-800 bg-inherit"
            />
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Tell us about your brand"
              value={formData.description}
              className="py-3 px-5  h-16 focus:outline-none border-gray-800 md:col-span-2 bg-inherit"
            ></textarea>

            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="md:col-span-2 w-fit m-auto mt-4 rounded-full bg-purple-500 px-10 py-3 text-base font-medium text-white transition duration-200 hover:bg-purple-600 active:bg-purple-700 block"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="w-[45%] flex items-end self-end ">
          <img
            src="https://www.charle.co.uk/media/images/getintouchphones.png"
            alt=""
            className="object-contain w-full "
          />
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        key={"top" + "right"}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Your response has been submitted
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Section2;
