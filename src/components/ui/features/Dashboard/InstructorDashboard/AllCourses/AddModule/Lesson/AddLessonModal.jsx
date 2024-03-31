import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { MdOutlineLibraryAdd } from "react-icons/md";
import InputLabel from "../../../../UserDashboard/UserProfile/InputLabel";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import ConformationModal from "@/src/components/Shared/ConformationModal/ConformationModal";
import { useState } from "react";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import moment from "moment";
import PostHooks from "@/src/Hooks/PostHooks";
import axios from "axios";
import { ProgressBar } from "react-loader-spinner";

const AddLessonModal = ({
  isOpen,
  onOpenChange,
  setRefetch,
  refetch,
  moduleId,
  courseId,
}) => {
  let date = moment().format("YYYY-MM-D");
  const { data } = useGetSingleUserData();
  const id = data?._id;
  const [upVideo, setUpVideo] = useState("");
  const [loading, setLoading] = useState(false);
  const [lessonVideo, setLessonVideo] = useState("");

  const {
    onOpen: onOpenConfrimModal,
    isOpen: isOpenConfrimModal,
    onOpenChange: onOpenChangeConfrimModal,
  } = useDisclosure();

  const [formData, setFormData] = useState({
    title: "",
    lessonNumber: "",
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
      setLessonVideo(secure_url);
      return secure_url;
    } catch (err) {
      setLoading(false);
      console.log(err);
      setUpVideo(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      userId: id,
      courseId: courseId,
      moduleId,
      videoUrl: lessonVideo,
      date,
    };
    console.log(data);
    try {
      await PostHooks(
        `https://backend.driveshikhun.com/api/v1/lesson/addLessons`,
        data,
        "Lesson Posted!",
        refetch,
        setRefetch
      );
      onOpenChange();
    } catch (err) {
      console.log(err);
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
                <h2 className="text-[32px] leading-[3rem] font-semibold text-transparent bg-loginButton bg-clip-text dark:text-white">
                  লেসন অ্যাড করুন
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
                {/* Lesson Title, enrollment start, enrollment end */}

                <div className="basis-1/2 flex flex-col w-full gap-2 mb-3">
                  <InputLabel label={"লেসন নাম্বার "} />
                  <input
                    required
                    type="number"
                    name="lessonNumber"
                    value={formData?.lessonNumber}
                    onChange={handleInputChange}
                    placeholder="লেসন নাম্বার"
                    className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                  />
                </div>
                <div className="basis-1/2 flex flex-col w-full gap-2 mb-3">
                  <InputLabel label={"লেসন টাইটেল লিখুন"} />
                  <input
                    required
                    type="text"
                    name="title"
                    value={formData?.title}
                    onChange={handleInputChange}
                    placeholder="লেসন  টাইটেল লিখুন"
                    className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                  />
                </div>

                <div className="flex flex-col w-full gap-2 mb-3 relative">
                  <InputLabel label="লেসন ভিডিও" />
                  <label
                    className="py-3 px-1 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                    htmlFor="videoUrl"
                  >
                    <span className="bg-primaryGradiant py-1 px-[14px] inline-block text-xs font-semibold rounded text-white">
                      Choose Video
                    </span>
                    <div className="ml-3 w-40">{upVideo && upVideo}</div>
                  </label>
                  <input
                    id="videoUrl"
                    required
                    type="file"
                    name="videoUrl"
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
                      className="fill-current h-6 w-6 text-black/30  leading-4"
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
              </form>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={handleFormSubmit}
                className="bg-secondaryGradiant justify-center gap-[10px] mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
              >
                Add Lesson
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

export default AddLessonModal;
