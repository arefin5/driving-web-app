import TrustusBg from "/public/assets/TrustUs/whyTrustUsBg.svg";
import Diamond from "/public/assets/TrustUs/diamond.svg";
import Walet from "/public/assets/TrustUs/walet.svg";
import Camera from "/public/assets/TrustUs/camera.svg";
import BookApple from "/public/assets/TrustUs/bookApple.svg";
import Image from "next/image";
const TrustUs = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(90deg, #FB705C 0%, #AA528B 47.75%, #5232BE 98.5%)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="pt-14 pb-[228px]"
    >
      <div className="container font-liador">
        <div className=" flex p-0 gap-5 lg:gap-[150px] flex-col md:flex-row container justify-between items-center w-full">
          <div className="text-white flex flex-col max-w-[625px]  justify-center basis-1/2">
            <div className="flex relative ">
              <h2 className=" lg:text-[42px] text-2xl md:mb-8 mb-3  lg:py-5 font-semibold">
                কেনো আমাদের উপর আস্থা রাখবেন?
              </h2>
              <div className="absolute right-0 lg:-right-12 -top-10">
                <Image
                  src="/assets/benefitsSectionBanner/icon.png"
                  width={100}
                  height={100}
                  alt="benefits"
                  className="w-14 lg:w-[100px] "
                />
              </div>
            </div>
            <p className=" lg:text-2xl py-3 w-[90%]">
              ড্রাভিং এর উপর এক্সপাট এমন ক্যেকজন বিশেসজ্ঞ দ্বারা তৈরি আমাদের এই
              কোর্স তা ছাড়াও রয়েছে সহজে বোঝার জন্য এনিম্যাটেড ভিডিও। আপনার কোনো
              বিষয়ে সমস্যা হইলে অনলাইন সাপর্ট। তাই প্রতিটি বিষয় বিবেচনায় আমরা
              সবার থেকে একধাপ এগিয়ে।
            </p>
            <div className="inline-block">
              <button className="text-white border border-solid border-white rounded-lg px-9 py-3">
                Read more
              </button>{" "}
            </div>
          </div>
          <div className="basis-1/2 grid lg:justify-items-end grid-cols-2 gap-x-5 lg:gap-x-0 gap-y-5 md:gap-y-8">
            <div className="bg-[#F3F5F9] flex-col lg:flex-row lg:max-w-[238px] p-3 lg:p-6 rounded-lg flex gap-4 items-center lg:items-start ">
              <Image src={Diamond} alt="diamond" />
              <p className="lg:text-3xl primary-text-color">সেরা কনটেন্ট</p>
            </div>
            <div className="bg-[#F3F5F9] flex-col lg:flex-row lg:max-w-[238px] p-3 lg:p-6  rounded-lg flex gap-4 items-center lg:items-start ">
              <Image src={Camera} alt="diamond" />
              <p className="lg:text-3xl primary-text-color">
                সহজ স্টাডি ম্যাটেরিয়াল
              </p>
            </div>
            <div className="bg-[#F3F5F9] lg:max-w-[238px] p-3 lg:p-6  rounded-lg flex flex-col lg:flex-row gap-4 items-center lg:items-start ">
              <Image src={Walet} alt="diamond" />
              <p className="lg:text-3xl primary-text-color">
                স্বল্প খরচে অনেক কিছু
              </p>
            </div>
            <div className="bg-[#F3F5F9] lg:max-w-[238px] p-3 lg:p-6 items-center lg:items-start rounded-lg flex flex-col lg:flex-row gap-4">
              <Image src={BookApple} alt="diamond" />
              <p className="lg:text-3xl primary-text-color">সাবলীল উপস্থাপনা</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustUs;
