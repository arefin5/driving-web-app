import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { MdPlayCircleOutline, MdAccountCircle } from "react-icons/md";

import { CourseData } from "../../../../utils/coursedata";
import background from "../../../../../public/assets/courseSection/background.png";
import courseOne from "/public/assets/courseSection/course1.png";

import SearchBox from "../../Home/SearchBox";

const CourseSection = () => {
  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="dark:!bg-[url(/assets/courseSection/darkbgcoursebt.svg)] !bg-[url(/assets/courseSection/bg.svg)] "
    >
      <div className="container pb-[100px] pt-16 font-liador mt-10">
        <SearchBox />
        <div className="  relative text-4xl mb-9 inline-block mt-12">
          <h2 className="pt-12 primary-text-color dark:text-white  font-semibold text-[36px] ">
            আপনার সেরা কোর্সটি বাছাই করুন
          </h2>
          <div className="absolute right-0 md:-right-16 -top-2">
            <Image
              src="/assets/benefitsSectionBanner/icon.png"
              width={70}
              height={70}
              alt="benefits"
            />
          </div>
        </div>
        <div className="rounded-lg">
          <Swiper
            spaceBetween={30}
            style={{
              backgroundImage: `linear-gradient(90deg, #FB705C 0%, #AA528B 47.75%, #5232BE 98.5%)`,

              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              padding: "50px",
            }}
            className="mySwiper rounded-lg"
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            loop={true}
            breakpoints={{
              767: {
                slidesPerView: 2, // Show 2 slides on tablets
              },
              1024: {
                slidesPerView: 3, // Show 3 slides on laptops
              },
              1440: {
                slidesPerView: 4, // Show 4 slides on laptops
              },
            }}
          >
            <div className="bg-red-500 my-class">
              {CourseData.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg ">
                    <Image
                      className="rounded-tr-lg rounded-tl-lg"
                      src={courseOne}
                      alt=""
                      width={400}
                      height={400}
                    />
                    <div className="px-4 py-2">
                      <p className="flex items-center text-secondarySolid text-xs">
                        {" "}
                        <GoDotFill className="text-secondarySolid" />{" "}
                        ক্যাটাগরি-বি
                      </p>
                      <h2 className="text-base font-semibold primary-text-color mt-4 mb-5">
                        1.1 সহজ ড্রাইভিং - ১০১টি অনুশীলন
                      </h2>
                      <div className="flex justify-between items-center">
                        <p className="flex items-center gap-2 second-text-color">
                          <MdPlayCircleOutline className="text-secondarySolid" />
                          ৬৭২টি লেসন
                        </p>
                        <p className="flex items-center gap-2 second-text-color">
                          <MdAccountCircle className="text-secondarySolid" />
                          ৬৭জন এনরোল
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
