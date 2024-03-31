"use client";

import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Tabs, Tab } from "@nextui-org/react";

import AllStudentsLists from "@/src/components/ui/features/Dashboard/InstructorDashboard/AllStudents/AllStudentsLists";
import RemovedStudents from "@/src/components/ui/features/Dashboard/InstructorDashboard/AllStudents/RemovedStudents";
import PendingRemovedLists from "@/src/components/ui/features/Dashboard/InstructorDashboard/AllStudents/PendingRemovedLists";

const StudentLists = () => {
  return (
    <>
      <div className="font-liador">
        <div className="flex justify-between items-center mb-4">
          <Title title="স্টুডেন্ট লিস্ট" />
          <select
            defaultValue="1.1 সহজ ড্রাইভিং - ১০১ অনুশীলন"
            className="bg-primaryGradiant rounded p-3  border-0 text-white"
          >
            <option
              className="bg-red-500"
              value="1.1 সহজ ড্রাইভিং - ১০১ অনুশীলন"
            >
              1.1 সহজ ড্রাইভিং - ১০১ অনুশীলন
            </option>
            <option
              className="bg-red-500"
              value="1.2 সহজ ড্রাইভিং - ১০১ অনুশীলন"
            >
              1.2 সহজ ড্রাইভিং - ১০১ অনুশীলন
            </option>
          </select>
        </div>
        <div className="flex w-full flex-col underline_modifi">
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
              key="AllStudentLists"
              title="সকল স্টুডেন্ট"
            >
              <AllStudentsLists />
            </Tab>
            <Tab
              className={`items-start justify-start`}
              key="removedStudentLists"
              title="বাতিল করা স্টুডেন্ট"
            >
              <RemovedStudents />
            </Tab>
            <Tab
              className={`items-start justify-start`}
              key="removedStudentPendingLists"
              title="বাতিল পেন্ডিং স্টুডেন্ট"
            >
              <PendingRemovedLists />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default StudentLists;

/*   

*/
