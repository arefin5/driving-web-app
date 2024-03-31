import { IoIosPlayCircle } from "react-icons/io";

import { MdPreview } from "react-icons/md";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { useDisclosure } from "@nextui-org/react";
import ViewLiveClassModal from "./ViewLiveClassModal";
import EditLiveClassModal from "./EditLiveClassModal";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import useAuthContext from "@/src/Hooks/context/useAuthContext";

const AddLiveClassTable = () => {
  const [liveClasses, setLiveClasses] = useState([]);
  const [refreshTable, setRefreshTable] = useState(false);
  const { user } = useAuthContext();
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const [selectedLiveClassId, setSelectedLiveClassId] = useState(null);

  const {
    onOpen: onOpenEdit,
    isOpen: isOpenEdit,
    onOpenChange: onOpenChangeEdit,
  } = useDisclosure();
  const handleViewDetails = (liveClassId) => {
    setSelectedLiveClassId(liveClassId);

    onOpen();
  };
  const handleEditLiveClassModal = (liveClassId) => {
    setSelectedLiveClassId(liveClassId);
    onOpenEdit();
  };

  useEffect(() => {
    axios
      .get(`https://backend.driveshikhun.com/api/v1/liveClasses/specific?fieldName=userId&&fieldValue=${user?.userId}`)
      .then((response) => setLiveClasses(response.data.data))
      .catch((error) => console.error("Error fetching live classes:", error));
  }, [refreshTable, liveClasses,user]);

  const handleDeleteLiveClass = async (liveClassId) => {
    try {
      await axios.delete(
        `https://backend.driveshikhun.com/api/v1/liveClasses/deleteLiveClasses/${liveClassId}`
      );
      toast.success("Live class deleted successfully!");
      setRefreshTable((prev) => !prev);
    } catch (error) {
      console.error("Error deleting live class:", error);
    }
  };
  const handleDataRefresh = () => {
    setRefreshTable((prev) => !prev);
  };

  return (
    <>
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
                className="mx-5 mt-4 bg-white dark:bg-darkbg dark:text-white border-solid border-2 rounded border-primarySolid primary-text-color  dark:border-gray-700 text-lg grid grid-cols-12"
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
                  {liveClasses?.title.slice(0, 35)}
                </td>
                <td className="py-3 text-center col-span-2 border-collapse">
                  {liveClasses?.startingDate} {liveClasses?.StartingTime}
                </td>
                <td className=" py-3 text-center col-span-2 border-collapse">
                  {liveClasses?.instructorName}
                </td>
                <td className="pr-4 py-3 text-center col-span-2 flex justify-end items-center  border-collapse">
                  <div className="flex items-center gap-4 ">
                    <MdPreview
                      onClick={() => handleViewDetails(liveClasses._id)}
                      size={24}
                      className="cursor-pointer dark:text-white text-[#2B388F]"
                    />
                    <RiEdit2Line
                      onClick={() => handleEditLiveClassModal(liveClasses._id)}
                      size={24}
                      className="cursor-pointer dark:text-white text-[#2B388F]"
                    />
                    <RiDeleteBin6Line
                      onClick={() => handleDeleteLiveClass(liveClasses._id)}
                      size={24}
                      className="cursor-pointer dark:text-white text-[#2B388F]"
                    />
                  </div>
                </td>
              </tr>
            ))}
            {/* </div> */}
          </tbody>
        </table>
      </div>
      {/* View modal open */}
      <ViewLiveClassModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        liveClassId={selectedLiveClassId}
        // onClose={handleDataRefresh}
      />
      {/* Handle open modal */}
      <EditLiveClassModal
        isOpen={isOpenEdit}
        onOpenChange={onOpenChangeEdit}
        liveClassId={selectedLiveClassId}
        // onClose={handleDataRefresh}
      />
    </>
  );
};

export default AddLiveClassTable;
