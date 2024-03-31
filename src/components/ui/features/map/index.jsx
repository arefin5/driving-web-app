import React from "react";
import MapData from "@/src/utils/Map.json";
import Image from "next/image";
import Lottie from "react-lottie";
const Map = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: MapData,
  };
  return (
    <div className=" container text-center font-liador pt-6 md:pt-12 lg:pt-[100px]">
      <div className=" relative max-w-[340px] mx-auto">
        <h1 className=" md:text-[42px] text-2xl dark:text-white  text-center primary-text-color font-normal py-3 ">
          আমরা আছি বিশ্বজুড়ে
        </h1>
        <div className="absolute right-0 md:-right-8 -top-5">
          <Image
            src="/assets/benefitsSectionBanner/icon.png"
            width={50}
            height={50}
            alt="benefits"
          />
        </div>
      </div>
      <div className="lg:-mt-20 ">
        <Lottie options={defaultOptions} height={"auto"} width={"full"} />
      </div>
    </div>
  );
};

export default Map;
