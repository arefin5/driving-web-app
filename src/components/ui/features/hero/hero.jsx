"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
// import { CarouselData } from "@/src/utils/carouseldata";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "@/src/app/loading";
const Hero = () => {
  const [sliderData, setSliderData] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch data for the carousel

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://backend.driveshikhun.com/api/v1/sliders/getSliders`
        );
        const data = await response.json();

        setSliderData(data.data);

        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <section
      className={` dark:bg-[url(/assets/carouselImages/darkbg.svg)] bg-cover bg-no-repeat bg-[url(/assets/carouselImages/carouselBg.svg)]`}
    >
      <div className="py-12 md:py-[90px] lg:pb-[150px] ">
        <Swiper
          className="mySwiper"
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          keyboard={{
            enabled: true,
          }}
          loop={true}
        >
          {sliderData?.map((data, index) => {
            const toptitles = data.topSubtitle.split(" ");
            const titles = data.title.split(" ");

            return (
              <SwiperSlide key={index}>
                <div className=" flex md:flex-row flex-col container md:justify-between justify-center text-center md:text-left items-center w-full z-auto">
                  <div className=" flex flex-col justify-center ">
                    <h1 className="lg:text-4xl md:text-xl text-lg primary-text-color dark:text-white  font-liador">
                      <span className="font-roboto font-medium ">
                        {toptitles[0]} {toptitles[1]}
                      </span>
                      <span className="pl-2">
                        {toptitles.slice(2).join(" ")}
                      </span>
                    </h1>
                    <h2 className="lg:text-5xl md:text-[26px] text-2xl">
                      <span className="font-roboto_serif -tracking-[1px] dark:text-white   second-text-color font-medium ">
                        {titles[0]}
                      </span>
                      <span className=" primary-text-color dark:text-white   pl-2 font-semibold font-liador">
                        {titles.slice(1).join(" ")}
                      </span>
                    </h2>
                    <p className=" lg:text-2xl md:text-sm text-base primary-text-color dark:text-white  md:mb-6 mb-3 font-normal mt-2">
                      {data.subTitle}
                    </p>
                    <p className=" text-xs lg:text-base primary-text-color dark:text-white  md:pb-8 pb-6">
                      {data.text}
                    </p>
                    <div className=" flex flex-col md:flex-row justify-center md:justify-start gap-4 font-liador">
                      <Link
                        href={data.appStoreLink}
                        title="app store"
                        type="button"
                        className=" font-liador px-6 flex justify-center items-center w-auto py-3 bg-secondaryGradiant text-white rounded-lg gap-2 "
                      >
                        <span>
                          <FaAppStoreIos size={24} />
                        </span>
                        <span>অ্যাপ স্টোর</span>
                      </Link>
                      <Link
                        href={data.googlePlayLink}
                        title="google play store"
                        type="button"
                        className="font-liador px-6 flex justify-center items-center py-3 border border-secondarySolid rounded-lg second-text-color  gap-2 "
                      >
                        <span>
                          <BiLogoPlayStore
                            size={24}
                            className="text-secondarySolid"
                          />
                        </span>
                        <span>গুগল প্লে স্টোর</span>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-5 md:mt-0">
                    <Image
                      src={data.img}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt={data.title}
                      style={{
                        width: "450px",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
