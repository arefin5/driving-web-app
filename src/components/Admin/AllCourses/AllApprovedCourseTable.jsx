import { MdPreview } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Pagination, useDisclosure } from "@nextui-org/react";
import useAllStatusCourse from "@/src/Hooks/courses/useAllStatusCourse";
import { useEffect, useState } from "react";
import ConformationModal from "../../Shared/ConformationModal/ConformationModal";
import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";
import useAllCoursesData from "@/src/Hooks/courses/useAllCoursesData";

const AllApprovedCourseTable = () => {
  const axiosPublic = useAxiosPublic();
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const [count, setCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(0); // Start from page 0
  const [totalPages, setTotalPages] = useState(0);
  const { data: confirmCourse, refetch } = useAllStatusCourse(
    "confirm",
    currentPage,
    itemsPerPage
  );
  const { refetch: pendingCourseRefetch } = useAllStatusCourse(
    "pending",
    currentPage,
    itemsPerPage
  );
  const totalData = confirmCourse?.total;
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
  const { refetch: allCourses } = useAllCoursesData(currentPage, itemsPerPage);
  const handlePending = async (id) => {
    const { data } = await axiosPublic.patch(`/course/updateCourses/${id}`, {
      status: "pending",
    });

    if (data.status === "success") {
      onOpen();
      refetch();
      pendingCourseRefetch();
      allCourses();
    }
  };
  return (
    <>
      <div className="relative border border-solid border-black/30 rounded-xl h-[600px] !max-h-full overflow-y-auto overflow-x-scroll lg:overflow-x-hidden lg:scrollbar-hide">
        <table className="w-full max-lg:min-w-[900px]  px-10 table-auto text-sm text-left overflow-hidden  rounded-xl">
          <thead className="text-xs text-white uppercase  pl-10  bg-loginButton">
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
            {confirmCourse?.data?.map((course) => (
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
                  className="pl-4 space-x-3 py-3 font-medium text-center border-collapse"
                >
                  <span className="">{course.status}</span>
                  <button
                    onClick={() => handlePending(course._id)}
                    className="bg-primaryGradiant capitalize text-white py-1 px-4 rounded-md text-sm"
                  >
                    pending
                  </button>
                  <button className="bg-red-500 capitalize text-white py-1 px-4 rounded-md text-sm">
                    cancel
                  </button>
                </th>
                <td className="pr-4 py-3 text-right flex justify-end items-center  border-collapse">
                  <div className="flex items-center gap-4 ">
                    <MdPreview
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
        message="Course Moved Pending successfully"
      />
    </>
  );
};

export default AllApprovedCourseTable;
