import React from "react";
import Image from "next/image";
import DownloadImage from "/public/assets/DownloadApp/downloadApp.svg";
import { FaAppStoreIos, FaGooglePlay, FaWindows } from "react-icons/fa6";

const ApplicationSection = () => {
  return (
    <div
      className=" py-2 lg:py-20  font-liador"
      style={{
        background: `#FFF5F3`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div
          className="  rounded-lg md:bg-cover "
          style={{
            background: `#fff`,
            backgroundPosition: "center",
            // backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex md:flex-row flex-col lg:p-14 p-2  justify-between ">
            <div className=" md:basis-2/3 basis-full">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-[52px]  lg:pt-[70px] mb-4 primary-text-color">
                ডাউনলোড করুন আমাদের অ্যাপ
              </h2>
              <div>
                <p className="md:text-xl lg:text-[28px] primary-text-color font-semibold mb-[76px]">
                  বেস্ট এক্সপেরিয়েন্স পেতে, এখনই ডাউনলোড করুন{" "}
                  <span className="second-text-color">‘ড্রাইভ শিখুন’</span>{" "}
                  অ্যাপ{" "}
                  <span className="text-2xl primary-text-color font-normal block">
                    এবং প্রস্তুতি নিন যেকোনো সময়, যেকোনো জায়গায়।
                  </span>
                </p>
                <div>
                  <div className="flex max-w-[312px] items-center gap-3">
                    <button
                      title="Play Store"
                      type="button"
                      className="basis-1/2 border text-primarySolid flex items-center gap-2 border-solid border-primarySolid rounded-lg p-3 font-semibold"
                    >
                      <FaGooglePlay size={24} />
                      গুগল প্লে স্টোর
                    </button>
                    <button
                      title="অ্যাপ স্টোর"
                      type="button"
                      className="basis-1/2 border text-primarySolid flex items-center gap-2 border-solid border-primarySolid rounded-lg py-3 px-6 font-semibold"
                    >
                      <FaAppStoreIos size={24} />
                      অ্যাপ স্টোর
                    </button>
                  </div>
                  <div className="max-w-[312px] mt-3">
                    <button
                      title="অ্যাপ স্টোর"
                      type="button"
                      className="flex-1 border text-primarySolid flex justify-center items-center gap-2 border-solid border-primarySolid w-full rounded-lg py-3 px-6 font-semibold"
                    >
                      <FaWindows size={24} />
                      উইন্ডোজ
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:basis-1/3 basis-full relative z-10">
              {/* <div
                className="absolute inset-0 rounded-lg"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(251,112,92,0.30) 0%, rgba(251,112,92,0.30) 100%)",
                  backdropFilter: "blur(155px)", // Apply blur
                }}
              ></div> */}
              <Image
                src={DownloadImage}
                width={400}
                height={400}
                alt="Picture of the author"
                className="w-full relative z-20 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSection;
