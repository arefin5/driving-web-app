"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaAngleDown, FaCheckCircle } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import LessonLayout from "./LessonLayout";
const CoruseNavItem = ({ Icon, href, isUnlock, CheckIcon, module,course }) => {
  const isModuleOpen = "true";
  
  return (
    <>
      <Accordion
        itemClasses={{
          heading: "",
          trigger: "pr-6 pl-4 mb-2 bg-loginButton text-white rounded-lg",
          content: "px-6",
          indicator: "text-white",
        }}
        className="px-0 "
        variant="splitted"
      >
        
      
          <AccordionItem
            key={module?._id}
            startContent={
              isModuleOpen ? (
                <FaCheckCircle className="text-[#4AB272]" />
              ) : (
                <BiBook />
              )
            }
            aria-label="Accordion 3"
            title={module?.title}
            classNames={{ title: " text-white" }}
            className="!px-0 !bg-transparent !shadow-none"
            indicator={<FaAngleDown />}
            motionProps={false}
          >
            <LessonLayout
              isUnlock={isUnlock}
              CheckIcon={CheckIcon}
              href={href}
              Icon={Icon}
              moduleId={module?._id}
              courseId = {course?._id}
            />
          </AccordionItem>
  
      </Accordion>
    </>
  );
};

export default CoruseNavItem;
