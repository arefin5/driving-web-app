const SuccessSection = () => {
  return (
    <section className="container font-liador py-5 md:py-14">
      <div
        style={{
          backgroundImage: `linear-gradient(90deg, #FB705C 0%, #AA528B 47.75%, #5232BE 98.5%)`,
        }}
        className="bg-loginButton p-4 rounded-2xl font-semibold "
      >
        <div className=" p-4 lg:p-8 rounded-2xl">
          <h2 className="text-center text-white text-2xl md:text-[34px] lg:text-[52px] py-10 mb-12">
            ২০২৩ সালে ড্রাইভিং শিখুন এর সাফল্য
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-8 md:gap-x-0 md:gap-y-8 justify-items-center">
            <div className="text-center border-b-2 md:border-b-0 w-full  md:border-r-2 border-solid border-[#D9D9D9] pb-5 ">
              <h2 className="text-white text-3xl sm:text-[32px] md:text-[50px] mb-2 font-semibold">
                ২৫ লক্ষ+
              </h2>
              <p className="text-white text-lg sm:text-xl md:text-[28px] font-normal">
                শিক্ষার্থী
              </p>
            </div>
            <div className="text-center border-b-2 md:border-b-0 w-full lg:border-r-2 border-solid border-[#D9D9D9] pb-5 ">
              <h2 className="text-white mb-2  text-3xl sm:text-[32px] md:text-[50px] font-semibold">
                ৫০ জন+
              </h2>
              <p className="text-white text-lg sm:text-xl md:text-[28px] font-normal">
                অভিজ্ঞ মেন্টর
              </p>
            </div>
            <div className="text-center border-b-2 w-full md:border-b-0 md:border-r-2 border-solid border-[#D9D9D9] pb-5 ">
              <h2 className="text-white mb-2  text-3xl sm:text-[32px] md:text-[50px] font-semibold">
                ১০ লক্ষ+
              </h2>
              <p className="text-white text-lg sm:text-xl md:text-[28px] font-normal">
                অ্যাপ ডাউনলোড
              </p>
            </div>
            <div className="text-center w-full ">
              <h2 className="text-white mb-2  text-3xl  md:text-[50px] font-semibold">
                ১.৮ লক্ষ+
              </h2>
              <p className="text-white text-lg sm:text-xl md:text-[28px] font-normal">
                লার্নিং ম্যাটারিয়াল
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
