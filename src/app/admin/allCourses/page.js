"use client";
import AllApprovedCourseTable from "@/src/components/Admin/AllCourses/AllApprovedCourseTable";
import AllCourseListsTable from "@/src/components/Admin/AllCourses/AllCoursesTable";
import AllPendingCourseTable from "@/src/components/Admin/AllCourses/AllPendingCourseTable";

import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Tabs, Tab } from "@nextui-org/react";
const AllCoursesPage = () => {
  return (
    <>
      <div className="font-liador">
        <Title title="সকল কোর্স সমূহ" />

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
              key="allcoursesListss"
              title="সকল কোর্স লিস্ট "
            >
              <AllCourseListsTable />
            </Tab>
            <Tab
              className={`items-start justify-start `}
              key="allPendingCoursesListss"
              title="সকল পেন্ডিং কোর্স লিস্ট "
            >
              <AllPendingCourseTable />
            </Tab>
            <Tab
              className={`items-start justify-start `}
              key="allSuccessCoursesListss"
              title="সকল এপ্রুভ  কোর্স লিস্ট "
            >
              <AllApprovedCourseTable />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AllCoursesPage;
