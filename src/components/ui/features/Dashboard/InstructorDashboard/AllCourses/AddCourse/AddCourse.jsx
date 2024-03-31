import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import AddCourseIcon from "/public/assets/Courses/addcourse.svg";
import { MdOutlineLibraryAdd } from "react-icons/md";
import InputLabel from "../../../UserDashboard/UserProfile/InputLabel";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import ConformationModal from "@/src/components/Shared/ConformationModal/ConformationModal";
import { useState } from "react";
import { singleImageUpload } from "@/src/Hooks/ImageUpload";
import useAllSpecificCourseData from "@/src/Hooks/courses/useAllSpecificCourseData";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import axios from "axios";
import { ProgressBar } from "react-loader-spinner";
import useGetDataHook from "@/src/Hooks/useGetDataHook";

const AddCourse = ({ isOpen, onOpenChange }) => {
  const [categories] = useGetDataHook(
    `https://backend.driveshikhun.com/api/v1/categories/specific`
  );

  console.log(categories)
  const { data } = useGetSingleUserData();
  const [upVideo, setUpVideo] = useState("");
  const [loading, setLoading] = useState(false);
  const [introVideo, setIntroVideo] = useState("");
  const [img, setImg] = useState("");
  const [imgName, setImgName] = useState("");
  const id = data?._id;

  const { refetch } = useAllSpecificCourseData();
  const {
    onOpen: onOpenConfrimModal,
    isOpen: isOpenConfrimModal,
    onOpenChange: onOpenChangeConfrimModal,
  } = useDisclosure();
  const handleConfrimModal = (onClose) => {
    onClose();
    onOpenConfrimModal();
  };

  const [formData, setFormData] = useState({
    title: "",
    enrollmentStart: "",
    enrollmentEnd: "",
    category: "",
    region: "",
    subscriptionPlan: "",
    courseThumbnail: null,
    introVideo: "",
    courseDescription: "",
    itemsWithinCourse: [],
    courseFacilities: [],
    // userId: id,
  });

  const uploadVideo = async (video) => {
    setLoading(true);
    const data = new FormData();
    data.append(`file`, video);
    data.append(`upload_preset`, "video_preset");

    try {
      let cloudName = `dm9kxpj6g`;
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = await res.data;
      console.log(secure_url);
      setUpVideo("Video Uploaded");
      setLoading(false);
      setIntroVideo(secure_url);
      return secure_url;
    } catch (err) {
      setLoading(false);
      console.log(err);
      setUpVideo(err);
    }
  };

  // Image upload
  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    setImgName(image?.name);
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setImg);
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleItemInputChange = (e, index, type) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const newData = { ...prevData };
      newData[type][index] = value;
      return newData;
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title && !formData.category) {
      console.log("this field is required");
    } else if (!formData.itemsWithinCourse.length > 5) {
      console.log("add minimum 4 items");
    } else {
      const data = {
        ...formData,
        courseThumbnail: img,
        userId: id,
        introVideo,
      };
      try {
        const response = await postData(
          "https://backend.driveshikhun.com/api/v1/course/addCourses",
          data
        );
        console.log("res 90========", data);
        if (response.ok) {
          console.log("Course added successfully!");
          handleConfrimModal(onOpenChange);
          // refetch data form all course
          refetch();
        } else {
          const responseData = await response.json();
          const errorMessage = responseData?.error || "Unknown error";

          console.error(
            "Failed to add course. Server responded with:",
            response
          );
          console.error("Server error message:", errorMessage);
        }
      } catch (error) {
        console.error("Error adding course:", error.message);
      }
    }
  };

  const postData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return response;
    } catch (error) {
      console.error("Fetch error:", error.message);
      throw new Error("Failed to communicate with the server.");
    }
  };

  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6 block max-h-[400px] overflow-y-auto",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-white dark:bg-darkbg max-w-[950px] px-5 py-5 md:px-[90px] md:py-[50px] text-black dark:text-white",
          header: "p-0 py-10 border-[#292f46]",
          footer: "p-0 border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        className="font-liador"
      >
        <ModalContent className="relative modal_scrollbar">
          <>
            <Image
              src={userBg}
              width={90}
              height={90}
              alt=""
              className="absolute left-0 top-0 z-10"
            />
            <ModalHeader className="flex items-center gap-1">
              <div>
                <Image
                  width={56}
                  height={56}
                  src={AddCourseIcon}
                  alt="Add course icon"
                />
              </div>
              <div>
                <h2 className="text-[32px] leading-[3rem] font-semibold text-transparent bg-loginButton bg-clip-text dark:text-white">
                  কোর্স অ্যাড করুন
                </h2>
                <p className="text-base font-normal -mt-2">
                  তথ্যগুলো সঠিকভাবে ফিল আপ করুন{" "}
                  <span className="second-text-color dark:text-white">
                    (* require)
                  </span>
                </p>
              </div>
            </ModalHeader>
            <ModalBody>
              <form>
                {/* Course Title */}
              
                  <div className="basis-1/2 flex flex-col w-full gap-2 mb-3">
                    <InputLabel label={"কোর্স টাইটেল লিখুন"} />
                    <input
                      required
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="কোর্স টাইটেল লিখুন"
                      className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
                    />
                  </div>

                 
                 
          
                {/* category, Region, Subscription plan */}
                <div className="flex gap-5 items-center justify-between">
                  <div className="flex flex-col w-full gap-2 mb-3 relative">
                    <InputLabel label="ক্যাটাগরি" />
                    <select
                      defaultValue="ক্যাটাগরি সিলেক্ট করুন"
                      className="py-3 text-black/30 dark:text-white appearance-none px-5 border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50 dark:placeholder:text-white dark:bg-transparent dark:border-white"
                      name="category"
                      required
                      onChange={handleInputChange}
                    >
                      <option
                        value=""
                        disabled
                        className="text-black/50 dark:text-white"
                      >
                        ক্যাটাগরি সিলেক্ট করুন
                      </option>
                      {categories?.map((category) => (
                        <option
                          key={category?._id} 
                          value={category?.name} 
                          className="text-black/50 dark:text-white"
                        >
                          {category?.name}
                        </option>
                      ))}
                    </select>

                    <div className="absolute inset-y-0 right-0 top-[40%]  flex items-center px-2 pointer-events-none">
                      <svg
                        className="fill-current h-4 w-4 text-black/30  dark:text-white border border-solid border-black/30 rounded-full leading-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12L5 7h10l-5 5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-2 mb-3 relative">
                    <InputLabel label="রিজিওন" />
                    <select
                      defaultValue="রিজিওন সিলেক্ট করুন"
                      className="py-3 text-black/30  dark:text-white appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50 dark:placeholder:text-white dark:bg-transparent dark:border-white"
                      name="region"
                      required
                      onChange={handleInputChange}
                    >
                      <option
                        className="text-black/50 dark:text-white "
                        value="রিজিওন সিলেক্ট করুন"
                      >
                        রিজিওন সিলেক্ট করুন
                      </option>
                      <option value="bangladesh">Bangladesh</option>
                      <option value="poland">Poland</option>
                      <option value="usa">USA</option>
                      <option value="canada">Canada</option>
                      <option value="germany">Germany</option>
                      <option value="spain">Spain</option>
                      <option value="uk">UK</option>
                      <option value="sweden">Sweden</option>


                    </select>
                    <div className="absolute inset-y-0 right-0 top-[40%]  flex items-center px-2 pointer-events-none">
                      <svg
                        className="fill-current h-4 w-4 text-black/30  dark:text-white border border-solid border-black/30 rounded-full leading-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12L5 7h10l-5 5z" />
                      </svg>
                    </div>
                  </div>
                 
                </div>
                {/* Thumbnile , course intro link*/}
                <div className="flex gap-5 items-center justify-between">
                  <div className="flex flex-col w-full gap-2 mb-3 relative">
                    <InputLabel label="কোর্স থাম্বনেইল" />
                    <label
                      className="py-3 px-1 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs dark:placeholder:text-white dark:bg-transparent dark:border-white"
                      htmlFor="thumbnil"
                    >
                      <span className="bg-primaryGradiant py-1 px-[14px] inline-block text-xs font-semibold rounded text-white">
                        Choose File
                      </span>
                      <span className="ml-3">{imgName && imgName}</span>
                    </label>
                    <input
                      id="thumbnil"
                      required
                      type="file"
                      name="courseThumbnail"
                      onChange={handleChangeUploadImage}
                      className=" hidden"
                    />
                    <div className="absolute inset-y-0 right-0 top-[50%]  flex items-center px-2 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="fill-current h-6 w-6 text-black/30  dark:text-white leading-4"
                      >
                        <path d="M5.5 8.5H6.5V6.4L7.3 7.2L8 6.5L6 4.5L4 6.5L4.7 7.2L5.5 6.4V8.5ZM2 10C1.725 10 1.48958 9.90208 1.29375 9.70625C1.09792 9.51042 1 9.275 1 9V3C1 2.725 1.09792 2.48958 1.29375 2.29375C1.48958 2.09792 1.725 2 2 2H5L6 3H10C10.275 3 10.5104 3.09792 10.7063 3.29375C10.9021 3.48958 11 3.725 11 4V9C11 9.275 10.9021 9.51042 10.7063 9.70625C10.5104 9.90208 10.275 10 10 10H2ZM2 9H10V4H5.5875L4.5875 3H2V9Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-col w-full gap-2 mb-3 relative">
                    <InputLabel label="কোর্স ইন্ট্রো ভিডিও" />
                    <label
                      className="py-3 px-1 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs dark:placeholder:text-white dark:bg-transparent dark:border-white"
                      htmlFor="introVideo"
                    >
                      <span className="bg-primaryGradiant py-1 px-[14px] inline-block text-xs font-semibold rounded text-white">
                        Choose Video
                      </span>
                      <div className="ml-3 w-40">{upVideo && upVideo}</div>
                    </label>
                    <input
                      id="introVideo"
                      required
                      type="file"
                      name="introVideo"
                      accept="video/*"
                      onChange={(e) => {
                        uploadVideo(e.target.files[0]);
                      }}
                      className=" hidden"
                    />
                    <div className="absolute inset-y-0 right-0 top-[50%]  flex items-center px-2 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="fill-current h-6 w-6 text-black/30 dark:text-white leading-4"
                      >
                        <path d="M5.5 8.5H6.5V6.4L7.3 7.2L8 6.5L6 4.5L4 6.5L4.7 7.2L5.5 6.4V8.5ZM2 10C1.725 10 1.48958 9.90208 1.29375 9.70625C1.09792 9.51042 1 9.275 1 9V3C1 2.725 1.09792 2.48958 1.29375 2.29375C1.48958 2.09792 1.725 2 2 2H5L6 3H10C10.275 3 10.5104 3.09792 10.7063 3.29375C10.9021 3.48958 11 3.725 11 4V9C11 9.275 10.9021 9.51042 10.7063 9.70625C10.5104 9.90208 10.275 10 10 10H2ZM2 9H10V4H5.5875L4.5875 3H2V9Z" />
                      </svg>
                      {loading && (
                        <ProgressBar
                          visible={true}
                          height="80"
                          width="80"
                          color="#4fa94d"
                          ariaLabel="progress-bar-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                        />
                      )}
                    </div>
                  </div>
                </div>
                {/* Course details */}
                <div className="flex gap-5 items-center justify-between">
                  <div className="flex flex-col w-full gap-2 mb-3 relative">
                    <InputLabel label="কোর্স বিবরন" />

                    <textarea
                      name="courseDescription"
                      onChange={handleInputChange}
                      className="py-3 px-4 border border-solid rounded border-black/30 outline-0 text-black/50 placeholder:text-black/50 placeholder:text-xs dark:placeholder:text-white dark:bg-transparent dark:border-white"
                      cols="20"
                      rows="5"
                      placeholder="এখান থেকে লিখা শুরু করুন"
                    ></textarea>
                  </div>
                </div>
                {/* Course information */}
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <InputLabel label="কোর্স এর ভিতরে যা যা থাকবে " />
                    <div className="bg-[#F2F2F2] rounded-lg mt-2 py-3 px-4 border border-solid border-black/30 ">
                      <p className="mb-3 text-xs text-black/50 font-light">
                        Add minimum 4 items
                      </p>
                      <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                        {[...Array(8)].map((_, index) => (
                          <input
                            key={index}
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name="itemsWithinCourse"
                            id=""
                            placeholder="Type here..."
                            onChange={(e) =>
                              handleItemInputChange(
                                e,
                                index,
                                "itemsWithinCourse"
                              )
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <InputLabel label="কোর্স এর সুবিধাসমূহ" />
                    <div className="bg-[#F2F2F2] mt-2 rounded-lg py-3 px-4 border border-solid border-black/30 ">
                      <p className="mb-3 text-xs text-black/50 font-light">
                        Add minimum 4 items
                      </p>
                      <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                        {[...Array(8)].map((_, index) => (
                          <input
                            key={index}
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            type="text"
                            name="courseFacilities"
                            id=""
                            placeholder="Type here..."
                            onChange={(e) =>
                              handleItemInputChange(
                                e,
                                index,
                                "courseFacilities"
                              )
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={handleFormSubmit}
                type="button"
                className="bg-secondaryGradiant justify-center gap-[10px] mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
              >
                Add Course
                <MdOutlineLibraryAdd size={24} />
              </button>
            </ModalFooter>
            <Image
              src={userBg2}
              width={90}
              height={90}
              alt=""
              className="absolute right-0 bottom-0"
            />
          </>
        </ModalContent>
      </Modal>
      {/* Handle open modal */}
      <ConformationModal
        isOpen={isOpenConfrimModal}
        onOpenChange={onOpenChangeConfrimModal}
      />
    </>
  );
};

export default AddCourse;
