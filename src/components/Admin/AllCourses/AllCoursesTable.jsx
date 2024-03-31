"use client";

import { MdPreview } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import useAllCoursesData from "@/src/Hooks/courses/useAllCoursesData";
import { Link, Pagination, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";
import ConformationModal from "../../Shared/ConformationModal/ConformationModal";

const AllCourseListsTable = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const axiosPublic = useAxiosPublic();
  const [count, setCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(0); // Start from page 0
  const [totalPages, setTotalPages] = useState(0); // Initialize totalPages state
  const { data: allCourses, refetch } = useAllCoursesData(
    currentPage,
    itemsPerPage
  );
  const totalData = allCourses?.total;
  // Update count and totalPages when totalData changes
  useEffect(() => {
    if (totalData !== undefined && totalData !== null) {
      setCount(totalData);
      setTotalPages(Math.ceil(totalData / itemsPerPage));
    }
  }, [totalData, itemsPerPage]);

  // Update count and totalPages when itemsPerPage changes
  useEffect(() => {
    setTotalPages(Math.ceil(count / itemsPerPage));
  }, [itemsPerPage, count]);

  const handleDeleteCourse = async (id) => {
    const { data } = await axiosPublic.delete(`/course/deleteCourses/${id}`);

    if (data.status === "success") {
      onOpen();
      refetch();
    }
  };
  return (
    <>
      <div className="relative border border-solid border-black/30 rounded-xl pb-5 !max-h-full overflow-y-auto overflow-x-scroll lg:overflow-x-hidden lg:scrollbar-hide">
        <table className="w-full max-lg:min-w-[700px]  px-10 table-auto text-sm text-left overflow-hidden  rounded-xl">
          <thead className="text-xs text-white uppercase  lg:pl-10  bg-loginButton">
            <tr className="text-lg grid grid-cols-3 place-content-between px-10 py-5 items-center">
              <th scope="col" className=" text-left ">
                কোর্স নাম
              </th>
              <th scope="col" className=" text-center ">
                স্ট্যাটাস
              </th>

              <th scope="col" className=" text-right ">
                একশন
              </th>
            </tr>
          </thead>
          <tbody>
            {allCourses?.data?.map((course) => (
              <tr
                key={course._id}
                className="mx-5 mt-4 bg-white dark:text-white border-solid border-2 rounded border-primarySolid primary-text-color dark:bg-gray-800 dark:border-gray-700 text-lg grid grid-cols-3 justify-between items-center place-content-between"
              >
                <th
                  scope="row"
                  className="pl-4 py-3 font-medium  border-collapse"
                >
                  <span className="">{course.title}</span>
                </th>
                <th
                  scope="row"
                  className="pl-4 py-3 font-medium text-center border-collapse"
                >
                  <span className="">{course.status}</span>
                </th>
                <td className="pr-4 py-3 text-right flex justify-end items-center  border-collapse">
                  <div className="flex items-center gap-4 ">
                    <Link
                      // href={`/admin/allCourses/${course._id}/welcomeCourse`}
                      href={`/courseOverview/${course._id}`}
                    >
                      <MdPreview
                        size={24}
                        className="cursor-pointer dark:text-white text-[#2B388F]"
                      />
                    </Link>

                    <RiDeleteBin6Line
                      onClick={() => handleDeleteCourse(course._id)}
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
      <div className=" my-5">
        <Pagination
          classNames={{
            item: "w-8 h-8 text-small rounded-none bg-transparent",
            cursor: `bg-primaryGradiant dark:!bg-darkbg shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold`,
            prev: "dark:!bg-darkbg",
            next: "dark:!bg-darkbg",
          }}
          showControls
          total={totalPages}
          initialPage={currentPage + 1} // Increment currentPage by 1 for UI display
          page={currentPage + 1} // Increment currentPage by 1 for UI display
          onChange={(currentPage) => {
            setCurrentPage(currentPage - 1); // Decrement currentPage by 1 internally
          }}
        />
      </div>
      {/* Confrom modal open */}

      <ConformationModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        message="Course Deleted successfully"
      />
    </>
  );
};

export default AllCourseListsTable;
