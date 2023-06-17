import React, { useEffect, useState } from "react";
import { postMiddleware } from "../../middleware";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../config/firebase";
import { useRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Section4 = () => {
  const [formData, setFormData] = useState({
    category: "Career",
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
  const [formError, setFormError] = useState("");
  const [open, setOpen] = React.useState(false);
  const [progresspercent, setProgresspercent] = useState(0);
  const [disable, setDisable] = useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const fileInputRef = useRef(null);
  const inputNumberRef = useRef(null);

  const handleFileChange = (e) => {
    setDisable(true);
    const file = e.target?.files[0];

    if (!file) {
      alert("Error while uploading photo");
      return;
    }

    const storageRef = ref(storage, `resume/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, ["file"]: downloadURL });
          setDisable(false);
        });
      }
    );
  };

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
        category: "Career",
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
      if (fileInputRef.current ) {
        fileInputRef.current.value = null;
      }
      if(inputNumberRef.current){
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

    return errors;
  };

  return (
    <div className="w-screen">
      <div className="flex w-[92%] rounded-[30px] my-10  h-fit mx-auto  gap-4  items-center bg-[#e2e2e2]">
      <div className=" text-start my-10 w-[55%] px-16">
          <h2 className="text-left text-title-large font-satoshi-bold "> 
            Help Us Know You Better
          </h2>
          <p className="text-subtitle-custom-mv md:text-subtitle-custom font-satoshi-medium mb-10 mt-2">
            If you are as passionate as our team of enthusiasts, you have <br />{" "}
            come to the right place.
          </p>

          <p className="text-red-500 mb-4">{formError.main}</p>

          <div className="h-fit grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-4 md:gap-y-12">
            <input
              type="text"
              name="name"
              id=""
              onChange={(e) => handleChange(e)}
              placeholder="*Your Name"
              value={formData.name}
              className="w-full bg-inherit focus:outline-none px-4 py-2 md:my-0 my-2"
            />

            <input
              type="text"
              name="email"
              id=""
              onChange={(e) => handleChange(e)}
              value={formData.email}
              placeholder="*Email"
              className="w-full bg-inherit focus:outline-none px-4 py-2 md:my-0 my-2"
            />
            <input
              type="number"
              name="phoneNumber"
              onChange={(e) => handleChange(e)}
              ref={inputNumberRef}
              id=""
              value={formData.phoneNumber}
              placeholder="*Phone Number"
              className="w-full bg-inherit focus:outline-none px-4 py-2 md:my-0 my-2"
            />
            <input
              type="text"
              name="city"
              onChange={(e) => handleChange(e)}
              id=""
              value={formData.city}
              placeholder="*City"
              className="w-full bg-inherit focus:outline-none px-4 py-2 md:my-0 my-2"
            />
            <input
              type="text"
              name="qualification"
              onChange={(e) => handleChange(e)}
              id=""
              value={formData.qualification}
              placeholder="*Qualification"
              className="w-full bg-inherit focus:outline-none px-4 py-2 md:my-0 my-2"
            />
            <select
              name="position"
              id=""
              onChange={(e) => handleChange(e)}
              placeholder="*Select Position"
              value={formData.position}
              required
              className="w-full border bg-white text-gray-700 focus:outline-none k px-4 py-2 md:my-0 my-2"
            >
              <option value="">-- *Select Position</option>
              <option value="PPC Specialist">PPC Specialist</option>
              <option value="DSP Specialist">DSP Specialist</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Search Advertising Manager">
                Search Advertising Manager
              </option>
            </select>
            <input
              type="number"
              name="experience"
              id=""
              value={formData.experience}
              onChange={(e) => handleChange(e)}
              placeholder="*Years of Experience"
              className="w-full bg-inherit focus:outline-none px-4 py-2 md:my-0 my-2"
            />
            <input
              type="file"
              name="imgSrc"
              onChange={(e) => handleFileChange(e)}
              ref={fileInputRef}
              id=""
              multiple
              accept="image/*"
              className=" w-full  focus:outline-none px-4 py-2 md:my-0 my-2"
            />

            {!disable && (
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="my-10 col-span-2 w-[200px] py-3 md:py-2 border-2 border-primary rounded-[30px] md:h-[45px] mb-5 block mx-auto "
              >
                Submit
              </button>
            )}
            {disable && (
              <button className="my-10 col-span-2 w-[200px] py-3 md:py-2 border-2 border-primary rounded-[30px] md:h-[45px] mb-5 block mx-auto ">
                Uploading file {progresspercent} %
              </button>
            )}
          </div>
        </div>
        <div className="w-[45%] flex items-end self-end ">
          <img
            src="https://www.charle.co.uk/media/images/getintouchphones.png"
            alt=""
            className="object-contain w-full "
          />
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

export default Section4;
