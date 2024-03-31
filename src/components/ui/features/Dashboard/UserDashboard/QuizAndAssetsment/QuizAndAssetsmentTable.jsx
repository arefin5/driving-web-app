import { FaRegCircleCheck, FaRegCirclePause } from "react-icons/fa6";

const QuizAndAssetsment = () => {
  return (
    <div className="relative border border-solid overflow-x-scroll lg:overflow-hidden  border-black/30 rounded-xl ">
      <table className="w-full table-auto  text-sm text-left  rounded-xl">
        <thead className="text-xs  text-white uppercase  pl-10  bg-loginButton">
          <tr className="text-lg ">
            <th scope="col" content="center" className="p-6">
              কুইজ
            </th>
            <th scope="col" className="p-6 text-center">
              কোর্স নাম
            </th>
            <th scope="col" className="p-6 text-center">
              স্টাটাস
            </th>
            <th scope="col" className="p-6 text-center">
              সাবমিটের শেষ সময়
            </th>
            <th scope="col" className="p-6 text-center">
              ফলাফল
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white  primary-text-color dark:text-white border-b border-solid border-black/30 dark:bg-gray-800 dark:border-gray-700 text-lg">
            <th scope="row" className="p-6 font-normal whitespace-nowrap ">
              <span className="flex items-center gap-2">
                <FaRegCircleCheck className="text-[#12B76A]" />
                কুইজ - ১
              </span>
            </th>
            <td className="p-6 font-normal whitespace-nowrap  ">
              1.1 সহজ ড্রাইভিং - ১০১টি অনুশীলন
            </td>
            <td className="p-6 font-normal whitespace-nowrap text-center  text-[#12B76A]">
              কমপ্লিট
            </td>
            <td className="p-6 font-normal whitespace-nowrap text-center ">
              শনি ১১ নভে রাত ১০:০০
            </td>
            <td className="p-6 font-normal whitespace-nowrap text-center ">
              <button className="bg-secondaryGradiant flex gap-2 items-center px-6 py-1 rounded text-white">
                দেখুন
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuizAndAssetsment;
