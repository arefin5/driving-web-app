import React from "react";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

const GenericCategories = ["100", "15", "8825", "1122"];

const SearchBox = () => {
  return (
    <div className="bg-loginButton p-2 rounded-3xl ">
      <div className="bg-[#F3F5F9] rounded-2xl px-3 md:px-5 lg:px-20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
          {/* fst  */}
          <div className="flex justify-between items-center gap-3">
            <div className="flex items-center bg-[#E6E6E6] rounded-lg">
              <MdOutlineCheckCircleOutline className="text-[47px] bg-primarySolid text-white p-1 rounded-full" />

              <select
                defaultValue={"সিলেক্ট কান্ট্রি"}
                className="text-sm md:text-xl font-semibold text-primary bg-transparent outline-0 border-0 appearance-none  py-2 px-[10px]"
                name=""
                id=""
              >
                <option disabled value="সিলেক্ট কান্ট্রি">
                  সিলেক্ট কান্ট্রি
                </option>
                <option value="country one">country one</option>
                <option value="country two">country two</option>
                <option value="country three">country three</option>
              </select>
            </div>
            <div className="flex items-center bg-[#E6E6E6] rounded-lg">
              <MdOutlineCheckCircleOutline className="text-[47px] bg-secondarySolid text-white p-1 rounded-full" />
              <select
                defaultValue={"সিলেক্ট কোর্স"}
                className="text-sm md:text-xl font-semibold text-primary bg-transparent outline-0 border-0 appearance-none  py-2 px-[10px]"
                name=""
                id=""
              >
                <option disabled value="সিলেক্ট কান্ট্রি">
                  সিলেক্ট কোর্স
                </option>
                <option value="country one">Course one</option>
                <option value="country two">Course two</option>
                <option value="country three">Course three</option>
              </select>
            </div>
          </div>

          {/* 2nd  */}
          <div className="flex gap-5">
            <select
              defaultValue={"Enter Your subject"}
              name="course"
              className="border-2 border-stone-200 p-2 w-full text-sm focus:outline-none rounded-lg placeholder:text-black/40  dark:bg-darkbg dark:text-white"
            >
              <option value="Enter Your subject" disabled>
                Enter Your subject
              </option>

              {GenericCategories?.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <button className="border-2 rounded-lg border-stone-200 text-black/40 font-roboto font-medium px-6 py-2">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
