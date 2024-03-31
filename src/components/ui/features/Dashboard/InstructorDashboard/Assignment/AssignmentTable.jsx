import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import Image from "next/image";
import AssignmentIcon from "/public/assets/Courses/assignmentIcon.svg";
import ViewAssignmentModal from "./ViewAssignmentModal";
import EditAssignmentModal from "./EditAssignmentModal";
import { useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import axios from "axios";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import { toast } from "react-toastify";
const AssignmentTable = () => {
  const { data } = useGetSingleUserData();
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const [refreshTable, setRefreshTable] = useState(false);
  const [assignments,setAssignments]=useState([])
  const [assignmentId,setAssignmentId]=useState("")
  const {
    onOpen: onOpenEdit,
    isOpen: isOpenEdit,
    onOpenChange: onOpenChangeEdit,
  } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios?.get(
          `https://backend.driveshikhun.com/api/v1/assignment/specific?fieldName=userId&fieldValue=${data?._id}`
        );
        setAssignments(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, [data?._id, refreshTable]);

  const handleDeleteAssignment = async (assignmentId) => {
    try {
      await axios.delete(
        `https://backend.driveshikhun.com/api/v1/assignment/deleteAssignment/${assignmentId}`
      );
      toast.success("Assignment deleted successfully!");
      setRefreshTable((prev) => !prev);
    } catch (error) {
      console.error("Error deleting live class:", error);
    }
  };

  const handleDataRefresh = () => {
    setRefreshTable((prev) => !prev);
  };
console.log(assignments)
  return (
    <>
      <div className="relative border border-solid border-black/30 pb-4  rounded-xl font-semibold font-liador h-[595px] !max-h-full max-lg:overflow-scroll  overflow-y-auto lg:scrollbar-hide">
        <div className="max-lg:min-w-[800px] ">
          <div className="grid grid-cols-11 rounded-tr-xl mb-4 rounded-tl-xl gap-0 text-center bg-loginButton py-4 px-5 text-white text-lg">
            <p className="col-span-2">অ্যাসাইনমেন্ট </p>
            <p className="col-span-3">কোর্স নাম</p>
            <p>মডিউল</p>
            <p className="col-span-2">সাবমিটের শেষ সময়</p>
            <p className="col-span-2">একশন</p>
          </div>

          <div className="">
            <div className="relative text-base bg-white dark:bg-transparent rounded-xl">
              {assignments?.map((assignment) => (
                <div
                  key={assignment?._id}
                  className="primary-text-color dark:text-white dark:bg-gray-800 dark:border-gray-700  grid grid-cols-11 gap-0 justify-between items-center py-3 px-[10px] border mx-5 rounded border-solid border-primarySolid mb-3"
                >
                  <div className=" font-medium whitespace-nowrap text-center flex items-center gap-2 col-span-2">
                    <Image width={18} height={16} src={AssignmentIcon} alt="" />
                    <span className="">{assignment?.title}</span>
                  </div>
                  <p className="text-center col-span-3 ">
                    {assignment?.courseName}
                  </p>
                  <p className="text-center ">{assignment?.moduleName}</p>

                  <p className="  text-center col-span-2">
                    {assignment?.lastSubmitDate} | {assignment?.lastSubmitTime}
                  </p>

                  <div className="flex items-center justify-end gap-4 col-span-2 ">
                    {/* <MdPreview
                      onClick={() => onOpen()}
                      size={18}
                      color="#2B388F"
                    /> */}
                    <RiEdit2Line
                      onClick={() => {
                        onOpenEdit();
                        setAssignmentId(assignment?._id);
                      }}
                      size={18}
                      color="#2B388F"
                    />
                    <RiDeleteBin6Line
                      onClick={() => handleDeleteAssignment(assignment?._id)}
                      size={18}
                      color="#2B388F"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* View modal open */}
      <ViewAssignmentModal isOpen={isOpen} onOpenChange={onOpenChange} />
      {/* Handle edit open modal */}
      <EditAssignmentModal
        isOpen={isOpenEdit}
        onOpenChange={onOpenChangeEdit}
        assignmentId={assignmentId}
      />
    </>
  );
};

export default AssignmentTable;
