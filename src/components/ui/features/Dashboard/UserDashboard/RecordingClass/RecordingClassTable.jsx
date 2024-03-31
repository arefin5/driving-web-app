import { FaRegCircleCheck,  } from "react-icons/fa6";
import { FiPlay } from "react-icons/fi";

const RecordingClassTable = () => {
  return (
    <div className="relative border overflow-x-scroll lg:overflow-hidden border-solid border-black/30 rounded-xl ">
      <table className="w-full table-auto text-sm text-left overflow-x-scroll lg:overflow-hidden  rounded-xl">
        <thead className=" text-white uppercase  pl-10  bg-loginButton">
          <tr className="text-lg ">
            <th scope="col" className="p-10   ">
              শিরোনাম
            </th>
            <th scope="col" className="p-10  text-center">
              সময়কাল
            </th>
            <th scope="col" className="p-10  text-center">
              সময়
            </th>
            <th scope="col" className="p-10 text-center">
              দেখুন
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white primary-text-color dark:text-white border-b border-solid border-black/30 dark:bg-gray-800 dark:border-gray-700 text-lg">
            <th scope="row" className="p-10  font-medium whitespace-nowrap ">
              <span className="flex items-center gap-2">
                <FaRegCircleCheck className="text-[#12B76A]" />
                1.1 সহজ ড্রাইভিং - ১০১টি অনুশীলন
              </span>
            </th>
            <td className="p-10  whitespace-nowrap">৩ ঘন্টা ১৫ মিনিট</td>
            <td className="p-10  whitespace-nowrap">শনি ১১ নভে রাত ১০:০০</td>
            <td className="pr-10 p-10  whitespace-nowrap">
              <button className="bg-secondaryGradiant flex gap-1 items-center w-full py-1 px-5 rounded text-white justify-center">
                <FiPlay />
                দেখুন
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecordingClassTable;
