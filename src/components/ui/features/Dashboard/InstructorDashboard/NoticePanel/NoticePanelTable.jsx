import { MdPreview } from "react-icons/md";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import Image from "next/image";
import NotificationIcon from "/public/assets/Courses/notificationIcon.svg";
import { useDisclosure } from "@nextui-org/react";
import EditNoticePanelModal from "./EditNoticePanelModal";
import ViewNoticePanelModal from "./ViewNoticePanelModal";
const NoticePanelTable = () => {
  const {
    onOpen: onOpenEdit,
    isOpen: isOpenEdit,
    onOpenChange: onOpenChangeEdit,
  } = useDisclosure();
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  let arr = [1, 2, 3, 4];
  return (
    <>
      <div className="relative border border-solid border-black/30 rounded-xl h-[600px] !max-h-full max-lg:overflow-scroll overflow-y-auto lg:scrollbar-hide">
        <table className="w-full max-lg:min-w-[850px] px-10 table-auto text-sm text-left lg:overflow-hidden  rounded-xl">
          <thead className="text-xs text-white uppercase  pl-10  bg-loginButton">
            <tr className="text-lg grid grid-cols-11 justify-between px-10 py-5 items-center">
              <th scope="col" className=" text-center col-span-4">
                শিরোনাম
              </th>
              <th scope="col" className="col-span-2 text-center ">
                বিষয়
              </th>
              <th scope="col" className="col-span-2 text-center ">
                কোর্স নাম
              </th>
              <th scope="col" className="  text-center ">
                সময়
              </th>
              <th scope="col" className=" text-center col-span-2">
                একশন
              </th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i) => (
              <tr
                key={i}
                className="mx-5 mt-4 bg-white dark:text-white border-solid border-2 rounded border-primarySolid primary-text-color dark:bg-gray-800 dark:border-gray-700 text-lg grid grid-cols-11 justify-between items-center"
              >
                <th
                  scope="row"
                  className="pl-4 py-3 font-medium  col-span-4 border-collapse"
                >
                  <div className="flex items-left gap-2">
                    <Image
                      width={24}
                      height={24}
                      src={NotificationIcon}
                      alt="notification"
                    />
                    <span className="max-w-[317px]">
                      Teacher has finished assessing your submission on
                      Assignment Drive Shikhun.
                    </span>
                  </div>
                </th>{" "}
                <td className="py-3 col-span-2 text-center  border-collapse">
                  অ্যাসাইনমেন্ট
                </td>
                <td className="py-3 text-center col-span-2 border-collapse">
                  1.1 সহজ ড্রাইভিং - ১০১টি অনুশীলন
                </td>
                <td className=" py-3 text-center  border-collapse">
                  শনি ১১ নভে রাত ১০:০০
                </td>
                <td className="pr-4 py-3 col-span-2 text-center flex justify-end items-center  border-collapse">
                  <div className="flex items-center gap-4 ">
                    <MdPreview
                      onClick={() => onOpen()}
                      size={24}
                      className="cursor-pointer dark:text-white text-[#2B388F]"
                    />
                    <RiEdit2Line
                      onClick={() => onOpenEdit()}
                      size={24}
                      className="cursor-pointer dark:text-white text-[#2B388F]"
                    />
                    <RiDeleteBin6Line
                      size={24}
                      className="cursor-pointer dark:text-white text-[#2B388F]"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Edit modal */}
      <EditNoticePanelModal
        isOpen={isOpenEdit}
        onOpenChange={onOpenChangeEdit}
      />
      {/* Preview modal */}
      <ViewNoticePanelModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default NoticePanelTable;
