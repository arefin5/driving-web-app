"use client"


import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { singleImageUpload } from "@/src/Hooks/ImageUpload";
import { Icon } from "@iconify/react";
import UpdateHooks from "@/src/Hooks/UpdateHooks";
import PostHooks from "@/src/Hooks/PostHooks";
import DeleteHook from "@/src/Hooks/DeleteHook";
import { Image, Pagination } from "@nextui-org/react";
const Review = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [refetch, setRefetch] = useState(false);
  const [reviewData, setReviewData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0); // Start from page 0
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    title: "",
  });

  //   load data
  useEffect(() => {
    fetch(
      `https://backend.driveshikhun.com/api/v1/reviews/specific?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setReviewData(data?.data);
          setTotal(data.total);
          setTotalPages(Math.ceil(total / itemsPerPage));
        }
      });
  }, [refetch, itemsPerPage, total, currentPage]);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  // update and post data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData?._id) {
        await UpdateHooks(
          `https://backend.driveshikhun.com/api/v1/reviews/updateReview/${formData?._id}`,
          { ...formData, img: imageUrl }
        );
        toast?.success(`Review Updated Successfully !!`);
      } else {
        await PostHooks(
          `https://backend.driveshikhun.com/api/v1/reviews/addReview`,
          { ...formData, img: imageUrl },
          `Review Post Successfully !!`
        );
        setFormData({
          name: "",
          review: "",
          title: "",
        });
        e.target.reset();
        setImageUrl("");
        setTimeout(() => {
          setRefetch(!refetch);
        }, 1000);
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
          আপনার রিভিউ পোস্ট করুন অথবা আপডেট করুন
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
            রিভিউ কভার ইমেজ
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
            কাষ্টমার নাম
          </label>
          <input
            type="text"
            name="name"
            placeholder="কাষ্টমার এর সম্পূর্ণ নাম লিখুন            "
            onChange={handleChange}
            value={formData.name}
            className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
          />
        </div>
        <div className="mb-4 flex flex-col ">
          <label
            className="text-base font-semibold primary-text-color dark:text-white capitalize"
            htmlFor="name"
          >
            কাষ্টমার টাইটেল
          </label>
          <input
            type="text"
            name="title"
            placeholder="কাষ্টমার এর জব টাইটেল অথবা প্রোফেশন লিখুন            "
            onChange={handleChange}
            value={formData.title}
            className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
          />
        </div>
        <div className="mb-4 flex flex-col ">
          <label className="text-base font-semibold primary-text-color dark:text-white capitalize">
            রিভিউ
          </label>
          <textarea
            name="review"
            placeholder="সম্পূর্ণ রিভিউ লিখুন            "
            onChange={handleChange}
            value={formData.review}
            className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-secondarySolid text-white px-4 py-2 rounded hover:bg-secondarySolid/90 hover:scale-105 duration-300"
          >
            আপডেট রিভিউ !
          </button>
        </div>
      </form>

      <div className="w-fit  text-xl font-semibold my-5">
        <h1>সকল রিভিউ</h1>
        <div className="h-1 mt-1 bg-secondary w-[40%]"></div>
      </div>

      <div className="relative border border-solid border-black/30 rounded-xl pb-5 !max-h-full overflow-auto md:overflow-y-auto md:scrollbar-hide">
        <table className="w-full max-lg:min-w-[700px] px-10 table-auto text-sm text-left overflow-scroll md:overflow-hidden  rounded-xl">
          <thead className="text-xs text-white uppercase  pl-10  bg-loginButton">
            <tr className="text-lg grid grid-cols-12 px-10 py-5 items-center">
              <th scope="col" className=" text-left col-span-1">
                #
              </th>
              <th scope="col" className=" col-span-2 text-center">
                নাম
              </th>
              <th scope="col" className=" col-span-2 text-center">
                টাইটেল
              </th>
              <th scope="col" className="col-span-5 text-center">
                রিভিউ
              </th>
              <th scope="col" className=" text-right col-span-2">
                একশন
              </th>
            </tr>
          </thead>
          <tbody>
            {reviewData?.map((review, index) => (
              <tr
                key={review?._id}
                className="mx-5 mt-4  bg-white border-solid border-2 rounded border-primarySolid primary-text-color dark:text-white dark:bg-gray-800 dark:border-gray-700 text-lg grid grid-cols-12"
              >
                <th
                  scope="row"
                  className="pl-4 py-3 font-medium whitespace-nowrap text-center  border-collapse col-span-1"
                >
                  <span className="flex items-center gap-2">{index + 1}</span>
                </th>
                <td className="py-3 text-center col-span-2 border-collapse">
                  <div className="w-fit mx-auto flex items-center gap-2">
                    <Image
                      className="w-7 rounded-full border border-secondary"
                      src={review?.img}
                      alt=""
                    />{" "}
                    {review?.name}
                  </div>
                </td>
                <td className="py-3 text-center col-span-2 border-collapse">
                  {review?.title}
                </td>
                <td className=" py-3 text-center col-span-5 border-collapse">
                  {review?.review?.slice(0, 40)}
                </td>
                <td className=" py-3 text-right  col-span-2 border-collapse">
                  <div className="flex justify-end gap-3 mr-5">
                    <button
                      className=" border border-red-500 bg-red-100 dark:bg-darkbg text-white px-1 py-1 rounded  text-2xl"
                      onClick={() => {
                        DeleteHook({
                          setRefetch,
                          refetch,
                          url: `https://backend.driveshikhun.com/api/v1/reviews/deleteReview/${review?._id}`,
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
                        setFormData(review);
                        setImageUrl(review?.img);
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
      {/* Pagination */}
      <div className=" my-5">
        <Pagination
          classNames={{
            item: "w-8 h-8 text-small rounded-none bg-transparent",
            cursor: `bg-primaryGradiant dark:!bg-darkbg shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold`,
            prev: "dark:!bg-darkbg",
            next: "dark:!bg-darkbg",
          }}
          showControls
          total={totalPages}
          initialPage={currentPage + 1} // Increment currentPage by 1 for UI display
          page={currentPage + 1} // Increment currentPage by 1 for UI display
          onChange={(currentPage) => {
            setCurrentPage(currentPage - 1); // Decrement currentPage by 1 internally
          }}
        />
      </div>
    </div>
  );
};

export default Review;
