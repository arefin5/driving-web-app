import Image from "next/image";
import UserImage from "/public/assets/dashboard/LeaderBoard/user.png";
const LeaderBoardTable = () => {
  return (
    <div className="relative border border-solid border-black/30 rounded-xl ">
      <table className="w-full table-fixed m-auto border-collapse  text-sm text-left overflow-hidden  rounded-xl">
        <thead className=" text-white uppercase bg-loginButton">
          <tr className="text-xl ">
            <th scope="col" className="pl-[60px] pt-7 pb-5 w-[468px]">
              নাম
            </th>
            <th scope="col" className="pt-7 pb-5 w-[340px]">
              পজিশন
            </th>
            <th scope="col" className="pr-[60px] pt-7 pb-5 ">
              রেজাল্ট
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white justify-between primary-text-color dark:text-white border-b border-solid border-black/30 dark:bg-gray-800 dark:border-gray-700 text-xl px-[60px]">
            <th
              scope="row"
              className="pl-[60px] py-4 font-medium whitespace-nowrap flex items-center gap-4"
            >
              <Image src={UserImage} alt="user profile image" />
              <span className="text-2xl">N / A</span>
            </th>
            <td className="py-4 text-[32px] ">১ম</td>
            <td className="py-4 pr-[60px] text-2xl">৯৯%</td>
          </tr>
          <tr className="bg-white justify-between primary-text-color border-b border-solid border-black/30 dark:bg-gray-800 dark:border-gray-700 text-xl px-[60px]">
            <th
              scope="row"
              className="pl-[60px] py-4 font-medium whitespace-nowrap flex items-center gap-4"
            >
              <Image src={UserImage} alt="user profile image" />
              <span className="text-2xl">মোঃ মেজবাহ উদ্দিন</span>
            </th>
            <td className="py-4 text-[32px] ">১ম</td>
            <td className="py-4 pr-[60px] text-2xl">৯৯%</td>
          </tr>
          <tr className="bg-white justify-between primary-text-color border-b border-solid border-black/30 dark:bg-gray-800 dark:border-gray-700 text-xl px-[60px]">
            <th
              scope="row"
              className="pl-[60px] py-4 font-medium whitespace-nowrap flex items-center gap-4"
            >
              <Image src={UserImage} alt="user profile image" />
              <span className="text-2xl">মোঃ মেজবাহ উদ্দিন</span>
            </th>
            <td className="py-4 text-[32px] ">১ম</td>
            <td className="py-4 pr-[60px] text-2xl">৯৯%</td>
          </tr>
          <tr className="bg-white justify-between primary-text-color  dark:bg-gray-800 dark:border-gray-700 text-xl px-[60px]">
            <th
              scope="row"
              className="pl-[60px] py-4 font-medium whitespace-nowrap flex items-center gap-4"
            >
              <Image src={UserImage} alt="user profile image" />
              <span className="text-2xl">মোঃ মেজবাহ উদ্দিন</span>
            </th>
            <td className="py-4 text-[32px] ">১ম</td>
            <td className="py-4 pr-[60px] text-2xl">৯৯%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoardTable;
