import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { useDisclosure } from "@nextui-org/react";
import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";
import { useState } from "react";
import useGetDataHook from "@/src/Hooks/useGetDataHook";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import Video from "next-video";
import Image from "next/image";
import { toast } from "react-toastify";
import UpdateLearnModal from "../learn/UpdateLearnModal";
const { convert } = require("html-to-text");

const AllQuestionTable = () => {
  const [id, setId] = useState("");
  const {
    onOpen: onOpenEdit,
    isOpen: isOpenEdit,
    onOpenChange: onOpenChangeEdit,
  } = useDisclosure();

  const [refetch, setRefetch] = useState(false);
  const { data: user } = useGetSingleUserData();

  const [learn] = useGetDataHook(
    `https://backend.driveshikhun.com/api/v1/learn/specific?fieldName=userId&&fieldValue=${user?._id}`,
    refetch
  );

  const axiosPublic = useAxiosPublic();

  const handelDelete = async (id) => {
    const { data } = await axiosPublic.delete(`/learn/deleteLearns/${id}`);
    if (data.status === "success") {
      toast.success("Learn Deleted successfully!");
      setRefetch(!refetch);
    }
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
              <th scope="col" className=" text-center ">
                Question
              </th>
              <th scope="col" className=" text-center ">
               Course
              </th>

              <th scope="col" className=" text-right ">
               Action
              </th>
            </tr>
          </thead>
          <tbody>
            {learn?.map((l) => (
              <tr
                key={l._id}
                className="mx-5 mt-4 bg-white border-solid border-2 rounded border-primarySolid primary-text-color dark:bg-gray-800 dark:border-gray-700 text-lg grid grid-cols-3 justify-between items-center place-content-between"
              >
                <th
                  scope="row"
                  className="pl-4 py-3 font-medium  border-collapse"
                >
                  <div className="flex items-left gap-2">
                    {l?.learnVideo ? (
                      <Video
                        src={l?.learnVideo}
                        placeholder="blur"
                        className="rounded-lg"
                      />
                    ) : (
                      <Image
                        src={l?.learnImg}
                        width={200}
                        height={100}
                        alt=""
                        className=""
                      />
                    )}
                  </div>
                </th>
                <td
                  scope="row"
                  className="pl-4 py-3 font-medium text-center  border-collapse"
                >
                  <span className="">
                    {" "}
                    {convert(l?.learnDescription?.slice(0, 300))}
                  </span>
                </td>
                <td className="pr-4 py-3 text-right flex justify-end items-center  border-collapse">
                  <div className="flex items-center gap-4 ">
                    <RiEdit2Line
                      onClick={() => handleEditCategory(l._id)}
                      size={24}
                      color="#2B388F"
                      className="cursor-pointer"
                    />
                    <RiDeleteBin6Line
                      onClick={() => handelDelete(l._id)}
                      size={24}
                      color="#2B388F"
                      className="cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Update category */}
      <UpdateLearnModal
        id={id}
        refetch={refetch}
        isOpen={isOpenEdit}
        onOpenChange={onOpenChangeEdit}
      />
    </>
  );
};

export default AllQuestionTable;
