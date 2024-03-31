import Image from "next/image";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import { Accordion, AccordionItem, useDisclosure } from "@nextui-org/react";
import {  IoMdArrowDropdownCircle } from "react-icons/io";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import DeleteHook from "@/src/Hooks/DeleteHook";
import EditModuleModal from "./EditModuleModal";
import Lesson from "./Lesson/Lesson";

const Module = ({ courseId, refetch, setRefetch }) => {
  const [moduleId, setModuleId] = useState("");
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://backend.driveshikhun.com/api/v1/module/specific?fieldName=courseId&&fieldValue=${courseId}`
    ).then((res) => res.json().then((data) => setData(data?.data)));
  }, [courseId, refetch]);

  return (
    <div className="bg-[rgba(247,247,247,0.50)] dark:bg-darkbg border border-solid border-black/30 rounded-lg p-10 relative z-10 font-liador">
      <Image
        src={userBg}
        width={70}
        height={70}
        alt=""
        className="absolute left-0 top-0 z-10"
      />
      <div className="">
        <Accordion
          className="px-0 font-liador !gap-4"
          variant="splitted"
          hideIndicator
          itemStyles={{}}
          itemClasses={{
            trigger: "p-0 text-base",
            base: "py-3 !gap-4  !px-4 border !rounded border-solid border-primarySolid !shadow-none",
            heading: "text-base ",

            title: "text-[#2B388F] font-liador ",
          }}
        >
          {data?.map((item) => (
            <AccordionItem
              classNames={{
                content: "",
              }}
              key={item?._id}
              aria-label="Accordion 1"
              title={
                <div className="flex justify-between items-center">
                  <p className="primary-text-color dark:text-white">
                    Module {item?.moduleNumber}:{item?.title}
                  </p>
                  <div className="flex items-center gap-4 ">
                    <RiEdit2Line
                      onClick={() => {
                        setModuleId(item._id);
                        onOpen();
                      }}
                      size={24}
                      className="cursor-pointer dark:text-white text-[#2B388F]"
                    />
                    <RiDeleteBin6Line
                      onClick={() => {
                        DeleteHook({
                          refetch,
                          setRefetch,
                          url: `https://backend.driveshikhun.com/api/v1/module/deleteModules/${item?._id}`,
                        });
                      }}
                      size={24}
                      className="cursor-pointer dark:text-white text-[#2B388F]"
                    />
                    <IoMdArrowDropdownCircle
                      size={24}
                      className="cursor-pointer dark:text-white text-[#2B388F]"
                    />
                  </div>
                </div>
              }
            >
              {/* lesson here */}
              <Lesson courseId={courseId} moduleId={item?._id} />
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Image
        src={userBg2}
        width={70}
        height={70}
        alt=""
        className="absolute right-0 bottom-0"
      />

      <EditModuleModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setRefetch={setRefetch}
        refetch={refetch}
        moduleId={moduleId}
      />
    </div>
  );
};

export default Module;
