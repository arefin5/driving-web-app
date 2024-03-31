"use client";
import { useState } from "react";
import InputLabel from "../../UserDashboard/UserProfile/InputLabel";
import { FaRegCircleCheck } from "react-icons/fa6";

const QuizAndOptions = ({
  questionNumber,
  questionValue,
  questionOnChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleRadioChange = (event) => {
    const newValue = +event.target.value;
    setSelectedOption(newValue);
  };
  return (
    <div className="flex flex-col border-t pt-4  gap-3 border-[#CE2786] border-solid mb-4">
      <InputLabel label={questionNumber} />
      <textarea
        onChange={(e) => questionOnChange(e, index)}
        className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50"
        name=""
        id=""
        cols="30"
        rows="3"
        placeholder="এখানে প্রশ্ন লিখুন..."
      ></textarea>
      {/* Options */}
      <div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-4 ">
          {/* Option one design */}
          <div className="flex items-center gap-5">
            <label
              className={` border border-solid flex-1 py-2 px-6 rounded-lg cursor-pointer`}
            >
              <input
                type="radio"
                name={"selectAns"}
                value={1}
                checked={selectedOption === 1}
                onChange={handleRadioChange}
                className="hidden"
              />
              <h2 className="flex items-center gap-4 text-xs">
                <span
                  className={` bg-[#C3C9D5]/20 inline-block text-center w-8 h-8 rounded-full leading-8 `}
                >
                  1
                </span>
                অপশন ১...
              </h2>
            </label>
            <div className="w-8 h-8 bg-[#F2F2F2] border border-solid border-black/60 flex items-center justify-center rounded-full">
              {selectedOption === 1 && (
                <FaRegCircleCheck color="#03B562" size={20} />
              )}
            </div>
          </div>
          {/* Option two design */}
          <div className="flex items-center gap-5">
            <label
              className={` border border-solid flex-1 py-2 px-6 rounded-lg cursor-pointer`}
            >
              <input
                type="radio"
                name={"selectAns"}
                value={2}
                checked={selectedOption === 2}
                onChange={handleRadioChange}
                className="hidden"
              />
              <h2 className="flex items-center gap-4 text-xs">
                <span
                  className={` bg-[#C3C9D5]/20 inline-block text-center w-8 h-8 rounded-full leading-8 `}
                >
                  1
                </span>
                অপশন 2...
              </h2>
            </label>
            <div className="w-8 h-8 bg-[#F2F2F2] border border-solid border-black/60 flex items-center justify-center rounded-full">
              {selectedOption === 2 && (
                <FaRegCircleCheck color="#03B562" size={20} />
              )}
            </div>
          </div>
          {/* Option three design */}
          <div className="flex items-center gap-5">
            <label
              className={` border border-solid flex-1 py-2 px-6 rounded-lg cursor-pointer`}
            >
              <input
                type="radio"
                name={"selectAns"}
                value={3}
                checked={selectedOption === 3}
                onChange={handleRadioChange}
                className="hidden"
              />
              <h2 className="flex items-center gap-4 text-xs">
                <span
                  className={` bg-[#C3C9D5]/20 inline-block text-center w-8 h-8 rounded-full leading-8 `}
                >
                  1
                </span>
                অপশন 3...
              </h2>
            </label>
            <div className="w-8 h-8 bg-[#F2F2F2] border border-solid border-black/60 flex items-center justify-center rounded-full">
              {selectedOption === 3 && (
                <FaRegCircleCheck color="#03B562" size={20} />
              )}
            </div>
          </div>
          {/* Option four design */}
          <div className="flex items-center gap-5">
            <label
              className={` border border-solid flex-1 py-2 px-6 rounded-lg cursor-pointer`}
            >
              <input
                type="radio"
                name={"selectAns"}
                value={4}
                checked={selectedOption === 4}
                onChange={handleRadioChange}
                className="hidden"
              />
              <h2 className="flex items-center gap-4 text-xs">
                <span
                  className={` bg-[#C3C9D5]/20 inline-block text-center w-8 h-8 rounded-full leading-8 `}
                >
                  1
                </span>
                অপশন 4...
              </h2>
            </label>
            <div className="w-8 h-8 bg-[#F2F2F2] border border-solid border-black/60 flex items-center justify-center rounded-full">
              {selectedOption === 4 && (
                <FaRegCircleCheck color="#03B562" size={20} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizAndOptions;
