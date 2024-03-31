"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { singleImageUpload } from "@/src/Hooks/ImageUpload";
import { Icon } from "@iconify/react";
import UpdateHooks from "@/src/Hooks/UpdateHooks";
import DeleteHook from "@/src/Hooks/DeleteHook";
import { Image } from "@nextui-org/react";
const OurInvestor = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [refetch, setRefetch] = useState(false);
  const [investorData, setinvestorData] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    
  });

  //   load data
  useEffect(() => {
    fetch(`https://backend.driveshikhun.com/api/v1/investors/getInvestors`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setinvestorData(data?.data);
        }
      });
  }, [refetch]);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  
// update and post data
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (formData?._id) {
      await UpdateHooks(
        `https://backend.driveshikhun.com/api/v1/investors/updateInvestors/${formData?._id}`,
        { ...formData, img: imageUrl }
      );
    } else {
      const response = await fetch("https://backend.driveshikhun.com/api/v1/investors/addInvestors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, img: imageUrl }),
      });

      if (!response.ok) {
        throw new Error("Failed to post data");
      }

      toast.success("Review Posted Successfully!!");
      setFormData({ name: "" });
      e.target.reset();
      setImageUrl("");
      setTimeout(() => {
        setRefetch(!refetch);
      }, 1000);
    }
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while posting data.");
  }
};

  // set data in state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setImageUrl);
  };

  return (
    <div className="bg-white dark:bg-transparent">
      <div className="w-fit  text-xl font-semibold mb-5">
        <h1 className="text-3xl primary-text-color font-bold dark:text-white">
          Our investor says...
        </h1>
        <div className="h-1 mt-1 bg-loginButton w-[40%]"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 dark:bg-darkbg p-6 rounded shadow-md w-full mx-auto"
      >
        <div className="mb-4"></div>
        <div className="mb-4 flex flex-col ">
          <label
            className="text-base font-semibold primary-text-color dark:text-white capitalize"
            htmlFor="img"
          >
            Investor Image
          </label>
          <input
            type="file"
            name="img"
            onChange={handleChangeUploadImage}
            className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
          />
        </div>
        <div className="mb-4 flex flex-col ">
          <label
            className="text-base font-semibold primary-text-color dark:text-white capitalize"
            htmlFor="name"
          >
            Company name
          </label>
          <input
            type="text"
            name="name"
            placeholder="কোম্পানি সম্পূর্ণ নাম লিখুন          "
            onChange={handleChange}
            value={formData.name}
            className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-secondarySolid text-white px-4 py-2 rounded hover:bg-secondarySolid/90 hover:scale-105 duration-300"
          >
            Add Investor
          </button>
        </div>
      </form>

      <div className="w-fit  text-xl font-semibold my-5">
        <h1>সকল Investor</h1>
        <div className="h-1 mt-1 bg-secondary w-[40%]"></div>
      </div>

      <div className="relative border border-solid border-black/30 rounded-xl pb-5 !max-h-full overflow-auto md:overflow-y-auto md:scrollbar-hide">
        <table className="w-full max-lg:min-w-[700px] px-10 table-auto text-sm text-left overflow-scroll md:overflow-hidden  rounded-xl">
          <thead className="text-xs text-white uppercase  pl-10  bg-loginButton">
            <tr className="text-lg grid grid-cols-8 px-10 py-5 items-center">
              <th scope="col" className=" text-left col-span-1">
                #
              </th>
              <th scope="col" className=" col-span-2 text-center">
                Company Name
              </th>
              <th scope="col" className=" col-span-2 text-center">
                Image
              </th>
              <th scope="col" className=" text-right col-span-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {investorData?.map((investor, index) => (
              <tr
                key={investor?._id}
                className="mx-5 mt-4  bg-white border-solid border-2 rounded border-primarySolid primary-text-color dark:text-white dark:bg-gray-800 dark:border-gray-700 text-lg grid grid-cols-8"
              >
                <th
                  scope="row"
                  className="pl-4 py-3 font-medium whitespace-nowrap text-center  border-collapse col-span-1"
                >
                  <span className="flex items-center gap-2">{index + 1}</span>
                </th>
                <td className="py-3 text-center col-span-2 border-collapse">
                  <div className="w-fit mx-auto flex items-center gap-2">
                    {investor?.name}
                  </div>
                </td>
                <td className="py-3 text-center col-span-2 border-collapse flex justify-center items-center">
                  <Image
                    className="w-7 rounded-full border border-secondary"
                    src={investor?.img}
                    alt=""
                  />{" "}
                </td>

                <td className=" py-3 text-right  col-span-2 border-collapse">
                  <div className="flex justify-end gap-3 mr-5">
                    <button
                      className=" border border-red-500 bg-red-100 dark:bg-darkbg text-white px-1 py-1 rounded  text-2xl"
                      onClick={() => {
                        DeleteHook({
                          setRefetch,
                          refetch,
                          url: `https://backend.driveshikhun.com/api/v1/investors/deleteInvestors/${investor?._id}`,
                        });
                      }}
                    >
                      <Icon
                        className="cursor-pointer dark:text-white text-[#2B388F]"
                        icon="material-symbols:delete-outline"
                      />
                    </button>
                    <button
                      onClick={() => {
                        setFormData(investor);
                        setImageUrl(investor?.img);
                        scrollToTop();
                      }}
                      className="border border-secondary py-1 px-1 rounded-md hover:bg-secondary/10 duration-300 text-xl "
                    >
                      <Icon
                        className="cursor-pointer dark:text-white text-[#2B388F]"
                        icon="basil:edit-outline"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OurInvestor;
