import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import QuizIcon from "/public/assets/Courses/quizIcon.svg";
import { MdOutlineQuiz } from "react-icons/md";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import ConformationModal from "@/src/components/Shared/ConformationModal/ConformationModal";
import InputLabel from "../../UserDashboard/UserProfile/InputLabel";
import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";
import { useEffect, useState } from "react";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import useGetSpecificQuiz from "@/src/Hooks/quiz/useGetSpecificQuiz";
import useAllSpecificCourseData from "@/src/Hooks/courses/useAllSpecificCourseData";
import useGetDataHook from "@/src/Hooks/useGetDataHook";
import UpdateHooks from "@/src/Hooks/UpdateHooks";

const AddQuizModal = ({ isOpen, onOpenChange, id }) => {
  const { refetch: quizRefetch } = useGetSpecificQuiz();
  const axiosPublic = useAxiosPublic();
  const { data: user } = useGetSingleUserData();
  const { data: courseData } = useAllSpecificCourseData(user?._id);
  const [error, setError] = useState("");

  const [quiz, setQuiz] = useState({
    title: "",
    // submitedLastDate: "",
    // submitedLastTime: "",
    marksPerQuestion: "",
    courseId: "",
    moduleId: "",
  });

  useEffect(() => {
    fetch(`https://backend.driveshikhun.com/api/v1/quiz/getQuizzesById/${id}`).then(
      (res) => res.json().then((data) => {
        if(id){
          setQuiz(data?.data)
        }
      })
    );
  }, [id]);
  const [module] = useGetDataHook(
    `https://backend.driveshikhun.com/api/v1/module/specific?fieldName=courseId&&fieldValue=${quiz?.courseId}`
  );

  const selectedCourse = courseData?.find((c) => c._id === quiz?.courseId);
  const selectedModule = module?.find((m) => m._id === quiz?.moduleId);

  const handleQuiz = (e) => {
    e?.preventDefault();
    const { name, value } = e.target;
    setQuiz((prev) => ({ ...prev, [name]: value }));
  };

  const {
    onOpen: onOpenConfrimModal,
    isOpen: isOpenConfrimModal,
    onOpenChange: onOpenChangeConfrimModal,
  } = useDisclosure();

  const handleConfrimModal = async (onClose) => {
    const addQuizData = {
      ...quiz,
      userId: user?._id,
      quizCourse: selectedCourse?.title,
      quizModule: selectedModule?.title,
    };

    if (!quiz?.title || !quiz?.courseId || !quiz?.moduleId ||!quiz?.marksPerQuestion ) {
      setError(`This field is required`);
      // console.log("Both title and submission date are required");
    } else {
      if(id){
      await UpdateHooks(`https://backend.driveshikhun.com/api/v1/quiz/updateQuizzes/${id}`,addQuizData);
 onClose();
      }else{
        const { data } = await axiosPublic.post("/quiz/addQuizzes", addQuizData);

      if (data.status === "success") {
        onClose();
        onOpenConfrimModal();
        quizRefetch();
      }
      }
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
          {(onClose) => (
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
                    src={QuizIcon}
                    alt="Add quiz icon"
                  />
                </div>
                <div className="ml-5">
                  <h2 className="text-[32px] leading-[3rem] font-semibold text-transparent bg-loginButton bg-clip-text dark:text-white">
                    {id ? " কুইজ ডিটেইলস আপডেট করুন" : "কুইজ যোগ করুন"}
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
                  {/* Course Title, enrollment start, enrollment end */}
                  <div className="flex gap-5 items-center justify-between">
                    <div className=" flex flex-col w-full gap-2 mb-3">
                      <InputLabel label={"কুইজ টাইটেল"} />
                      <input
                        name={"title"}
                        value={quiz?.title}
                        onChange={handleQuiz}
                        required
                        type="text"
                        placeholder="কুইজ টাইটেল এর নাম লিখুন..."
                        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                      />
                      {!quiz?.title && (
                        <p className="text-xs text-red-500">{error}</p>
                      )}
                    </div>

                    <div className=" flex flex-col w-full gap-2 mb-3">
                      <InputLabel label={"প্রতি প্রশ্নের মার্ক"} />
                      <input
                        name={"marksPerQuestion"}
                        value={quiz?.marksPerQuestion}
                        onChange={handleQuiz}
                        required
                        type="number"
                        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                      />
                      {!quiz.marksPerQuestion && (
                        <p className="text-xs text-red-500">{error}</p>
                      )}
                    </div>

                    {/* <div className="basis-1/4 flex flex-col w-full gap-2 mb-3 text-black/50">
                      <InputLabel label={"সাবমিটের শেষ তারিখ"} />
                      <input
                        name={"submitedLastDate"}
                        value={quiz.submitedLastDate}
                        onChange={handleQuiz}
                        required
                        type="date"
                        placeholder="কোর্স টাইটেল লিখুন"
                        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 text-black/50 placeholder:text-black/50 placeholder:text-xs"
                      />
                      {!quiz.submitedLastDate && (
                        <p className="text-xs text-red-500">{error}</p>
                      )}
                    </div>
                    <div className=" basis-1/4 flex flex-col w-full gap-2 mb-3 text-black/50">
                      <InputLabel label={"সাবমিটের শেষ সময়"} />
                      <input
                        name={"submitedLastTime"}
                        value={quiz.submitedLastTime}
                        onChange={handleQuiz}
                        required
                        type="text"
                        placeholder="HH : MM"
                        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 text-black/50 placeholder:text-black/50 placeholder:text-xs"
                      />
                      {!quiz.submitedLastTime && (
                        <p className="text-xs text-red-500">{error}</p>
                      )}
                    </div> */}
                  </div>
                  {/* Course,   Module*/}
                  <div className="flex gap-5 items-center justify-between">
                    <div className=" basis-2/4 flex flex-col w-full gap-2 mb-3 relative">
                      <InputLabel label="কুইজ এর কোর্স সিলেক্ট করুন" />
                      <select
                        name={"courseId"}
                        onChange={(e) => {
                          handleQuiz(e);
                        }}
                        className="py-3 text-black appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                        id=""
                      >
                        <option
                          selected
                          disabled
                          className="text-black dark:text-white"
                          value=""
                        >
                          Select One
                        </option>
                        {courseData?.map((course) => (
                          <option
                            key={course._id}
                            className="text-black "
                            value={course._id}
                            selected={course?._id === quiz?.courseId}
                          >
                            {course.title}
                          </option>
                        ))}
                      </select>

                      <div className="absolute inset-y-0 right-0 top-[40%]  flex items-center px-2 pointer-events-none">
                        <svg
                          className="fill-current h-4 w-4 text-black dark:text-white border border-solid border-black/30 rounded-full leading-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12L5 7h10l-5 5z" />
                        </svg>
                      </div>
                      {!quiz.quizCourse && (
                        <p className="text-xs text-red-500">{error}</p>
                      )}
                    </div>
                    <div className=" basis-2/4 flex flex-col w-full gap-2 mb-3 relative">
                      <InputLabel label="মডিউল সিলেক্ট করুন" />
                      <select
                        name={"moduleId"}
                        onChange={handleQuiz}
                        className="py-3 text-black appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                      >
                        <option className="text-black dark:text-white" disabled>
                          মডিউল সিলেক্ট করুন
                        </option>

                        {module?.map((m) => (
                          <option
                            key={m._id}
                            className="text-black dark:text-white"
                            value={m._id}
                            selected={m?._id === quiz?.moduleId}
                          >
                            {m?.title}
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
                      {!quiz.quizModule && (
                        <p className="text-xs text-red-500">{error}</p>
                      )}
                    </div>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={() => handleConfrimModal(onClose)}
                  type="submit"
                  className="bg-secondaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
                >
                  {id ? "Update Quiz" : "Add Quiz"}
                  <MdOutlineQuiz size={24} />
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
        message="Your  quiz has been added successfully."
        isOpen={isOpenConfrimModal}
        onOpenChange={onOpenChangeConfrimModal}
      />
    </>
  );
};

export default AddQuizModal;
