"use client";
import AllCoursesTable from "@/src/components/ui/features/Dashboard/InstructorDashboard/AllCourses/AllCoursesTable/AllCoursesTable";
import ApproveAndRunnigTable from "@/src/components/ui/features/Dashboard/InstructorDashboard/AllCourses/ApproveAndRunnigTable/ApproveAndRunnigTable";
import PendingCourseTable from "@/src/components/ui/features/Dashboard/InstructorDashboard/AllCourses/PendingCourseTable/PendingCourseTable";
import ModalOpenButton from "@/src/components/ui/features/Dashboard/InstructorDashboard/ModalOpenButton";
import { MdOutlineLibraryAdd } from "react-icons/md";

import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Tabs, Tab, useDisclosure } from "@nextui-org/react";
import AddCourse from "@/src/components/ui/features/Dashboard/InstructorDashboard/AllCourses/AddCourse/AddCourse";
const CoursesPage = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="font-liador">
        <div className="flex justify-between items-center mb-4">
          <Title title="কোর্সসমূহ" />
          <ModalOpenButton
            onclick={onOpen}
            value={"Add course"}
            Icon={MdOutlineLibraryAdd}
          />
        </div>
        <div className="flex  w-full flex-col underline_modifi">
          <Tabs
            aria-label="Options"
            variant="underlined"
            size="lg"
            fullWidth={false}
            color={"black"}
            className={`block tab`}
            classNames={{ tabList: "flex-wrap md:flex-nowrap" }}
          >
            <Tab
              className={`items-start justify-start `}
              key="allCourses"
              title="সকল কোর্সসমূহ"
            >
              <AllCoursesTable />
            </Tab>
            <Tab
              className={`items-start justify-start`}
              key="approveAndRunningCourse"
              title="এপ্রুভ / রানিং কোর্সসমূহ"
            >
              <ApproveAndRunnigTable />
            </Tab>
            <Tab
              className={`items-start justify-start`}
              key="pendingCourses"
              title="পেন্ডিং কোর্সসমূহ"
            >
              <PendingCourseTable />
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* Add course modal popup */}
      <AddCourse isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default CoursesPage;
