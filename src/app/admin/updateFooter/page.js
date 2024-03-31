"use client"

import PostHooks from "@/src/Hooks/PostHooks";
import UpdateHooks from "@/src/Hooks/UpdateHooks";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const AdminFooterPage = () => {
  const [formData, setFormData] = useState({
    location: "",
    copyRights: "",
    hotlineNumber: "",
    whatsAppNumber: "",
    email: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    youtubeUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
  });

  //   load data
  useEffect(() => {
    fetch(`https://backend.driveshikhun.com/api/v1/footer/getFooters`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setFormData(data?.data[0]);
        }
      });
  }, []);

  // update and post data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData?._id) {
        await UpdateHooks(
          `https://backend.driveshikhun.com/api/v1/footer/updateFooters/${formData?._id}`,
          formData
        );
        toast?.success(`Footer section Updated !`);
      } else {
        await PostHooks(
          `https://backend.driveshikhun.com/api/v1/footer/addFooters`,
          formData,
          `Footer data posted`
        );
      }
    } catch (error) {
      toast?.success(error);
    }
  };

  // set data in state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="bg-white dark:bg-darkbg">
      <div className="w-fit  text-xl font-semibold mb-5">
        <h1>Update Footer Section</h1>
        <div className="h-1 mt-1 bg-secondary w-[40%]"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 dark:bg-darkbg p-6 rounded shadow-md w-full mx-auto "
      >
        <div className="grid lg:grid-cols-2  gap-5">
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
              htmlFor="name"
            >
              Hotline Number (including +880)
            </label>
            <input
              type="text"
              name="hotlineNumber"
              required
              onChange={handleChange}
              value={formData.hotlineNumber}
              className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
              htmlFor="name"
            >
              Whatsapp Number (including +880)
            </label>
            <input
              type="text"
              name="whatsAppNumber"
              required
              onChange={handleChange}
              value={formData.whatsAppNumber}
              className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
              htmlFor="name"
            >
              Copy Rights
            </label>
            <input
              type="text"
              name="copyRights"
              required
              onChange={handleChange}
              value={formData.copyRights}
              className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
              htmlFor="name"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={formData.email}
              className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
              htmlFor="name"
            >
              Facebook
            </label>
            <input
              type="text"
              name="facebook"
              required
              onChange={handleChange}
              value={formData.facebook}
              className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
              htmlFor="name"
            >
              Instagram
            </label>
            <input
              type="text"
              name="instagram"
              required
              onChange={handleChange}
              value={formData.instagram}
              className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
              htmlFor="name"
            >
              Linkedin
            </label>
            <input
              type="text"
              name="linkedin"
              required
              onChange={handleChange}
              value={formData.linkedin}
              className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
              htmlFor="name"
            >
              Youtube Url
            </label>
            <input
              type="text"
              name="youtubeUrl"
              required
              onChange={handleChange}
              value={formData.youtubeUrl}
              className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
              htmlFor="name"
            >
              PlayStore Url
            </label>
            <input
              type="text"
              name="playStoreUrl"
              required
              onChange={handleChange}
              value={formData.playStoreUrl}
              className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
              htmlFor="name"
            >
              AppStore Url
            </label>
            <input
              type="text"
              name="appStoreUrl"
              required
              onChange={handleChange}
              value={formData.appStoreUrl}
              className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">
              Location:
            </label>
            <textarea
              name="location"
              required
              onChange={handleChange}
              value={formData.location}
              className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
            ></textarea>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-secondarySolid text-white px-4 py-2 rounded hover:bg-secondarySolid/90 hover:scale-105 duration-300"
          >
            Update Footer !
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminFooterPage;
