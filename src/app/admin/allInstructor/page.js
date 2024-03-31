"use client";
import AllInstructorslistTable from "@/src/components/Admin/AllInstructors/AllInstructorslistTable";
import ApprovedInstructorList from "@/src/components/Admin/AllInstructors/ApprovedInstructorList";
import PendingInstructourList from "@/src/components/Admin/AllInstructors/PendingInstructourList";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Tabs, Tab } from "@nextui-org/react";
const AllTeachersPage = () => {
  return (
    <>
      <div className="font-liador">
        <Title title="সকল প্রশিক্ষক" />

        <div className="flex w-full flex-col underline_modifi">
          <Tabs
            aria-label="Options"
            variant="underlined"
            size="lg"
            fullWidth={false}
            color={"black"}
            className={`block tab`}
            classNames={{ tabList: "flex-col md:flex-row" }}
          >
            <Tab
              className={`items-start justify-start `}
              key="allinstructorList"
              title="সকল প্রশিক্ষক লিস্ট "
            >
              <AllInstructorslistTable />
            </Tab>
            <Tab
              className={`items-start justify-start`}
              key="pendingInstructor"
              title="পেন্ডিং  প্রশিক্ষক লিস্ট "
            >
              <PendingInstructourList />
            </Tab>
            <Tab
              className={`items-start justify-start`}
              key="aprroveInstructor"
              title="এপ্রুভ প্রশিক্ষক লিস্ট "
            >
              <ApprovedInstructorList />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AllTeachersPage;
