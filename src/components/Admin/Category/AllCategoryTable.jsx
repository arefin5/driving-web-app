import { MdPreview } from "react-icons/md";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { useDisclosure } from "@nextui-org/react";

import UpdateCategoryModal from "./UpdateCategoryModal";
import PreviewCategoryModal from "./PreviewCategoryModal";
import useGetCategory from "@/src/Hooks/category/useGetCategory";
import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";
import useGetCategoryById from "@/src/Hooks/category/useGetCategoryById";
import { useState } from "react";
import ConformationModal from "../../Shared/ConformationModal/ConformationModal";
const AllCategoryTable = () => {
  const [id, setId] = useState("");
  const {
    onOpen: onOpenEdit,
    isOpen: isOpenEdit,
    onOpenChange: onOpenChangeEdit,
  } = useDisclosure();
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const {
    onOpen: onOpenConfrimModal,
    isOpen: isOpenConfrimModal,
    onOpenChange: onOpenChangeConfrimModal,
  } = useDisclosure();
  const { data: allCategory, refetch } = useGetCategory();
  const { data: categroyById } = useGetCategoryById(id);
  const axiosPublic = useAxiosPublic();

  const handleDeleteCategory = async (id) => {
    const { data } = await axiosPublic.delete(
      `/categories/deleteCategories/${id}`
    );
    if (data.status === "success") {
      refetch();
      onOpenConfrimModal();
    }
  };

  const handleViewCategory = (id) => {
    setId(id);
    onOpen();
  };
  const handleEditCategory = (id) => {
    setId(id);
    onOpenEdit();
  };
  return (
    <>
      <div className="relative border border-solid border-black/30 rounded-xl h-[545px] !max-h-full overflow-y-auto overflow-x-scroll xl:overflow-x-hidden xl:scrollbar-hide">
        <table className="w-full max-lg:min-w-[800px] px-10 table-auto text-sm text-left overflow-hidden  rounded-xl">
          <thead className="text-xs text-white uppercase  pl-10  bg-loginButton">
            <tr className="text-lg grid grid-cols-3 place-content-between px-10 py-5 items-center">
              <th scope="col" className=" text-left ">
                ক্যাটাগরি নাম
              </th>
              <th scope="col" className=" text-center ">
                ক্যাটাগরি Description
              </th>

              <th scope="col" className=" text-right ">
                একশন
              </th>
            </tr>
          </thead>
          <tbody>
            {allCategory?.map((category) => (
              <tr
                key={category._id}
                className="mx-5 mt-4 bg-white dark:text-white border-solid border-2 rounded border-primarySolid primary-text-color dark:bg-gray-800 dark:border-gray-700 text-lg grid grid-cols-3 justify-between items-center place-content-between"
              >
                <th
                  scope="row"
                  className="pl-4 py-3 font-medium  border-collapse"
                >
                  <div className="flex items-left gap-2">
                    <span className="">{category.name}</span>
                  </div>
                </th>
                <td
                  scope="row"
                  className="pl-4 py-3 font-medium text-center  border-collapse"
                >
                  <span className="">{category.description}</span>
                </td>
                <td className="pr-4 py-3 text-right flex justify-end items-center  border-collapse">
                  <div className="flex items-center gap-4 ">
                    <MdPreview
                      onClick={() => handleViewCategory(category._id)}
                      size={24}
                      className="cursor-pointer dark:text-white text-[#2B388F]"
                    />
                    <RiEdit2Line
                      onClick={() => handleEditCategory(category._id)}
                      size={24}
                      className="cursor-pointer dark:text-white text-[#2B388F]"
                    />
                    <RiDeleteBin6Line
                      onClick={() => handleDeleteCategory(category._id)}
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
      {/* Update category */}
      <UpdateCategoryModal
        id={id}
        refetch={refetch}
        categoryById={categroyById}
        isOpen={isOpenEdit}
        onOpenChange={onOpenChangeEdit}
      />
      {/* PreviewMOdal open */}
      <PreviewCategoryModal
        categoryById={categroyById}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      <ConformationModal
        message="category Deleted successfully"
        isOpen={isOpenConfrimModal}
        onOpenChange={onOpenChangeConfrimModal}
      />
    </>
  );
};

export default AllCategoryTable;
