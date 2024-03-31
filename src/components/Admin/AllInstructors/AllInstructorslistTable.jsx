"use client";

import { MdPreview } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Pagination, useDisclosure } from "@nextui-org/react";
import ViewInstructorDetails from "./ViewInstructorDetails";
import useSpecificUserData from "@/src/Hooks/users/useSpecificUserData";
import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";
import ConformationModal from "../../Shared/ConformationModal/ConformationModal";
import useInstructorData from "@/src/Hooks/users/useInstructorData";
import { useEffect, useState } from "react";

const AllInstructorslistTable = () => {
  const axiosPublic = useAxiosPublic();
  const [count, setCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0); // Start from page 0
  const [totalPages, setTotalPages] = useState(0);
  const {
    onOpen: onOpenConfrom,
    isOpen: isopenConfrom,
    onOpenChange: onOpenChangeConfrom,
  } = useDisclosure();
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const { data: allInstructor, refetch } = useSpecificUserData(
    "instructor",
    currentPage,
    itemsPerPage
  );
  const { refetch: pendingInstructor } = useInstructorData(
    "instructor",
    "pending"
  );

  const totalData = allInstructor?.total;
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

  const { refetch: approvedInstructor } = useInstructorData(
    "instructor",
    "success"
  );
  const handleDelete = async (id) => {
    const { data } = await axiosPublic.delete(`/user/deleteUser/${id}`);

    if (data.status === "success") {
      onOpenConfrom();
      refetch();
      pendingInstructor();
      approvedInstructor();
    }
  };
  return (
    <>
      <div className="relative border border-solid border-black/30 rounded-xl h-[600px] !max-h-full overflow-y-auto overflow-x-scroll lg:overflow-x-hidden lg:scrollbar-hide">
        <table className="w-full max-lg:min-w-[800px]  px-10 table-auto text-sm text-left overflow-hidden  rounded-xl">
          <thead className="text-xs text-white uppercase  pl-10  bg-loginButton">
            <tr className="text-lg grid grid-cols-3 place-content-between px-10 py-5 items-center">
              <th scope="col" className=" text-left ">
                নাম
              </th>

              <th scope="col" className=" text-center ">
                স্ট্যাটাস
              </th>
              <th scope="col" className=" text-right ">
                একশন
              </th>
            </tr>
          </thead>
          {allInstructor?.data?.length === 0 ? (
            <p className="text-center flex justify-center items-center text-3xl primary-text-color h-[300px]">
              No user found
            </p>
          ) : (
            <tbody>
              {allInstructor?.data?.map((instructor) => (
                <tr
                  key={instructor._id}
                  className="mx-5 mt-4 bg-white dark:text-white border-solid border-2 rounded border-primarySolid primary-text-color dark:bg-gray-800 dark:border-gray-700 text-lg grid grid-cols-3 justify-between items-center place-content-between"
                >
                  <th
                    scope="row"
                    className="pl-4 py-3 font-medium  border-collapse"
                  >
                    <div className="flex items-left gap-2">
                      <span className="">{instructor.name}</span>
                    </div>
                  </th>
                  <td className="pr-4 py-3 text-center border-collapse">
                    {instructor.status}
                  </td>
                  <td className="pr-4 py-3 text-right flex justify-end items-center  border-collapse">
                    <div className="flex items-center gap-4 ">
                      <MdPreview
                        onClick={() => onOpen()}
                        size={24}
                        className="cursor-pointer dark:text-white text-[#2B388F]"
                      />

                      <RiDeleteBin6Line
                        onClick={() => handleDelete(instructor._id)}
                        size={24}
                        className="cursor-pointer dark:text-white text-[#2B388F]"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
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
      {/* PreviewMOdal open */}
      <ViewInstructorDetails isOpen={isOpen} onOpenChange={onOpenChange} />
      <ConformationModal
        isOpen={isopenConfrom}
        onOpenChange={onOpenChangeConfrom}
        message="Instructor Delete successfully"
      />
    </>
  );
};

export default AllInstructorslistTable;
