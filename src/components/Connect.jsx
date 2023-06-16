import React, { useState } from "react";
import { useEffect } from "react";
import { postMiddleware } from "../middleware";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Connect = () => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    category: "General",
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    qualification: "",
    type: "General",
    position: "",
    experience: "",
    file: "",
    website: "",
    description: "",
  });
  const [formError, setFormError] = useState({});

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

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
        category: "General",
        name: "",
        email: "",
        phoneNumber: "",
        city: "",
        qualification: "",
        position: "",
        experience: "",
        file: "",
        website: "",
        description: "",
      });
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

    return errors;
  };

  return (
    <div className="w-screen text-desc-customv">
      <div className="flex w-[92%] mx-auto rounded-[30px] mb-10 h-fit px-16 py-16 gap-4  items-center bg-[#e2e2e2]">
        <div className=" text-start  w-[60%]">
          <h2 className="md:text-title-custom text-title-custom-mv font-satoshi-bold mb-6">
            Let's talk
          </h2>
          <p className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-medium mb-10">
            Schedule a Meeting with the Experts
          </p>
          <p className="text-red-500">{formError.main}</p>
          <div className="md:flex flex-cols justify-between">
            <div className="h-fit w-full grid md:grid-cols-3 grid-cols-1 gap-4 my-4 gap-y-8 ">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => {
                  handleChange(e);
                }}
                id=""
                placeholder="*Your Name"
                className="w-full bg-inherit px-4 py-2 md:my-0 my-2"
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
                className="w-full bg-inherit px-4 py-2 md:my-0 my-2"
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
                className="w-full bg-inherit px-4 py-2 md:my-0 my-2"
              />
              <div>
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  className="w-[200px] py-3 md:py-2 border-2 border-primary rounded-[30px] md:h-[45px] mb-5 m-auto "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[40%]">
          {/* <img
          src="https://res.cloudinary.com/dfwvu60ef/image/upload/v1686098723/flat-design-illustration-customer-support_23-2148887720-removebg-preview_fqoow7.png"
          alt=""
          className=""
        /> */}
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
    </div>
  );
};

export default Connect;
