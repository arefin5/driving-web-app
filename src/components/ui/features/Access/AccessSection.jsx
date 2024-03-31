import Image from "next/image";
import AccessSetionbg from "/public/assets/carouselbanner/waveShape.svg";
import Feedback from "/public/assets/carouselbanner/Feedback.svg";
import Enroll from "/public/assets/carouselbanner/enroll.svg";
import FreeClass from "/public/assets/carouselbanner/FreeClass.svg";
const AccessSection = () => {
  return (
    <div className="px-5 ">
      <div
        style={{
          background: `url(${AccessSetionbg.src}), linear-gradient(95deg, #EB31A2 -46.2%, #2B388F 39.88%, #2B388F 72.9%, rgba(224, 56, 158, 0.80) 143.06%)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="container rounded-2xl font-liador mt-7 md:-mt-24 flex gap-[30px] px-4 py-7 xl:px-28 lg:px-10 lg:py-[60px] sm:gap-10 lg:gap-0  justify-center lg:justify-between flex-wrap lg:flex-nowrap items-center"
      >
        <div className="flex gap-2">
          <Image width={50} height={50} src={FreeClass} alt="free class" />
          <p className="text-base text-white font-semibold">
            উপভোগ করুন লাইফটাইম এক্সেস
            <span className="block text-sm font-normal">
              ভিডিও দেখুন যখন খুশি
            </span>
          </p>
        </div>
        <div className="flex gap-2">
          <Image width={40} height={50} src={Enroll} alt="enroll" />
          <p className="text-base text-white font-semibold">
            বিশ্বের সেরা ইন্সট্রাক্টরদের থেকে শিখুন
            <span className="block text-sm font-normal">
              ভিডিও দেখুন যখন খুশি
            </span>
          </p>
        </div>
        <div className="flex gap-2">
          <Image width={50} height={50} src={Feedback} alt="feedback" />
          <p className="text-base text-white font-semibold">
            আপনার সুন্দর ক্যারিয়ার তৈরি করুন
            <span className="block text-sm font-normal">
              ভিডিও দেখুন যখন খুশি
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessSection;
