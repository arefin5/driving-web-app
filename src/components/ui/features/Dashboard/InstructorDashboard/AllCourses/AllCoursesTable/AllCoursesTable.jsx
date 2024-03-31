"use client";
import { useState } from "react";
import { FaListUl } from "react-icons/fa6";
import Link from "next/link";
import {
  MdOutlineLibraryAdd,
  MdOutlineVideoCall,
  // MdOutlineCalendarViewDay,
} from "react-icons/md";
import { RiLiveLine, RiDeleteBin6Line, RiEdit2Fill } from "react-icons/ri";
import { useDisclosure } from "@nextui-org/react";
import EditCourse from "../EditCourse/EditCourse";
import ViewCourseDetails from "../ViewCourseDetails/ViewCourseDetails";
// import axios from "axios";
import AddLiveClassModal from "../../LiveClass/AddLiveClassModal";
import AddRecordLiveClassModal from "../../RecordLiveClass/AddRecordLiveClassModal";
import useAllSpecificCourseData from "@/src/Hooks/courses/useAllSpecificCourseData";
import useAuthContext from "@/src/Hooks/context/useAuthContext";
import DeleteHook from "@/src/Hooks/DeleteHook";
const AllCoursesTable = () => {
  const { user } = useAuthContext();
  const { data: courses } = useAllSpecificCourseData(user?.userId);
  const [openDetails, setOpenDetails] = useState(false);
  const [refetch, setRefetch] = useState(false);

  const [courseId,setCourseId]=useState("");
  const {
    onOpen: onOpenEdit,
    isOpen: isOpenEdit,
    onOpenChange: onOpenChangeEdit,
  } = useDisclosure();
  // open view details modal
  const {
    // onOpen: onOpenViewDetails,
    isOpen: isOpenViewDetails,
    onOpenChange: onOpenChangeViewDetails,
  } = useDisclosure();
  // open add live class modal
  const {
    onOpen: onOpenAddLiveClass,
    isOpen: isOpenAddLiveClass,
    onOpenChange: onOpenChangeAddLiveClass,
  } = useDisclosure();
  // open add live record class modal
  const {
    onOpen: onOpenAddLiveRecordClass,
    isOpen: isOpenAddLiveRecordClass,
    onOpenChange: onOpenChangeAddLiveRecordClass,
  } = useDisclosure();

  const handleOpenEditModal = () => {
    onOpenEdit();
  };

  // const handleOpenViewDetailsModal = () => {
  //   onOpenViewDetails();
  // };

  // open add live class modal
  const handleAddLiveClassModal = () => {
    onOpenAddLiveClass();
  };
  // open add live record  class modal
  const handleAddLiveRecordClassModal = () => {
    onOpenAddLiveRecordClass();
  };

  
  return (
    <>
      <div className="relative border border-solid border-black/30 rounded-xl h-[595px] !max-h-full overflow-x-auto  lg:overflow-y-auto lg:scrollbar-hide">
        <table className="w-full  text-sm text-left overflow-hidden rounded-xl">
          <thead className=" text-white uppercase bg-loginButton rounded-2xl">
            <tr className="text-lg font-semibold">
              <th scope="col" className="text-center pl-5 p-4 font-semibold">
                নং
              </th>
              <th scope="col" className="p-4 text-center font-semibold">
                কোর্স নাম
              </th>
              <th scope="col" className="p-4 text-center  font-semibold">
                ক্যাটাগরি
              </th>
              <th scope="col" className="p-4 text-center  font-semibold">
                রিজিওন
              </th>
           
              <th scope="col" className=" p-4 text-center font-semibold">
                স্টাটাস
              </th>
              <th scope="col" className=" p-4 text-center font-semibold">
                বিস্তারিত
              </th>
            </tr>
          </thead>
          <tbody>
            {courses?.reverse()?.map((course, index) => (
              <tr
                key={index}
                className="bg-white dark:text-white primary-text-color border-b border-solid border-black/30 dark:bg-gray-800 dark:border-gray-700 text-lg"
              >
                <td
                  scope="row"
                  className="pl-5 p-4 font-medium whitespace-nowrap text-center"
                >
                  {index + 1}.
                </td>
                <td className="p-4 text-center">
                  {/* <Image src={course?.courseThumbnail} alt="" /> */}
                  {course?.title}
                </td>
                <td className="p-4 text-center">{course?.category}</td>
                <td className=" p-4 text-center">{course?.region}</td>
                <td className=" p-4 text-center text-[#12B76A]">
                  {course?.status}
                </td>
                <td className=" p-4 text-center flex justify-center ">
                  <button
                    onClick={() => {
                      setCourseId(course?._id);
                      setOpenDetails(!openDetails);
                    }}
                    className="bg-secondaryGradiant hover:bg-primaryGradiant duration-200 text-center gap-2 justify-center flex items-center px-3 py-1 rounded text-white"
                  >
                    <FaListUl /> Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          className={`bg-[#F2F2F2] dark:bg-darkbg  duration-700 ${
            openDetails ? "translate-y-0 opacity-1" : "translate-y-16 opacity-0"
          } shadow-[0px_0px_15px_0px_rgba(0,0,0,0.40)]  rounded-lg w-[246px] absolute right-32 top-40 p-6 text-black`}
        >
          <ul className="flex flex-col gap-2">
            <li className="p-3 text-base font-semibold    bg-white group transition-all cursor-pointer duration-700 hover:bg-secondaryGradiant hover:text-white shadow rounded">
              <Link
                className="flex  gap-[10px] items-center "
                href={`/dashboard/courses/${courseId}`}
              >
                <MdOutlineLibraryAdd
                  size={24}
                  className="group-hover:text-white text-[#2B388F]"
                />
                <span className="primary-text-color group-hover:text-white">
                  Add Module
                </span>
              </Link>
            </li>
            <li
              onClick={handleAddLiveClassModal}
              className="flex p-3 gap-[10px] text-base font-semibold   items-center  bg-white group transition-all cursor-pointer duration-700 hover:bg-secondaryGradiant hover:text-white shadow rounded"
            >
              <RiLiveLine
                size={24}
                className="group-hover:text-white text-[#2B388F]"
              />
              <span className="primary-text-color group-hover:text-white">
                Add Live Class
              </span>
            </li>
            <li
              onClick={handleAddLiveRecordClassModal}
              className="flex p-3 gap-[10px] text-base font-semibold   items-center  bg-white group transition-all cursor-pointer duration-700 hover:bg-secondaryGradiant hover:text-white shadow rounded"
            >
              <MdOutlineVideoCall
                size={24}
                className="group-hover:text-white text-[#2B388F]"
              />
              <span className="primary-text-color group-hover:text-white">
                Add Live Record Class
              </span>
            </li>
            {/* <li
              onClick={handleOpenViewDetailsModal}
              className="flex p-3 gap-[10px] text-base font-semibold   items-center  bg-white group transition-all cursor-pointer duration-700 hover:bg-secondaryGradiant hover:text-white shadow rounded"
            >
              <MdOutlineCalendarViewDay
                size={24}
                className="group-hover:text-white text-[#2B388F]"
              />
              <span className="primary-text-color group-hover:text-white">
                View Course Details
              </span>
            </li> */}
            <li
              onClick={handleOpenEditModal}
              className="flex p-3 gap-[10px] text-base font-semibold   items-center  bg-white group transition-all cursor-pointer duration-700 hover:bg-secondaryGradiant hover:text-white shadow rounded"
            >
              <RiEdit2Fill
                size={24}
                className="group-hover:text-white text-[#2B388F]"
              />
              <span className="primary-text-color group-hover:text-white">
                Edit Course Details
              </span>
            </li>
            <li className="flex p-3 gap-[10px] text-base font-semibold   items-center  bg-white group transition-all cursor-pointer duration-700 hover:bg-secondaryGradiant hover:text-white shadow rounded">
              <RiDeleteBin6Line
                size={24}
                className="group-hover:text-white text-red-500"
              />
              <span onClick={() => {
                        DeleteHook({
                          setRefetch,
                          refetch,
                          url: `https://backend.driveshikhun.com/api/v1/course/deleteCourses/${courseId}`,
                        });
                      }} className="text-red-500 group-hover:text-white">
                Delete Course
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Edit course modal popup open */}
      <EditCourse
        isOpen={isOpenEdit}
        onOpenChange={onOpenChangeEdit}
        courseId={courseId}
      />
      {/* view course details modal popup */}
      <ViewCourseDetails
        isOpen={isOpenViewDetails}
        onOpenChange={onOpenChangeViewDetails}
      />
      {/* Open add live class modal */}
      <AddLiveClassModal
        isOpen={isOpenAddLiveClass}
        onOpenChange={onOpenChangeAddLiveClass}
      />
      {/* Open add live record class modal */}
      <AddRecordLiveClassModal
        isOpen={isOpenAddLiveRecordClass}
        onOpenChange={onOpenChangeAddLiveRecordClass}
      />
    </>
  );
};

export default AllCoursesTable;