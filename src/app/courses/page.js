import CourseFilter from "@/src/components/ui/courses/CourseFilter";
import Banner from "/public/assets/Courses/courses_banner.svg";

import CourseCard from "@/src/components/ui/courses/CourseCard";
const CoursesPage = () => {
  return (
    <main className="pb-[60px] pt-3">
      {/* Banner section */}
      <section className="container font-liador text-white ">
        <div
          className="text-center bg-cover h-[200px] md:h-[282px] flex flex-col items-center justify-center bg-no-repeat bg-center rounded-lg"
          style={{ background: `url(${Banner.src})` }}
        >
          <h1 className=" font-bold text-2xl md:text-[40px] pb-4">
            আমাদের অনলাইন কোর্সসমুহ
          </h1>
          <p className="md:text-xl text-base md:px-0 px-5">
            আপনার পছন্দের কোর্সটি বেছে নিন আর দক্ষতা অর্জন করে হয়ে উঠুন
            স্বাবলম্বী।
          </p>
        </div>
      </section>
      {/* all course section */}
      <section className="container font-liador mt-6 md:mt-[60px]">
        <div className="grid grid-cols-12 gap-5">
          {/* Filter sidebar */}
          <div className="xl:col-span-3 sm:col-span-4 col-span-full bg-[#F7F7F7] dark:bg-darkbg dark:!text-white rounded-lg border p-6 border-solid border-black/30">
            {/*  course type filter */}
            <div className="border-b border-secondarySolid mb-6 pb-6">
              <h4 className="primary-text-color dark:text-white text-2xl font-semibold pb-6">
                কোর্সের ধরন
              </h4>
              <div className="flex flex-col gap-4">
                <CourseFilter label={"সকল কোর্স"} />
                <CourseFilter label={"অরিয়েন্টেশন কোর্স"} />
                <CourseFilter label={"ফ্রি কোর্সসমুহ"} />
                <CourseFilter label={"ফ্রি কোর্সসমুহ"} />
              </div>
            </div>
            {/*  course category filter */}
            <div className="border-b border-secondarySolid mb-6 pb-6">
              <h4 className="primary-text-color dark:text-white  text-2xl font-semibold pb-6">
                ক্যাটাগরি
              </h4>
              <div className="flex flex-col gap-4">
                <CourseFilter label={"ক্যাটাগরি - এ"} />
                <CourseFilter label={"ক্যাটাগরি - বি"} />
                <CourseFilter label={"ক্যাটাগরি - সি"} />
                <CourseFilter label={"ক্যাটাগরি - ডি"} />
              </div>
            </div>
            {/*  course category filter */}
            <div className="">
              <h4 className="primary-text-color dark:text-white  text-2xl font-semibold pb-6">
                দেশ
              </h4>
              <div className="flex flex-col gap-4">
                <CourseFilter label={"সকল দেশ"} />
                <CourseFilter label={"দেশের নাম"} />
                <CourseFilter label={"দেশের নাম"} />
                <CourseFilter label={"দেশের নাম"} />
                <CourseFilter label={"দেশের নাম"} />
                <CourseFilter label={"দেশের নাম"} />
                <CourseFilter label={"দেশের নাম"} />
              </div>
            </div>
          </div>
          {/* Course */}
          <div className="xl:col-span-9 sm:col-span-8 col-span-full ">
            <div className="grid gap-5 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CoursesPage;
