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
import { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const AddQuestionBaseAndExamModal = ({ isOpen, onOpenChange }) => {
  const [content, setContent] = useState("");
  const editor = useRef(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [questionType, setQuestionType] = useState(""); 

  // Function to handle change in question type
  const handleQuestionTypeChange = (e) => {
    setQuestionType(e.target.value);
  };

  const [singleChoiceOptions, setSingleChoiceOptions] = useState([
    { value: "", isTrue: false },
  ]);

  // Function to add a new single choice option
  const addSingleChoiceOption = () => {
    setSingleChoiceOptions([
      ...singleChoiceOptions,
      { value: "", isTrue: false },
    ]);
  };

  // Function to remove a single choice option
  const removeSingleChoiceOption = (index) => {
    const updatedOptions = [...singleChoiceOptions];
    updatedOptions.splice(index, 1);
    setSingleChoiceOptions(updatedOptions);
  };

  // Function to handle checkbox toggle for single choice
  const toggleSingleChoiceCheckbox = (index) => {
    const updatedOptions = singleChoiceOptions.map((option, i) => {
      if (i === index) {
        return { ...option, isTrue: !option.isTrue };
      } else {
        return { ...option, isTrue: false }; 
      }
    });
    setSingleChoiceOptions(updatedOptions);
  };
  const [multipleChoiceOptions, setMultipleChoiceOptions] = useState([
    { value: "", isTrue: false },
  ]);

  // Function to add a new multiple choice option
  const addMultipleChoiceOption = () => {
    setMultipleChoiceOptions([
      ...multipleChoiceOptions,
      { value: "", isTrue: false },
    ]);
  };

  // Function to remove a multiple choice option
  const removeMultipleChoiceOption = (index) => {
    const updatedOptions = [...multipleChoiceOptions];
    updatedOptions.splice(index, 1);
    setMultipleChoiceOptions(updatedOptions);
  };

  // Function to handle checkbox toggle for multiple choice
  const toggleMultipleChoiceCheckbox = (index) => {
    const updatedOptions = [...multipleChoiceOptions];
    updatedOptions[index] = {
      ...updatedOptions[index],
      isTrue: !updatedOptions[index].isTrue,
    };
    setMultipleChoiceOptions(updatedOptions);
  };

  const { isOpen: isOpenConfrimModal, onOpenChange: onOpenChangeConfrimModal } =
    useDisclosure();

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
                  Add Question Base And Exam
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
                  >
                    <option className="text-black/50" value="">
                      Select One
                    </option>
                    <option className="text-black/50 ">Option 1</option>
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
                  <InputLabel label="Select Category" />
                  <select
                    defaultValue={"select Category..."}
                    className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  w-full"
                    name="selectedModule"
                  >
                    <option className="text-black/50" value="">
                      Select One
                    </option>

                    <option className="text-black/50 ">option 2</option>
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

                <div className=" flex flex-col w-full gap-2 mb-3">
                  <InputLabel label={"Question"} />
                  <input
                    type="text"
                    placeholder="Type Your Question..."
                    className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs  dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                  />
                </div>

                <div>
                  <div className=" flex relative flex-col w-full gap-2 mb-3">
                    <InputLabel label="Select Question Video or Image" />
                    <select
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      defaultValue={"select Question Video or Image..."}
                      className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  w-full"
                      name="selectedModule"
                    >
                      <option className="text-black/50 ">Select One..</option>

                      <option className="text-black/50" value="video">
                        Video
                      </option>

                      <option className="text-black/50" value="image">
                        Image
                      </option>
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

                  {/* Image upload */}
                  {selectedOption === "image" && (
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
                        className=" hidden"
                      />
                    </div>
                  )}
                  {/* video upload  */}
                  {selectedOption === "video" && (
                    <div className="flex flex-col w-full gap-2 mb-3 relative">
                      <span className="text-base font-semibold primary-text-color">
                        Upload Video (optional)
                      </span>{" "}
                      <label
                        htmlFor="learnVideo"
                        className="py-3 px-1 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs"
                      >
                        <span className="bg-primaryGradiant py-1 px-[14px] inline-block text-xs font-semibold rounded text-white">
                          Choose File
                        </span>
                      </label>
                      <input
                        id="learnVideo"
                        required
                        type="file"
                        accept="video/*"
                        name="learnVideo"
                        className="hidden"
                      />
                    </div>
                  )}
                </div>

                {/* Select Pattern type  */}
                <div className=" flex relative flex-col w-full gap-2 mb-3">
                  <InputLabel label="Select Pattern" />
                  <select
                    value={questionType} 
                    onChange={handleQuestionTypeChange} 
                    defaultValue={"select Pattern..."}
                    className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  w-full"
                    name="selectedModule"
                  >
                    <option className="text-black/50 ">Select One..</option>

                    <option className="text-black/50" value="trueFalse">
                      True/False
                    </option>

                    <option className="text-black/50" value="singleChoice">
                      Single Choice
                    </option>
                    <option className="text-black/50" value="multipleChoice">
                      Multiple Choice
                    </option>
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

                {/* true false Pattern type */}
                {questionType === "trueFalse" && (
                  <div>
                    <div className=" flex relative flex-col w-full gap-2 mb-3">
                      <InputLabel label="Select  Output for True or False" />
                      <select
                        defaultValue={"select Category..."}
                        className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  w-full"
                        name="selectedModule"
                      >
                        <option className="text-black/50" value="">
                          Select One
                        </option>

                        <option className="text-black/50 ">True</option>
                        <option className="text-black/50 ">False</option>
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
                  </div>
                )}
                {/* Single Choice Pattern type */}
                {questionType === "singleChoice" && (
                  <div>
                    {/* Display options */}
                    <InputLabel label="Single Choice Options" />
                    {singleChoiceOptions.map((option, index) => (
                      <div key={index} className="flex gap-2 mb-3">
                        <input
                          type="text"
                          value={option.value}
                          className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  w-full"
                          onChange={(e) => {
                            const updatedOptions = [...singleChoiceOptions];
                            updatedOptions[index].value = e.target.value;
                            setSingleChoiceOptions(updatedOptions);
                          }}
                          placeholder="Option..."
                        />
                        <label>
                          <input
                            type="checkbox"
                            checked={option.isTrue}
                            onChange={() => toggleSingleChoiceCheckbox(index)}
                            className="mr-1"
                          />
                        </label>
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => removeSingleChoiceOption(index)}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    {/* Button to add new option */}
                    <button
                      type="button"
                      onClick={addSingleChoiceOption}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Add Option
                    </button>
                  </div>
                )}
                {/* Multipule Pattern type */}
                {questionType === "multipleChoice" && (
                  <div>
                    <InputLabel label="Multiple Choice Options" />

                    {multipleChoiceOptions.map((option, index) => (
                      <div key={index} className="flex gap-2 mb-3">
                        <input
                          type="text"
                          value={option.value}
                          className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50  w-full"
                          onChange={(e) => {
                            const updatedOptions = [...multipleChoiceOptions];
                            updatedOptions[index].value = e.target.value;
                            setMultipleChoiceOptions(updatedOptions);
                          }}
                          placeholder="Option..."
                        />
                        <label>
                          <input
                            type="checkbox"
                            checked={option.isTrue}
                            onChange={() => toggleMultipleChoiceCheckbox(index)}
                            className="mr-1"
                          />
                        </label>
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => removeMultipleChoiceOption(index)}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addMultipleChoiceOption}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Add Option
                    </button>
                  </div>
                )}
                <div className=" flex flex-col w-full gap-2 mb-3 relative">
                  <InputLabel label={"Explanation"} />
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
                type="submit"
                className="bg-secondaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
              >
                Add Question
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
        </ModalContent>
      </Modal>
      {/* Handle open modal */}
      <ConformationModal
        message="category added successfully"
        isOpen={isOpenConfrimModal}
        onOpenChange={onOpenChangeConfrimModal}
      />
    </>
  );
};

export default AddQuestionBaseAndExamModal;
