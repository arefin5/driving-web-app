import React, { useState } from "react";
import icone1 from "/public/assets/IncludeCourse/icon1.svg";
import icone2 from "/public/assets/IncludeCourse/icon2.svg";
import icone3 from "/public/assets/IncludeCourse/icon3.svg";
import icone4 from "/public/assets/IncludeCourse/icon4.svg";
import icone5 from "/public/assets/IncludeCourse/icon5.svg";
import icone6 from "/public/assets/IncludeCourse/icon6.svg";
import icone7 from "/public/assets/IncludeCourse/icon7.svg";
import banner1 from "/public/assets/IncludeCourse/liveClass.png";
import banner2 from "/public/assets/IncludeCourse/liveClass2.png";
import Image from "next/image";
import bg from "/public/assets/IncludeCourse/includeCoursebg.svg";

const BetweenCourse = () => {
  const [show, setShow] = useState("২৩০০ প্রশ্নের উত্তর");

  return (
    <div
      style={{ background: `url(${bg.src})` }}
      className=" pt-24 px-5 py-10 md:px-10 bg-cover bg-no-repeat bg-center font-liador"
    >
      <div className="container">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-3xl font-semibold">
            আমাদের কোর্স এ যা যা থাকছে
          </h1>
          <p className="text-lg md:text-xl mt-4 mb-16 text-center text-white">
            আপনাকে ড্রাইভিং শেখায় সবার চেয়ে এগিয়ে রাখতে আমাদের কোর্সে যা রয়েছে
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-11">
          {/* fst */}
          <div className="md:w-4/12 flex flex-col gap-5">
            <button
              // autoFocus
              onClick={() => setShow("২৩০০ প্রশ্নের উত্তর")}
              className="flex  text-primary   focus:border-2 focus:border-solid focus:border-secondarySolid outline-none w-full items-center gap-4 bg-white px-4 py-2 rounded relative focus:within:triangle_right"
            >
              <Image src={icone1} height={36} width={36} alt=""></Image>
              <p className="font-semibold lg:text-lg  ">২৩০০ প্রশ্নের উত্তর</p>
              {show === "২৩০০ প্রশ্নের উত্তর" && (
                <>
                  <div className="w-0 h-0 border-t-[17px] border-t-transparent  border-l-[25px] border-l-white border-b-[17px] border-b-transparent -right-6 absolute  "></div>
                </>
              )}
            </button>

            <button
              onClick={() => setShow("প্রতিটি ট্রাফিক রুলস উপর ভিডিও")}
              className="flex  text-primary   focus:border-2 focus:border-solid focus:border-secondarySolid outline-none w-full items-center gap-4 bg-white px-4 py-2 rounded relative focus:within:triangle_right"
            >
              <Image src={icone2} height={36} width={36} alt=""></Image>
              <p className="font-semibold lg:text-lg">
                প্রতিটি ট্রাফিক রুলস উপর ভিডিও
              </p>
              {show === "প্রতিটি ট্রাফিক রুলস উপর ভিডিও" && (
                <div className="w-0 h-0 border-t-[17px] border-t-transparent absolute border-l-[25px] border-l-white border-b-[17px] border-b-transparent -right-6"></div>
              )}
            </button>
            <button
              onClick={() => setShow("কঠিন শব্দগুলোর ফ্লাশ কার্ড")}
              className="flex  text-primary   focus:border-2 focus:border-solid focus:border-secondarySolid outline-none w-full items-center gap-4 bg-white px-4 py-2 rounded relative focus:within:triangle_right"
            >
              <Image src={icone3} height={36} width={36} alt=""></Image>
              <p className="font-semibold lg:text-lg">
                কঠিন শব্দগুলোর ফ্লাশ কার্ড
              </p>
              {show === "কঠিন শব্দগুলোর ফ্লাশ কার্ড" && (
                <div className="w-0 h-0 border-t-[17px] border-t-transparent absolute border-l-[25px] border-l-white border-b-[17px] border-b-transparent -right-6"></div>
              )}
            </button>
            <button
              onClick={() => setShow("সহজ বাংলা ভাষার ব্যবহার")}
              className="flex  text-primary   focus:border-2 focus:border-solid focus:border-secondarySolid outline-none w-full items-center gap-4 bg-white px-4 py-2 rounded relative focus:within:triangle_right"
            >
              <Image src={icone4} height={36} width={36} alt=""></Image>
              <p className="font-semibold lg:text-lg">
                সহজ বাংলা ভাষার ব্যবহার
              </p>
              {show === "সহজ বাংলা ভাষার ব্যবহার" && (
                <div className="w-0 h-0 border-t-[17px] border-t-transparent absolute border-l-[25px] border-l-white border-b-[17px] border-b-transparent -right-6"></div>
              )}
            </button>
            <button
              onClick={() => setShow("৩ ধাপে শিখন পদ্ধতি")}
              className="flex  text-primary   focus:border-2 focus:border-solid focus:border-secondarySolid outline-none w-full items-center gap-4 bg-white px-4 py-2 rounded relative focus:within:triangle_right"
            >
              <Image src={icone5} height={40} width={40} alt=""></Image>
              <p className="font-semibold lg:text-lg">৩ ধাপে শিখন পদ্ধতি</p>
              {show === "৩ ধাপে শিখন পদ্ধতি" && (
                <div className="w-0 h-0 border-t-[17px] border-t-transparent absolute border-l-[25px] border-l-white border-b-[17px] border-b-transparent -right-6"></div>
              )}
            </button>
            <button
              onClick={() => setShow("১৫০+ এনিমেটেড ভিডিও")}
              className="flex  text-primary focus:border-2 focus:border-solid focus:border-secondarySolid outline-none w-full items-center gap-4 bg-white px-4 py-2 rounded relative focus:within:triangle_right"
            >
              <Image src={icone6} height={40} width={40} alt=""></Image>
              <p className="font-semibold lg:text-lg">১৫০+ এনিমেটেড ভিডিও</p>
              {show === "১৫০+ এনিমেটেড ভিডিও" && (
                <div className="w-0 h-0 border-t-[17px] border-t-transparent absolute border-l-[25px] border-l-white border-b-[17px] border-b-transparent -right-6"></div>
              )}
            </button>
            <button
              onClick={() => setShow("ফিজিক্যাল বই")}
              className="flex  text-primary focus:border-2 focus:border-solid focus:border-secondarySolid outline-none w-full items-center gap-4 bg-white px-4 py-2 rounded relative focus:within:triangle_right"
            >
              <Image src={icone7} height={40} width={40} alt=""></Image>
              <p className="font-semibold lg:text-lg">ফিজিক্যাল বই</p>
              {show === "ফিজিক্যাল বই" && (
                <div classname="w-0 h-0 border-t-[17px] border-t-transparent absolute border-l-[25px] border-l-white border-b-[17px] border-b-transparent -right-6"></div>
              )}
            </button>
          </div>

          {/* 2nd */}
          <div className="md:w-8/12">
            {show === "২৩০০ প্রশ্নের উত্তর" && (
              <Image
                src={banner2}
                className="w-full h-full md:h-[515px]"
                alt=""
              ></Image>
            )}
            {show === "প্রতিটি ট্রাফিক রুলস উপর ভিডিও" && (
              <Image
                src={banner1}
                className="w-full h-full md:h-[515px]"
                alt=""
              ></Image>
            )}
            {show === "কঠিন শব্দগুলোর ফ্লাশ কার্ড" && (
              <Image
                src={banner2}
                className="w-full h-full md:h-[515px]"
                alt=""
              ></Image>
            )}
            {show === "সহজ বাংলা ভাষার ব্যবহার" && (
              <Image
                src={banner1}
                className="w-full h-full md:h-[515px]"
                alt=""
              ></Image>
            )}
            {show === "৩ ধাপে শিখন পদ্ধতি" && (
              <Image
                src={banner2}
                className="w-full h-full md:h-[515px]"
                alt=""
              ></Image>
            )}
            {show === "১৫০+ এনিমেটেড ভিডিও" && (
              <Image
                src={banner1}
                className="w-full h-full md:h-[515px]"
                alt=""
              ></Image>
            )}
            {show === "ফিজিক্যাল বই" && (
              <Image
                src={banner2}
                className="w-full h-full md:h-[515px]"
                alt=""
              ></Image>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetweenCourse;
