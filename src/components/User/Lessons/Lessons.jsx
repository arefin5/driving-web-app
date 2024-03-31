"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Lessons = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [openSubDropdownIndex, setOpenSubDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    setOpenSubDropdownIndex(null); // Close sub-dropdown when main dropdown is toggled
  };

  const toggleSubDropdown = (index) => {
    setOpenSubDropdownIndex(openSubDropdownIndex === index ? null : index);
  };

  return (
    <div className="my-5 px-5">
      <div className="flex justify-end">
        <a
          href="#"
          className="bg-primaryGradiant text-xl uppercase text-white px-5 py-2 mt-1 rounded-lg mb-3"
        >
          Continue Course
        </a>
      </div>
      <div>
        <h2 className="text-center text-4xl text-slate-700 font-semibold mb-5">
          Driving Licence cat.B
        </h2>
        <div className="border border-solid border-gray-700 rounded-lg py-6">
          <ul>
            {[1, 2, 3, 4].map((index) => (
              <li key={index} className="py-3">
                <div
                  onClick={() => toggleDropdown(index)}
                  className="flex items-start gap-4 border-b last:border-0 border-solid text-xl border-slate-500 px-5 pb-3 cursor-pointer"
                >
                  <FaCheck size={20} />
                  Theory test: road signs and traffic rules
                </div>
                {/* Dropdown */}
                <ul
                  className={`${
                    openDropdownIndex === index ? "block" : "hidden"
                  } ml-8 mt-2`}
                >
                  {[1, 2, 3, 4].map((subIndex) => (
                    <li
                      key={subIndex}
                      onClick={() => toggleSubDropdown(subIndex)}
                      className="cursor-pointer border-b border-solid border-gray-400 py-2"
                    >
                      <div className="flex items-start gap-4 text-xl">
                        <FaCheck size={20} />
                        Dropdown 01
                      </div>
                      {/* Sub Dropdown */}
                      <ul
                        className={`${
                          openSubDropdownIndex === subIndex ? "block" : "hidden"
                        } ml-10 mt-4`}
                      >
                        <li className="">
                          <div className="flex items-start gap-4 text-xl">
                            <FaCheck size={20} />
                            sub Dropdown 01
                          </div>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
