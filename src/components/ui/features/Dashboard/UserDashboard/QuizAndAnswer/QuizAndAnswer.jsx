import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../../Shared/PrimaryButton";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import QA1 from "/public/assets/CourseOverview/qa1.png";
import QA2 from "/public/assets/CourseOverview/qa2.png";
import clock from "/public/assets/CourseOverview/clock.png";
import score from "/public/assets/CourseOverview/score.png";
const QuizAndAnswer = () => {
  return (
    <div className="py-[66px] font-liador relative px-6 md:px-12 xl:px-[100px] border border-solid bg-[rgba(247,247,247,0.50)]  rounded-lg">
      <Image
        src={userBg}
        width={150}
        height={160}
        alt=""
        className="absolute left-0 top-0 z-10"
      />
      <div className=" w-full flex justify-center items-center flex-col relative z-50">
        <Image width={100} height={100} src={QA1} alt="" />
        <h3 className="font-semibold text-[32px] text-transparent bg-loginButton bg-clip-text mt-6">
          কুইজ - ১
        </h3>
        <p className="text-base">শনি ১১ নভে রাত ১০:০০</p>
        <div className="flex md:flex-row flex-col justify-around w-full   items-center py-4 my-[21px] border border-solid border-[rgba(0,0,0,0.30)] bg-[rgba(247,247,247,0.50)] rounded-lg">
          <div className="flex justify-center flex-col items-center">
            <Image width={32} height={32} src={QA2} alt="" />
            <h4 className="text-xl text-black ">মোট প্রশ্ন সংখ্যা</h4>
            <h2 className="font-semibold text-[30px]">
              <span className="primary-text-color ">১০টি</span>{" "}
              <span className="second-text-color">প্রশ্ন</span>
            </h2>
          </div>
          <div className="flex justify-center flex-col items-center">
            <Image width={32} height={32} src={score} alt="" />
            <h4 className="text-xl text-black ">মোট স্কোর</h4>
            <h2 className="font-semibold text-[30px]">
              <span className="primary-text-color ">২০</span>{" "}
              <span className="second-text-color">মার্কস</span>
            </h2>
          </div>
          <div className="flex justify-center flex-col items-center">
            <Image width={32} height={32} src={clock} alt="" />
            <h4 className="text-xl text-black ">কুইজের সময়</h4>
            <h2 className="font-semibold text-[30px]">
              <span className="primary-text-color ">২০:০০</span>{" "}
              <span className="second-text-color">মিনিট</span>
            </h2>
          </div>
        </div>
        <p className="primary-text-color font-semibold text-base">
          কুইজের নিয়মাবলীগুলো দেখে নিন
        </p>
        <Link className="w-full block" href={"/courseOverview/quiz/01quiz"}>
          <PrimaryButton value="শুরু করুন" />
        </Link>
      </div>
      <Image
        src={userBg2}
        width={150}
        height={160}
        alt=""
        className="absolute right-0 bottom-0 z-10"
      />
    </div>
  );
};

export default QuizAndAnswer;
