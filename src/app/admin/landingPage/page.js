"use client";

import axios from "axios";
import { singleImageUpload } from "@/src/Hooks/ImageUpload";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

const LandingPaage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [formData, setFormData] = useState({
    topSubtitle: "",
    title: "",
    subTitle: "",
    text: "",
    appStoreLink: "",
    googlePlayLink: "",
  });
  const [selectedFileName, setSelectedFileName] = useState("");
  const [sliders, setSliders] = useState([]);
  const [editingSliderId, setEditingSliderId] = useState(null);

  useEffect(() => {
    fetchSliders();
  }, []);
  const fetchSliders = async () => {
    try {
      const response = await axios.get(
        "https://backend.driveshikhun.com/api/v1/sliders/getSliders"
      );
      setSliders(response.data.data);
    } catch (error) {
      console.error("Error fetching sliders:", error.message);
      toast.error("Error fetching sliders");
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (editingSliderId) {
        response = await axios.patch(
          `https://backend.driveshikhun.com/api/v1/sliders/updateSliders/${editingSliderId}`,
          { ...formData, img: imageUrl }
        );
      } else {
        response = await axios.post(
          "https://backend.driveshikhun.com/api/v1/sliders/addSliders",
          { ...formData, img: imageUrl }
        );
      }
      console.log("Slider created/updated successfully:", response.data);
      toast.success("Slider created/updated successfully");
      setFormData({
        topSubtitle: "",
        title: "",
        subTitle: "",
        text: "",
        appStoreLink: "",
        googlePlayLink: "",
      });
      setSelectedFileName("");
      setEditingSliderId(null);
      fetchSliders();
    } catch (error) {
      console.error("Error creating/updating slider:", error.message);
      toast.error("Error creating/updating slider");
    }
  };

  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    setSelectedFileName(image.name);
    const formData = new FormData();
    formData.append("image", image);
    try {
      await singleImageUpload(formData, setImageUrl);
      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error.message);
      toast.error("Error uploading image");
    }
  };

  const handleEditSlider = (slider) => {
    setFormData({
      topSubtitle: slider.topSubtitle,
      title: slider.title,
      subTitle: slider.subTitle,
      text: slider.text,
      appStoreLink: slider.appStoreLink,
      googlePlayLink: slider.googlePlayLink,
    });
    setSelectedFileName("");
    setEditingSliderId(slider._id);
  };

  const handleDeleteSlider = async (sliderId) => {
    try {
      const response = await axios.delete(
        `https://backend.driveshikhun.com/api/v1/sliders/deleteSliders/${sliderId}`
      );
      console.log("Slider deleted successfully:", response.data);
      toast.success("Slider deleted successfully");
      fetchSliders();
    } catch (error) {
      console.error("Error deleting slider:", error.message);
      toast.error("Error deleting slider");
    }
  };
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-3xl primary-text-color font-bold dark:text-white">
          নতুন স্লাইডার পোস্ট করুন{" "}
        </h2>
      </div>
      <div className="grid  grid-cols-12 gap-6 mt-5">
        {/* slider from */}
        <div className="xl:col-span-3 col-span-full bg-slate-50 dark:bg-darkbg p-5 border border-solid border-slate-200 rounded shadow-inner">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col ">
              <label className="" htmlFor="">
                <span className="text-base font-semibold primary-text-color dark:text-white capitalize">
                  Top sub title
                </span>{" "}
                <span className="second-text-color dark:text-white">*</span>
              </label>
              <input
                name="topSubtitle"
                value={formData.topSubtitle}
                onChange={handleInputChange}
                placeholder="Title"
                type="text"
                className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
              />
            </div>
            <div className="flex flex-col ">
              <label className="" htmlFor="">
                <span className="text-base font-semibold primary-text-color dark:text-white capitalize">
                  title
                </span>{" "}
                <span className="second-text-color dark:text-white">*</span>
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Title"
                type="text"
                className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
              />
            </div>
            <div className="flex flex-col ">
              <label className="" htmlFor="">
                <span className="text-base font-semibold primary-text-color dark:text-white capitalize">
                  sub title
                </span>{" "}
                <span className="second-text-color dark:text-white">*</span>
              </label>
              <input
                placeholder="Title"
                name="subTitle"
                value={formData.subTitle}
                onChange={handleInputChange}
                type="text"
                className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
              />
            </div>
            <div className="flex flex-col ">
              <label className="" htmlFor="">
                <span className="text-base font-semibold primary-text-color dark:text-white capitalize">
                  text
                </span>{" "}
                <span className="second-text-color dark:text-white">*</span>
              </label>
              <input
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                placeholder="Title"
                type="text"
                className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
              />
            </div>
            <div className="flex flex-col w-full gap-2 mb-3 relative">
              <span className="text-base font-semibold primary-text-color">
                Upload Image
              </span>{" "}
              <label
                htmlFor="learnImg"
                className="py-3 px-1 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs"
              >
                <span className="bg-primaryGradiant py-1 px-[14px] inline-block text-xs font-semibold rounded text-white">
                  {selectedFileName ? selectedFileName : "Choose File"}
                </span>
              </label>
              <input
                id="learnImg"
                type="file"
                name="img"
                onChange={handleChangeUploadImage}
                className="hidden"
              />
            </div>
            <div className="flex flex-col ">
              <label className="" htmlFor="">
                <span className="text-base font-semibold primary-text-color dark:text-white capitalize">
                  App store link
                </span>{" "}
                <span className="second-text-color dark:text-white">*</span>
              </label>
              <input
                name="appStoreLink"
                value={formData.appStoreLink}
                onChange={handleInputChange}
                placeholder="Title"
                type="text"
                className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
              />
            </div>
            <div className="flex flex-col ">
              <label className="" htmlFor="">
                <span className="text-base font-semibold primary-text-color dark:text-white capitalize">
                  Google Play store link
                </span>{" "}
                <span className="second-text-color dark:text-white">*</span>
              </label>
              <input
                name="googlePlayLink"
                value={formData.googlePlayLink}
                onChange={handleInputChange}
                placeholder="Title"
                type="text"
                className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
              />
            </div>
            <button
              type="submit"
              className="bg-loginButton text-white px-5 py-2 rounded-lg capitalize font-bold text-xl"
            >
              save
            </button>
          </form>
        </div>

        <div className="xl:col-span-9 col-span-full">
          <div className="relative border border-solid border-black/30 rounded-xl pb-5 !max-h-full overflow-auto md:overflow-y-auto md:scrollbar-hide">
            <table className="w-full max-lg:min-w-[700px] px-10 table-auto text-sm text-left overflow-scroll md:overflow-hidden  rounded-xl">
              <thead className="text-xs text-white uppercase  pl-10  bg-loginButton">
                {/* <div className=""> */}

                <tr className="text-lg grid grid-cols-12 px-10 py-5 items-center">
                  <th scope="col" className=" text-left col-span-2">
                    #
                  </th>
                  <th scope="col" className=" text-left col-span-2">
                    Top title
                  </th>

                  <th scope="col" className=" text-right col-span-2">
                    Actions
                  </th>
                </tr>

                {/* </div> */}
              </thead>
              <tbody>
                {/* <div className=" pb-6"> */}
                {sliders?.map((slider, index) => (
                  <tr
                    key={slider._id}
                    className="mx-5 mt-4  bg-white border-solid border-2 rounded border-primarySolid primary-text-color dark:text-white dark:bg-gray-800 dark:border-gray-700 text-lg grid grid-cols-12"
                  >
                    <th
                      scope="row"
                      className="pl-4 py-3 font-medium whitespace-nowrap text-center  border-collapse col-span-2"
                    >
                      <span className="flex items-center gap-2">
                        {index + 1}
                      </span>
                    </th>
                    <td className="py-3 text-center col-span-2 border-collapse w-full">
                      {slider?.topSubtitle}
                    </td>

                    <td className=" py-3 text-right  col-span-2 border-collapse">
                      {/* {liveClasses?.instructorName} */}

                      <div className="flex items-center justify-end gap-4 col-span-2 mr-5">
                        <RiEdit2Line
                          onClick={() => handleEditSlider(slider)}
                          size={18}
                          className="cursor-pointer dark:text-white text-[#2B388F]"
                        />

                        <RiDeleteBin6Line
                          onClick={() => handleDeleteSlider(slider._id)}
                          size={18}
                          className="cursor-pointer dark:text-white text-[#2B388F]"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
                {/* </div> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPaage;
