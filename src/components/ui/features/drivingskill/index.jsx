import Image from "next/image";
import skills from "/public/assets/drivingSkill/drivingskill.png";

const DrivingSkill = () => {
  return (
    <div
      className="pt-24 pb-10 font-liador dark:!bg-[url(/assets/drivingSkill/darkbg.svg)] !bg-[url(/assets/drivingSkill/background.png)] "
      style={{
        // backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" flex flex-col md:flex-row container justify-center items-center w-full">
        <div className=" flex flex-col  justify-center basis-1/2">
          <div className="flex relative">
            <h2 className=" lg:text-5xl text-2xl primary-text-color dark:text-white  lg:py-5 font-semibold">
              সঠিক অনুশীলনের মাধ্যমে স্টান্ডার্ড ড্রাইভিং ধারনা অর্জন করুন।
            </h2>
            <div className="absolute -right-12 -top-10">
              <Image
                src="/assets/benefitsSectionBanner/icon.png"
                width={100}
                height={100}
                className=""
                alt="benefits"
              />
            </div>
          </div>
          <p className=" lg:text-2xl py-3 primary-text-color dark:text-white  ">
            একেবারে বেসিক থেকে অ্যাডভান্সড লেভেল পর্যন্ত সবকিছু আপনি ধাপে ধাপে
            শিখবেন আমাদের ক্যারিয়ার ট্র্যাকগুলোতে। এর জন্য করবেন রিয়েল লাইফ
            প্রজেক্ট, যা জব ও ফ্রিল্যান্সিং মার্কেটে কাজ করার কনফিডেন্স এনে দেবে
            আপনাকে।
          </p>

          <div className=" flex gap-4 mt-3 md:mt-8">
            <button
              title="learn more"
              type="button"
              className=" px-9 flex justify-center items-center py-3 bg-primaryGradiant text-white rounded-md gap-2 "
            >
              আরো জানুন
            </button>
          </div>
        </div>
        <div className="basis-1/2 mt-5 md:mt-0 md:pl-[76px]">
          <Image src={skills} width={564} height={412} alt="driving skill"  />
        </div>
      </div> 



      
    </div>
  );
};

export default DrivingSkill;
