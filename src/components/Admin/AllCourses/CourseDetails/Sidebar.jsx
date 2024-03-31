"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();
  const params = useParams();
  console.log(params, 13);
  const id = params.id;

  const isModuleOpen = "true";
  return (
    <div>
      <Accordion
        defaultExpandedKeys={["1"]}
        itemClasses={{
          heading: "",
          trigger: "pr-6 pl-4 mb-4 bg-loginButton text-white rounded-lg",
          content: "px-6",
          indicator: "text-white",
        }}
        className="px-0 "
        variant="splitted"
      >
        <AccordionItem
          key={1}
          startContent={
            isModuleOpen ? (
              <FaCheckCircle className="text-[#4AB272]" />
            ) : (
              <BiBook />
            )
          }
          aria-label="Accordion 3"
          title="Module 0: Introduction of Course"
          classNames={{ title: " text-white" }}
          className="!px-0 !bg-transparent !shadow-none"
          indicator={<FaAngleDown />}
          motionProps={false}
        >
          <div
            className={`navItem hover:text-white ${
              pathname === `/admin/allCourses/${id}/welcomeCourse`
                ? "bg-primaryGradiant text-white"
                : "bg-[rgba(247,247,247,0.30)] shadow-md primary-text-color"
            }  py-3 px-4  rounded-lg mb-2`}
          >
            <Link
              href={`/admin/allCourses/${id}/welcomeCourse`}
              className="flex gap-4 items-center text-xl font-semibold"
            >
              {/* {isUnlock ? (
                  <CheckIcon
                    className={`${
                      pathname === "/courseOverview"
                        ? "text-white"
                        : "text-[#2B388F]"
                    } `}
                    size={24}
                  />
                ) : (
                  <Icon
                    className={`${
                      pathname === href ? "text-white" : "text-[#2B388F]"
                    } `}
                    size={24}
                  />
                )} */}
              0.0 Welcome to the Course
            </Link>
          </div>
          <div
            className={`navItem hover:text-white ${
              pathname === `/admin/allCourses/${id}/courseOverview`
                ? "bg-primaryGradiant text-white"
                : "bg-[rgba(247,247,247,0.30)] shadow-md primary-text-color"
            }  py-3 px-4  rounded-lg mb-2`}
          >
            <Link
              href={`/admin/allCourses/${id}/courseOverview`}
              className="flex gap-4 items-center text-xl font-semibold"
            >
              {/* {isUnlock ? (
                  <CheckIcon
                    className={`${
                      pathname === "/courseOverview/courseOne"
                        ? "text-white"
                        : "text-[#2B388F]"
                    } `}
                    size={24}
                  />
                ) : (
                  <Icon
                    className={`${
                      pathname === href ? "text-white" : "text-[#2B388F]"
                    } `}
                    size={24}
                  />
                )} */}
              0.1 Course Overview
            </Link>
          </div>
          <div
            className={`navItem hover:text-white ${
              pathname === `/admin/allCourses/${id}/beforeWeStart`
                ? "bg-primaryGradiant text-white"
                : "bg-[rgba(247,247,247,0.30)] shadow-md primary-text-color"
            }  py-3 px-4  rounded-lg mb-2`}
          >
            <Link
              href={`/admin/allCourses/${id}/beforeWeStart`}
              className="flex gap-4 items-center text-xl font-semibold"
            >
              {/* {isUnlock ? (
                  <CheckIcon
                    className={`${
                      pathname === "/courseOverview/beforeWeStart"
                        ? "text-white"
                        : "text-[#2B388F]"
                    } `}
                    size={24}
                  />
                ) : (
                  <Icon
                    className={` iconCustomColor ${
                      pathname === href ? "text-white" : "text-[#2B388F]"
                    } `}
                    size={24}
                  />
                )} */}
              0.2 Before We Start
            </Link>
          </div>
          <div
            className={`navItem hover:text-white ${
              pathname === "/courseOverview/quiz"
                ? "bg-primaryGradiant text-white"
                : "bg-[rgba(247,247,247,0.30)] shadow-md primary-text-color"
            }  py-3 px-4  rounded-lg mb-2`}
          >
            <Link
              href={"/courseOverview/quiz"}
              className="flex gap-4 items-center text-xl font-semibold"
            >
              {/* {isUnlock ? (
                  <CheckIcon
                    className={`${
                      pathname === "/courseOverview/quiz"
                        ? "text-white"
                        : "text-[#2B388F]"
                    } `}
                    size={24}
                  />
                ) : (
                  <Icon
                    className={` iconCustomColor ${
                      pathname === href ? "text-white" : "text-[#2B388F]"
                    } `}
                    size={24}
                  />
                )} */}
              0.4 Start Quiz - 01
            </Link>
          </div>
          <div
            className={`navItem hover:text-white ${
              pathname === "/courseOverview/assignment"
                ? "bg-primaryGradiant text-white"
                : "bg-[rgba(247,247,247,0.30)] shadow-md primary-text-color"
            }  py-3 px-4  rounded-lg mb-2`}
          >
            <Link
              href={"/courseOverview/assignment"}
              className="flex gap-4 items-center text-xl font-semibold"
            >
              {/* {isUnlock ? (
                  <CheckIcon
                    className={`${
                      pathname === "/courseOverview/assignment"
                        ? "text-white"
                        : "text-[#2B388F]"
                    } `}
                    size={24}
                  />
                ) : (
                  <Icon
                    className={`${
                      pathname === href ? "text-white" : "text-[#2B388F]"
                    } `}
                    size={24}
                  />
                )} */}
              0.5 Assignment - 01
            </Link>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Sidebar;
