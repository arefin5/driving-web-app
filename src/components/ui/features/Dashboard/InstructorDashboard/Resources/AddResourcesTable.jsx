import { MdPreview } from "react-icons/md";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import Image from "next/image";
import ResourcesIcon from "/public/assets/Resources/Resources.svg";

import { useDisclosure } from "@nextui-org/react";
import EditResourcesModal from "./EditResourcesModal";
import ViewResourcesModal from "./ViewResourcesModal";
import { useEffect, useState } from "react";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import axios from "axios";
const AddResourcesTable = () => {
  const { data } = useGetSingleUserData();
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const [refreshTable, setRefreshTable] = useState(false);
  const [recurses,setRecurses]=useState([])
  const [recurseId,setRecurseId]=useState("")

  const {
    onOpen: onOpenEdit,
    isOpen: isOpenEdit,
    onOpenChange: onOpenChangeEdit,
  } = useDisclosure();
  const handleOpenView = () => {
    onOpen();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios?.get(
          `https://backend.driveshikhun.com/api/v1/recurse/specific?fieldName=userId&fieldValue=${data?._id}`
        );
        setRecurses(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, [data?._id, refreshTable]);
  return (
    <>
      <div className="relative border border-solid border-black/30 pb-4  rounded-xl font-semibold font-liador h-[595px] !max-h-full max-lg:overflow-scroll  overflow-y-auto lg:scrollbar-hide">
        <div className="max-lg:min-w-[800px] ">
          <div className="grid grid-cols-7 rounded-tr-xl mb-4 rounded-tl-xl gap-0 text-center bg-loginButton py-4 px-5 text-white text-lg">
            <p className="col-span-2 text-left ml-20">শিরোনাম</p>
            <p className="col-span-2">কোর্স নাম</p>
            <p className="col-span-2">রিসোর্স</p>
            <p className="">একশন</p>
          </div>

          <div className="">
            <div className="relative text-base bg-white dark:bg-darkbg rounded-xl">
              {recurses?.map((recurse) => (
                <div
                  key={recurse?._id}
                  className="primary-text-color dark:text-white dark:bg-gray-800   grid grid-cols-7 gap-0 justify-between items-center py-3 px-[10px] border mx-5 rounded border-solid border-primarySolid dark:border-0 mb-3"
                >
                  <div className=" font-medium whitespace-nowrap text-center col-span-2 flex items-center gap-2">
                    {recurse?.title}
                  </div>
                  <p className="text-center col-span-2 ">
                    {recurse?.courseName}
                  </p>
                  <a href={recurse?.recurseLink} target="_blank"></a>

                  <div className="flex items-center justify-end gap-4  ">
                    <MdPreview
                      onClick={handleOpenView}
                      size={18}
                      className="dark:text-white text-[#2B388F]"
                    />
                    <RiEdit2Line
                      className="cursor-pointer dark:text-white text-[#2B388F]"
                      onClick={() => {
                        setRecurseId(recurse?._id);
                        onOpenEdit();
                      }}
                      size={18}
                    />
                    <RiDeleteBin6Line
                      size={18}
                      className="dark:text-white text-[#2B388F]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* View modal open */}
      <ViewResourcesModal isOpen={isOpen} onOpenChange={onOpenChange} />
      {/* Handle edit open modal */}
      <EditResourcesModal
        recurseId={recurseId}
        isOpen={isOpenEdit}
        onOpenChange={onOpenChangeEdit}
      />
    </>
  );
};

export default AddResourcesTable;
