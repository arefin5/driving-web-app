import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import ConformationModal from "../../Shared/ConformationModal/ConformationModal";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import InputLabel from "../../ui/features/Dashboard/UserDashboard/UserProfile/InputLabel";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { singleImageUpload } from "@/src/Hooks/ImageUpload";
import useGetDataHook from "@/src/Hooks/useGetDataHook";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import JoditEditor from "jodit-react";
import { ProgressBar } from "react-loader-spinner";
import UpdateHooks from "@/src/Hooks/UpdateHooks";
import Video from "next-video";

const UpdateLearnModal = ({ isOpen, onOpenChange, refetch, id }) => {
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [content, setContent] = useState("");
  const editor = useRef(null);
  const [upVideo, setUpVideo] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedModule, setSelectedModule] = useState("");
  const [selectedLesson, setSelectedLesson] = useState("");

  const [formData,setFormData]=useState([]);

  const {
    onOpen: onOpenConfrimModal,
    isOpen: isOpenConfrimModal,
    onOpenChange: onOpenChangeConfrimModal,
  } = useDisclosure();

  const { data: user } = useGetSingleUserData();

  
  useEffect(() => {
    fetch(`https://backend.driveshikhun.com/api/v1/learn/getLearnsById/${id}`).then(
      (res) =>
        res.json().then((data) => {
          setSelectedCourse(data?.data?.courseId);
          setSelectedLesson(data?.data?.lessonId);
          setSelectedModule(data?.data?.moduleId);
          console.log(data?.data);
          setImg(data?.data?.learnImg);
          setVideo(data?.data?.learnVideo);
          setContent(data?.data?.learnDescription);
          setFormData(data?.data)
          console.log(data?.data)
        })
    );
  }, [ id, isOpen]);

  const [course] = useGetDataHook(
    `https://backend.driveshikhun.com/api/v1/course/specific?fieldName=userId&&fieldValue=${user?._id}`
  );
  const [module] = useGetDataHook(
    `https://backend.driveshikhun.com/api/v1/module/specific?fieldName=courseId&&fieldValue=${selectedCourse}`
  );

  const [lesson] = useGetDataHook(
    `https://backend.driveshikhun.com/api/v1/lesson/specific?fieldName=moduleId&&fieldValue=${selectedModule}`
  );


  const handelSubmit = async (onClose) => {
    const data = {
      learnVideo: video?video:formData?.learnVideo,
      learnImg: img?img:formData?.learnImg,
      learnDescription: content?content:formData?.learnDescription,
      userId: user?._id,
      courseId: selectedCourse?selectedCourse:formData?.courseId,
      moduleId: selectedModule?selectedModule:formData?.moduleId,
      lessonId: selectedLesson?selectedLesson:formData?.lessonId,
    };

   
      try {
        await UpdateHooks(
          `https://backend.driveshikhun.com/api/v1/learn/updateLearns/${id}`,
          data
        );
      } catch (error) {
        toast?.error(error);
      }
      onClose();
   
  };

  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setImg);
  };

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
      setVideo(secure_url);
      return secure_url;
    } catch (err) {
      setLoading(false);
      console.log(err);
      setUpVideo(err);
    }
  };

  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        radius="lg"
        classNames={{
          body: "py-6 block max-h-[400px] overflow-y-auto ",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-white max-w-[950px] px-5 py-5 md:px-[90px] md:py-[50px] text-black",
          header: "p-0 py-10 border-[#292f46]",
          footer: "p-0 border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10 border bg-red-50",
        }}
        className="font-liador "
      >
        <ModalContent className="relative modal_scrollbar ">
          {(onClose) => (
            <>
              <Image
                src={userBg}
                width={90}
                height={90}
                alt=""
                className="absolute left-0 top-0 z-10"
              />
              <ModalHeader className="flex items-center gap-3">
                <div>
                  <h2 className="text-[32px] leading-[3rem] font-semibold text-transparent bg-loginButton bg-clip-text">
                    Update Learn
                  </h2>
                  <p className="text-base font-normal -mt-2">
                    Fill up the information correctly{" "}
                    <span className="second-text-color">(* require)</span>
                  </p>
                </div>
              </ModalHeader>
              <ModalBody>
                <form>
                  <div className=" flex relative flex-col w-full gap-2 mb-3">
                    <InputLabel label="Select Course" />
                    <select
                      defaultValue={"select course..."}
                      className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  w-full"
                      name="selectedCourse"
                      onChange={(e) => setSelectedCourse(e.target.value)}
                    >
                      <option className="text-black/50" value="">
                        Select One
                      </option>
                      {course?.map((course) => (
                        <option
                          className="text-black/50 "
                          key={course?._id}
                          selected={course?._id==selectedCourse}
                          value={course?._id}
                        >
                          {course?.title}
                        </option>
                      ))}
                    </select>

                    <div className="absolute inset-y-0 right-0 top-[40%]  flex items-center px-2 pointer-events-none">
                      <svg
                        className="fill-current h-4 w-4 text-black/30 border border-solid border-black/30 rounded-full leading-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12L5 7h10l-5 5z" />
                      </svg>
                    </div>
                  </div>
                  <div className=" flex relative flex-col w-full gap-2 mb-3">
                    <InputLabel label="Select Module" />
                    <select
                      defaultValue={"select module..."}
                      className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  w-full"
                      name="selectedModule"
                      onChange={(e) => setSelectedModule(e.target.value)}
                    >
                      <option className="text-black/50" value="">
                        Select One
                      </option>
                      {module?.map((module) => (
                        <option
                          className="text-black/50 "
                          key={module?._id}
                          value={module?._id}
                          selected={module?._id==selectedModule}
                        >
                          {module?.title}
                        </option>
                      ))}
                    </select>

                    <div className="absolute inset-y-0 right-0 top-[40%]  flex items-center px-2 pointer-events-none">
                      <svg
                        className="fill-current h-4 w-4 text-black/30 border border-solid border-black/30 rounded-full leading-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12L5 7h10l-5 5z" />
                      </svg>
                    </div>
                  </div>
                  <div className=" flex relative flex-col w-full gap-2 mb-3">
                    <InputLabel label="Select Lesson" />
                    <select
                      defaultValue={"select lesson..."}
                      className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  w-full"
                      name="selectedModule"
                      onChange={(e) => setSelectedLesson(e.target.value)}
                    >
                      <option className="text-black/50" value="">
                        Select One
                      </option>
                      {lesson?.map((lesson) => (
                        <option
                          className="text-black/50 "
                          key={lesson?._id}
                          value={lesson?._id}
                          selected={lesson?._id===selectedLesson}
                        >
                          {lesson?.title}
                        </option>
                      ))}
                    </select>

                    <div className="absolute inset-y-0 right-0 top-[40%]  flex items-center px-2 pointer-events-none">
                      <svg
                        className="fill-current h-4 w-4 text-black/30 border border-solid border-black/30 rounded-full leading-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12L5 7h10l-5 5z" />
                      </svg>
                    </div>
                  </div>

                      <div className="block">
                     {img&& <Image
                        src={img}
                        width={300}
                        height={200}
                        alt=""
                        className=" "
                      />}
                      </div>
                  <div className="flex flex-col w-full gap-2 mb-3 relative">
              
                    <span className="text-base font-semibold primary-text-color">
                      Learn Img/pdf (optional)
                    </span>{" "}
                    <label
                      htmlFor="learnImg"
                      className="py-3 px-1 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs"
                    >
                      <span className="bg-primaryGradiant py-1 px-[14px] inline-block text-xs font-semibold rounded text-white">
                        Choose File
                      </span>
                    </label>
                    <input
                      id="learnImg"
                      required
                      type="file"
                      name="learnImg"
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
                        className="fill-current h-6 w-6 text-black/30  leading-4"
                      >
                        <path d="M5.5 8.5H6.5V6.4L7.3 7.2L8 6.5L6 4.5L4 6.5L4.7 7.2L5.5 6.4V8.5ZM2 10C1.725 10 1.48958 9.90208 1.29375 9.70625C1.09792 9.51042 1 9.275 1 9V3C1 2.725 1.09792 2.48958 1.29375 2.29375C1.48958 2.09792 1.725 2 2 2H5L6 3H10C10.275 3 10.5104 3.09792 10.7063 3.29375C10.9021 3.48958 11 3.725 11 4V9C11 9.275 10.9021 9.51042 10.7063 9.70625C10.5104 9.90208 10.275 10 10 10H2ZM2 9H10V4H5.5875L4.5875 3H2V9Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-col w-full gap-2 mb-3 relative">
                   {video&& <Video
                        src={video}
                        placeholder="blur"
                        className="rounded-lg"
                        
                      />}
                    <span className="text-base font-semibold primary-text-color">
                      Learn Video (optional)
                    </span>{" "}
                    <label
                      className="py-3 px-1 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs"
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
                  <div className=" flex flex-col w-full gap-2 mb-3 relative">
                    <InputLabel label={"Learn Description"} />
                    <JoditEditor
                      ref={editor}
                      value={content}
                      onChange={(val) => setContent(val)}
                    />
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={() => handelSubmit(onClose)}
                  type="submit"
                  className="bg-secondaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
                >
                  Update Learn
                  {/* <MdOutlineCircleNotifications size={24} /> */}
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
          )}
        </ModalContent>
      </Modal>
      {/* Handle open modal */}
      <ConformationModal
        message=" Updated successfully"
        isOpen={isOpenConfrimModal}
        onOpenChange={onOpenChangeConfrimModal}
      />
    </>
  );
};

export default UpdateLearnModal;
