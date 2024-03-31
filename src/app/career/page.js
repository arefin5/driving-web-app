import NewBanner from "@/src/components/Shared/newBanner/NewBanner";
import Image from "next/image";

const CareerPage = () => {
  return (
    <div>
      <NewBanner bannerText="ক্যারিয়ার" />
      <div className="max-w-[1485px] mx-auto xl:px-5 2xl:px-0 lg:px-20 md:px-10 px-5 ">
        <div className="grid lg:grid-cols-2 gap-5 my-20 grid-cols-1">
          <div>
            <div className=" flex flex-col  justify-center basis-1/2">
              <div className="flex relative">
                <h2 className=" lg:text-5xl text-2xl primary-text-color dark:text-white  lg:py-5 font-semibold">
                  ক্যারিয়ারকে এগিয়ে নিতে আমাদের সাথে যোগ দিন এখনই
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
                একেবারে বেসিক থেকে অ্যাডভান্সড লেভেল পর্যন্ত সবকিছু আপনি ধাপে
                ধাপে শিখবেন আমাদের ক্যারিয়ার ট্র্যাকগুলোতে। এর জন্য করবেন রিয়েল
                লাইফ প্রজেক্ট, যা জব ও ফ্রিল্যান্সিং মার্কেটে কাজ করার কনফিডেন্স
                এনে দেবে আপনাকে।
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
          </div>
          <div>imgae</div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
