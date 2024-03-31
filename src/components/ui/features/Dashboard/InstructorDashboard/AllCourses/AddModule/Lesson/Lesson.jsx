import React, { useEffect, useState } from "react";
import { IoMdPlayCircle } from "react-icons/io";
import { MdOutlineLibraryAdd, MdPreview } from "react-icons/md";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { useDisclosure } from "@nextui-org/react";
import AddLessonModal from "./AddLessonModal";
import EditLessonModal from "./EditLessonModal";
import DeleteHook from "@/src/Hooks/DeleteHook";

function Lesson({courseId,moduleId}) {
    const { onOpen, isOpen, onOpenChange } = useDisclosure();
    const { onOpen:editOnOpen, isOpen:editIsOpen, onOpenChange:editOnOpenChange } = useDisclosure();
    const [refetch,setRefetch]=useState(false);
    const [lessonId,setLessonId]=useState("");

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(
        `https://backend.driveshikhun.com/api/v1/lesson/specific?fieldName=courseId&&fieldValue=${courseId}&&fieldName2=moduleId&&fieldValue2=${moduleId}`
      ).then((res) => res.json().then((data) => setData(data?.data)));
    }, [courseId, refetch, moduleId]);
  return (
    <div>
      <div className="my-6">
        <button
          onClick={onOpen}
          className="bg-primarySolid text-white py-3 px-5 rounded flex items-center gap-[10px]"
        >
          Add Lesson <MdOutlineLibraryAdd size={24} />
        </button>
      </div>
      {data?.map((item) => (
        <div
          key={item?._id}
          className="flex items-center justify-between bg-[#F7F7F7] dark:bg-darkbg px-4 py-2 border border-solid border-black/30 rounded mb-3"
        >
          <p className="flex items-center gap-2 primary-text-color dark:text-white font-semibold">
            <IoMdPlayCircle size={24} className="text-[#9DA1A9]" />
            {item?.lessonNumber} : {item?.title}
          </p>
          <div className="flex items-center gap-4 ">
            <MdPreview
              size={24}
              className="cursor-pointer dark:text-white text-[#2B388F]"
            />
            <RiEdit2Line
              onClick={() => {
                setLessonId(item?._id);
                editOnOpen();
              }}
              size={24}
              className="cursor-pointer dark:text-white text-[#2B388F]"
            />
            <RiDeleteBin6Line
              onClick={() => {
                DeleteHook({
                  refetch,
                  setRefetch,
                  url: `https://backend.driveshikhun.com/api/v1/lesson/deleteLessons/${item?._id}`,
                });
              }}
              size={24}
              className="cursor-pointer dark:text-white text-[#2B388F]"
            />
          </div>
        </div>
      ))}

      <AddLessonModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setRefetch={setRefetch}
        refetch={refetch}
        courseId={courseId}
        moduleId={moduleId}
      />
      <EditLessonModal
        isOpen={editIsOpen}
        onOpenChange={editOnOpenChange}
        setRefetch={setRefetch}
        refetch={refetch}
        lessonId={lessonId}
      />
    </div>
  );
}

export default Lesson;
