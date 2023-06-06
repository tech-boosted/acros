import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { storage } from "../../config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { postMiddleware } from "../../middleware";

const ResourceNewForm = () => {
  const [disable, setDisable] = useState(false);
  const [progresspercent, setProgresspercent] = useState(0);

  const [formData, setFormData] = useState({
    type: "",
    description: "",
    shortDescription: "",
    imgSrc: "",
    title: "",
    date: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileChange = (e) => {
    setDisable(true);
    const file = e.target?.files[0];

    if (!file) {
      alert("Error while uploading photo");
      return;
    }

    const storageRef = ref(storage, `files/${file.name}`);
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
          setFormData({ ...formData, ["imgSrc"]: downloadURL });
          setDisable(false);
        });
      }
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const callback = (res) => {
      alert(res.data.message);
    };
    postMiddleware("/resource/new", formData, callback, true);
  
    navigate(-1);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-title-custom font-satoshi-bold my-10">
        Create new Resource
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-4 md:gap-y-12">
        <div className="flex gap-4 items-center ">
          <label className="font-satoshi-bold text-[20px]">Type:</label>
          <select
            name="type"
            id=""
            onChange={(e) => handleChange(e)}
            placeholder="*Select Category"
            value={formData.type}
            required
            className="w-full border bg-white text-gray-700 border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
          >
            <option value="">-- *Select Category</option>
            <option value="Article">Article</option>
            <option value="Blog">Blog</option>
            <option value="Case Study">Case Study</option>
          </select>
        </div>
        <div className="flex gap-4 items-center ">
          <label className="font-satoshi-bold text-[20px]">Title:</label>
          <input
            type="text"
            name="title"
            id=""
            onChange={(e) => handleChange(e)}
            value={formData.title}
            placeholder="*Enter title"
            className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
          />
        </div>
        <div className="flex gap-4 items-center ">
          <label className="font-satoshi-bold text-[20px]">Date:</label>
          <input
            type="text"
            name="date"
            onChange={(e) => handleChange(e)}
            value={formData.date}
            id=""
            placeholder="*Date in MMM DD, YYYY format"
            className="w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
          />
        </div>
        <div className="flex gap-4 items-center ">
          <label className="font-satoshi-bold text-[20px]">Description:</label>
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
        </div>

        <div className="flex gap-4 items-center ">
          <label className="font-satoshi-bold text-[20px]">
            Short Description:
          </label>
          <textarea
            className=" w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
            name="shortDescription"
            id=""
            value={formData.shortDescription}
            onChange={(e) => handleChange(e)}
            placeholder="**Short Description"
            cols="10"
            rows="5"
          ></textarea>
        </div>

        <div className="flex gap-4 items-center ">
          <label className="font-satoshi-bold text-[20px]">Image:</label>
          <input
            type="file"
            name="imgSrc"
            onChange={(e) => handleFileChange(e)}
            id=""
            multiple
            accept="image/*"
            className=" w-full border border-t-0 border-r-0 border-l-0 focus:outline-none border-black px-4 py-2 md:my-0 my-2"
          />
        </div>
      </div>

      {!disable && (
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="my-10 w-[200px] py-3 md:py-2 border-2 border-primary rounded-[30px] md:h-[45px] mb-5 block mx-auto "
        >
          Submit
        </button>
      )}
      {disable && (
        <button className="my-10 w-[200px] py-3 md:py-2 border-2 border-primary rounded-[30px] md:h-[45px] mb-5 block mx-auto ">
          Uploading file {progresspercent} %
        </button>
      )}
    </div>
  );
};

export default ResourceNewForm;
