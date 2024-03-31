import { IoIosPlayCircle } from "react-icons/io";

const LiveClassTable = () => {
  const liveClasses = [1];
  return (
    <div className="relative border border-solid border-black/30 rounded-xl h-[595px] !max-h-full overflow-auto md:overflow-y-auto md:scrollbar-hide">
      <table className="w-full max-lg:min-w-[700px] px-10 table-auto text-sm text-left overflow-scroll md:overflow-hidden  rounded-xl">
        <thead className="text-xs text-white uppercase  pl-10  bg-loginButton">
          {/* <div className=""> */}
          <tr className="text-lg grid grid-cols-12 px-10 py-5 items-center">
            <th scope="col" className=" text-left col-span-2">
              লাইভ ক্লাস
            </th>
            <th scope="col" className=" col-span-4 text-center">
              কোর্স নাম
            </th>
            <th scope="col" className=" col-span-2 text-center">
              শুরুর সময়
            </th>
            <th scope="col" className="col-span-2 text-center">
              ইনস্ট্রাক্টর নাম
            </th>
            <th scope="col" className=" text-right col-span-2">
              একশন
            </th>
          </tr>
          {/* </div> */}
        </thead>
        <tbody>
          {/* <div className=" pb-6"> */}
          {liveClasses.map((liveClasses, index) => (
            <tr
              key={liveClasses?._id}
              className="mx-5 mt-4  bg-white border-solid border-2 rounded border-primarySolid primary-text-color dark:text-white dark:bg-gray-800 dark:border-gray-700 text-lg grid grid-cols-12"
            >
              <th
                scope="row"
                className="pl-4 py-3 font-medium whitespace-nowrap text-center  border-collapse col-span-2"
              >
                <span className="flex items-center gap-2">
                  <IoIosPlayCircle className="text-[#9DA1A9]" />
                  Live Class {index + 1}
                </span>
              </th>
              <td className="py-3 text-center col-span-4 border-collapse">
                {/* {liveClasses?.title?.slice(0, 35)}
                 */}
                title
              </td>
              <td className="py-3 text-center col-span-2 border-collapse">
                {/* {liveClasses?.startingDate} {liveClasses?.StartingTime}
                 */}
                date
              </td>
              <td className=" py-3 text-center col-span-2 border-collapse">
                {/* {liveClasses?.instructorName} */}
                instructor name
              </td>
              <td className=" py-3 text-right  col-span-2 border-collapse">
                {/* {liveClasses?.instructorName} */}
                <button className="mr-5 px-5 py-1 rounded-lg bg-secondaryGradiant text-white">
                  see
                </button>
              </td>
            </tr>
          ))}
          {/* </div> */}
        </tbody>
      </table>
    </div>
  );
};

export default LiveClassTable;
