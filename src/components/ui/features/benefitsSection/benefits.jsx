import Image from "next/image";
const BenefitsSection = () => {
  return (
    <div className="py-20">
      <div className="px-5 font-liador ">
        <div
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="container rounded-2xl font-liador flex gap-[30px] p-[26px] lg:px-20 md:py-[60px] md:gap-0  flex-wrap items-center bg-primarySolid justify-center "
        >
          <div className="relative mb-5 md:mb-[70px] ">
            <h2 className=" md:text-4xl text-2xl font-normal text-white  text-center">
              আমাদের থেকে আপনি কি কি সুবিধা পাবেন
            </h2>
            <div className="pb-2 absolute -top-6 right-0 md:-right-12">
              <Image
                src="/assets/benefitsSectionBanner/icon.png"
                width={50}
                height={50}
                alt="benefits"
              />
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-4 lg:gap-12 items-center justify-between lg:justify-around w-full">
            <div className="w-full flex flex-col gap-6">
              <div className="">
                <Image
                  src="/assets/benefitsSectionBanner/benefits1.svg"
                  width={95}
                  height={70}
                  alt="benefits"
                  className="mx-auto md:w-14 lg:w-[95px]"
                />
              </div>

              <p className="text-center lg:text-2xl font-semibold text-white">
                ইন্ডাস্ট্রি এক্সপার্টদের কনটেন্ট
              </p>
            </div>
            <div className="w-full flex flex-col gap-6">
              <div className="">
                <Image
                  src="/assets/benefitsSectionBanner/benefits2.svg"
                  width={105}
                  height={70}
                  alt="benefits"
                  className="mx-auto md:w-14 lg:w-[95px]"
                />
              </div>

              <p className="text-center lg:text-2xl font-semibold text-white">
                মেন্টরদের সরাসরি সাপোর্ট
              </p>
            </div>
            <div className="w-full flex flex-col gap-6">
              <div className="">
                <Image
                  src="/assets/benefitsSectionBanner/benefits3.svg"
                  width={56}
                  height={70}
                  alt="benefits"
                  className="mx-auto md:w-9 lg:w-[56px]"
                />
              </div>

              <p className="text-center lg:text-2xl font-semibold text-white">
                লার্নিং, কুইজ ও অ্যাসাইনমেন্ট
              </p>
            </div>
            <div className="w-full flex flex-col gap-6">
              <div className="">
                <Image
                  src="/assets/benefitsSectionBanner/benefits4.svg"
                  width={45}
                  height={70}
                  alt="benefits"
                  className="mx-auto md:w-8 lg:w-[45px]"
                />
              </div>

              <p className="text-center lg:text-2xl font-semibold text-white">
                ভেরিফাইড সার্টিফিকেট
              </p>
            </div>
            <div className="w-full flex flex-col gap-6">
              <div className="">
                <Image
                  src="/assets/benefitsSectionBanner/benefits5.svg"
                  width={74}
                  height={70}
                  alt="benefits"
                  className="mx-auto md:w-14 lg:w-[74px]"
                />
              </div>

              <p className="text-center lg:text-2xl font-semibold text-white">
                সুবিধামতো সময়ে শেখা
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
