import { IoIosPlayCircle } from "react-icons/io";

import { MdPreview } from "react-icons/md";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { useDisclosure } from "@nextui-org/react";
import EditRecordLiveClassModal from "./EditRecordLiveClassModal";
import ViewRecordLiveClassModal from "./ViewRecordLiveClassModal";
import { useEffect, useState } from "react";
import axios from "axios";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import { toast } from "react-toastify";

const AddRecordLiveClassTable = () => {
  const { data } = useGetSingleUserData();
  const [RecordLiveClass, setRecordLiveClass] = useState([]);
  const [selectedLiveClassId, setSelectedLiveClassId] = useState(null);

  const [refreshTable, setRefreshTable] = useState(false);

  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  const {
    onOpen: onOpenEdit,
    isOpen: isOpenEdit,
    onOpenChange: onOpenChangeEdit,
  } = useDisclosure();
  const handleViewDetails = () => {
    onOpen();
  };
  const handleEditLiveClassModal = (recordedClassId) => {
    setSelectedLiveClassId(recordedClassId);
    onOpenEdit();
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://backend.driveshikhun.com/api/v1/recordedClasses/specific?fieldName=userId&fieldValue=${data?._id}`
        );
        setRecordLiveClass(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, [data?._id, refreshTable]);
  
  const handleDeleteRecordClass = async (recordedClassId) => {
    try {
      await axios.delete(
        `https://backend.driveshikhun.com/api/v1/recordedClasses/deleteRecordedClasses/${recordedClassId}`
      );
      toast.success("Recorded class deleted successfully!");
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
            <div className="">
              <tr className="text-lg flex justify-between px-10 py-5 items-center">
                <th scope="col" className=" text-center">
                  লাইভ ক্লাস
                </th>
                <th scope="col" className=" text-center">
                  কোর্স নাম
                </th>
                <th scope="col" className="pl-[62px]">
                  শুরুর সময়
                </th>
                <th scope="col" className="">
                  সময়কাল
                </th>
                <th scope="col" className=" text-center">
                  একশন
                </th>
              </tr>
            </div>
          </thead>
          <tbody>
            <div className=" pb-6">
              {RecordLiveClass.map((RecordLiveClass, index) => (
                <tr
                  key={RecordLiveClass?._id}
                  className="mx-5 mt-4 bg-white border-solid border-2 rounded border-primarySolid primary-text-color dark:bg-darkbg dark:text-white dark:border-gray-700 text-lg flex justify-between items-center"
                >
                  <th
                    scope="row"
                    className="pl-4 py-3 font-medium whitespace-nowrap text-center  border-collapse"
                  >
                    <span className="flex items-center gap-2">
                      <IoIosPlayCircle className="text-[#9DA1A9]" />
                      Recorded Class {index + 1}
                    </span>
                  </th>
                  <td className="py-3 text-center  border-collapse">
                    {RecordLiveClass?.title}
                  </td>
                  <td className="py-3 text-center  border-collapse">
                    {RecordLiveClass?.startingDate} ,{" "}
                    {RecordLiveClass?.StartingTime}
                  </td>
                  <td className=" py-3 text-center  border-collapse">
                    {RecordLiveClass?.duration}
                  </td>
                  <td className="pr-4 py-3 text-center flex justify-end items-center  border-collapse">
                    <div className="flex items-center gap-4 ">
                      <MdPreview
                        onClick={handleViewDetails}
                        size={24}
                        className="cursor-pointer dark:text-white text-[#2B388F]"
                      />
                      <RiEdit2Line
                        onClick={() =>
                          handleEditLiveClassModal(RecordLiveClass._id)
                        }
                        size={24}
                        className="cursor-pointer dark:text-white text-[#2B388F]"
                      />
                      <RiDeleteBin6Line
                        onClick={() =>
                          handleDeleteRecordClass(RecordLiveClass._id)
                        }
                        size={24}
                        className="cursor-pointer dark:text-white text-[#2B388F]"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </div>
          </tbody>
        </table>
      </div>
      {/* View modal open */}
      <ViewRecordLiveClassModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        handleDataRefresh={handleDataRefresh}
      />
      {/* Handle open modal */}
      <EditRecordLiveClassModal
        isOpen={isOpenEdit}
        onOpenChange={onOpenChangeEdit}
        handleDataRefresh={handleDataRefresh}
        selectedLiveClassId={selectedLiveClassId}
      />
    </>
  );
};

export default AddRecordLiveClassTable;
