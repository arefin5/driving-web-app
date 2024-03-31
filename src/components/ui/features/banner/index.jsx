import React from "react";
import Image from "next/image";

const BannerImage = () => {
  return (
    <div className="relative grid grid-cols-3 py-[10rem] w-full h-[300px]">
      <div className="absolute inset-0">
        <Image
          src="/assets/carouselbanner/backgroundImage.png"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
      </div>
      <div className="absolute flex justify-center items-center gap-3 px-[400px] py-[100px]">
        <div className=" flex justify-center items-center ">
          <Image
            src="/assets/carouselbanner/icon1.png"
            alt="bg image icon"
            sizes="100vw"
            width={60}
            height={55}
          />
        </div>
        <div className=" text-white ">
          <h1 className="text-2xl font-thin">Enjoy Lifetime Access</h1>
          <h1> Watch Video Anywhere</h1>
        </div>
      </div>
      <div className=" flex absolute justify-center items-center gap-3 px-[800px] py-[100px]">
        <div className=" flex justify-center items-center ">
          <Image
            src="/assets/carouselbanner/icon2.png"
            alt="bg image icon"
            sizes="100vw"
            width={60}
            height={55}
          />
        </div>
        <div className=" text-white ">
          <h1 className="text-2xl font-thin">Enjoy Lifetime Access</h1>
          <h1> Watch Video Anywhere</h1>
        </div>
      </div>
      <div className=" flex absolute justify-center items-center gap-3 px-[1200px] pr-[456px] mt-[100px]">
        <div className=" flex justify-center items-center ">
          <Image
            src="/assets/carouselbanner/icon3.png"
            alt="bg image icon"
            sizes="100vw"
            width={60}
            height={55}
          />
        </div>
        <div className=" text-white ">
          <h1 className="text-2xl font-thin">Enjoy Lifetime Access</h1>
          <h1> Watch Video Anywhere</h1>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default BannerImage;
