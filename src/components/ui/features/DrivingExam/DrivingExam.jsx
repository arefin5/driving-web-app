import Image from "next/image";
import driveExam from "/public/assets/driveExam/driveExam.png";
const DrivingExam = () => {
  return (
    <div
      style={{
        // background: `url(${bg.src}), #F5F6FA`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="font-liador py-[60px] dark:!bg-[url(/assets/driveExam/darkbg.svg)] !bg-[url(/assets/driveExam/driveExambg.svg)] "
    >
      <div className=" flex flex-col md:flex-row-reverse container justify-center items-center w-full">
        <div className=" flex flex-col  justify-center basis-1/2">
          <div className="flex relative max-w-[462px]">
            <h2 className=" lg:text-5xl text-2xl primary-text-color dark:text-white  lg:py-5 font-semibold">
              <span className="lg:text-[40px] block">
                ড্রাইভিং পরিক্ষার পূর্নাঙ্গ প্রস্তুতি
              </span>
              শুরুটা হোক ড্রাইভ শিখুন এর সাথে
            </h2>
            <div className="absolute -right-8 -top-10">
              <Image
                src="/assets/benefitsSectionBanner/icon.png"
                width={100}
                height={100}
                alt="benefits"
              />
            </div>
          </div>
          <p className=" lg:text-2xl py-3 primary-text-color dark:text-white ">
            এখন আপনি যেখানেই থাকুন, ম্যাটার করে না কিছুই! কারণ সবাই শিখছে আর
            জিতছে দেশের সবচেয়ে নির্ভরযোগ্য ড্রাইভিং লার্নিং প্রতিষ্ঠান ড্রাইভ
            শিখুন এর সাথে। কিন্তু কীভাবে? জানতে পাশে ভিডিওটি দেখে নেও।
          </p>

          <div className=" flex gap-4  mt-3 md:mt-8">
            <button
              title="learn more"
              type="button"
              className=" px-9  flex justify-center items-center py-3 bg-primaryGradiant text-white rounded-md gap-2 "
            >
              আরো জানুন
            </button>
          </div>
        </div>
        <div className="basis-1/2 mt-5 md:mt-0">
          <Image src={driveExam} width={564} height={412} alt="driving skill" />
        </div>
      </div>
    </div>
  );
};

export default DrivingExam;
