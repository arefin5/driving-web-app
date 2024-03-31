import { MdPreview } from "react-icons/md";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { Pagination, useDisclosure } from "@nextui-org/react";

import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";
import ConformationModal from "../../Shared/ConformationModal/ConformationModal";
import useSubscriptionPlan from "@/src/Hooks/subscriptionsPlan/useSubscriptionPlan";
import NoUserFound from "../../Shared/NoUserFound/NoUserFound";
import EditSubscriptionModal from "./EditSubscriptionModal";
import { useEffect, useState } from "react";
import useGetSubsPlanById from "@/src/Hooks/subscriptionsPlan/useGetSubsPlanById";
import ViewSubscriptionModal from "./ViewSubscriptionModal";
const AllSubsctipionTable = () => {
  const axiosPublic = useAxiosPublic();
  const [planId, setPlanId] = useState("");

  const [count, setCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0); // Start from page 0
  const [totalPages, setTotalPages] = useState(0);
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const {
    onOpen: onOpenEdit,
    isOpen: isOpenEdit,
    onOpenChange: onOpenChangeEdit,
  } = useDisclosure();
  const {
    onOpen: onOpenConfrimModal,
    isOpen: isOpenConfrimModal,
    onOpenChange: onOpenChangeConfrimModal,
  } = useDisclosure();
  const { data: allSubsPlan, refetch } = useSubscriptionPlan(
    currentPage,
    itemsPerPage
  );

  const totalData = allSubsPlan?.total;
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

  const { data: subsPlan } = useGetSubsPlanById(planId);
  const handleDeleteUser = async (id) => {
    const { data } = await axiosPublic.delete(
      `/subscriptionPlans/deleteSubscriptionPlans/${id}`
    );
    if (data.status === "success") {
      onOpenConfrimModal();
      refetch();
    }
  };
  const handleEditSubscription = (id) => {
    setPlanId(id);
    onOpenEdit();
  };
  const handleViewSubsPlan = (id) => {
    setPlanId(id);
    onOpen();
  };

  return (
    <>
      <div className="relative border border-solid border-black/30 rounded-xl h-[600px] !max-h-full overflow-y-auto overflow-x-scroll lg:overflow-x-hidden lg:scrollbar-hide">
        <table className="w-full max-lg:min-w-[600px]  px-10 table-auto text-sm text-left overflow-hidden  rounded-xl">
          <thead className="text-xs text-white uppercase  pl-10  bg-loginButton">
            <tr className="text-lg grid grid-cols-4 place-content-between px-10 py-5 items-center">
              <th scope="col" className=" text-left ">
                সাবস্ক্রিপশন নাম
              </th>
              <th scope="col" className=" text-center ">
                প্রাইস
              </th>
              <th scope="col" className=" text-center ">
                মেয়াদ
              </th>

              <th scope="col" className=" text-right ">
                একশন
              </th>
            </tr>
          </thead>

          {allSubsPlan?.data?.length === 0 ? (
            <NoUserFound message={"No plans Added"} />
          ) : (
            <tbody>
              {allSubsPlan?.data?.map((plan) => (
                <tr
                  key={plan._id}
                  className="mx-5 mt-4 bg-white dark:text-white border-solid border-2 rounded border-primarySolid primary-text-color dark:bg-gray-800 dark:border-gray-700 text-lg grid grid-cols-4 justify-between items-center place-content-between"
                >
                  <th
                    scope="row"
                    className="pl-4 py-3 font-medium  border-collapse"
                  >
                    <div className="flex items-left gap-2">
                      <span className="">{plan.name}</span>
                    </div>
                  </th>
                  <td
                    scope="row"
                    className="pl-4 py-3 text-center font-medium  border-collapse"
                  >
                    <span className="">{plan.price}</span>
                  </td>
                  <td
                    scope="row"
                    className="pl-4 py-3 text-center font-medium  border-collapse"
                  >
                    <span className="">{plan.duration}</span>
                  </td>
                  <td className="pr-4 py-3 text-right flex justify-end items-center  border-collapse">
                    <div className="flex items-center gap-4 ">
                      <MdPreview
                        onClick={() => handleViewSubsPlan(plan._id)}
                        size={24}
                        className="cursor-pointer dark:text-white text-[#2B388F]"
                      />
                      <RiEdit2Line
                        onClick={() => handleEditSubscription(plan._id)}
                        size={18}
                        className="cursor-pointer dark:text-white text-[#2B388F]"
                      />
                      <RiDeleteBin6Line
                        onClick={() => handleDeleteUser(plan._id)}
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

      <ConformationModal
        message="User Deleted successfully"
        isOpen={isOpenConfrimModal}
        onOpenChange={onOpenChangeConfrimModal}
      />

      <EditSubscriptionModal
        planId={planId}
        isOpen={isOpenEdit}
        onOpenChange={onOpenChangeEdit}
      />
      <ViewSubscriptionModal
        planId={planId}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export default AllSubsctipionTable;
