"use client";
import AllStudentListsTable from "@/src/components/Admin/AllStuduentLists/AllStudentListsTable";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Tabs, Tab } from "@nextui-org/react";
const AllStudentListsPage = () => {
  return (
    <>
      <div className="font-liador">
        <Title title="ছাত্রছাত্রী সমূহ " />

        <div className="flex w-full flex-col underline_modifi">
          <Tabs
            aria-label="Options"
            variant="underlined"
            size="lg"
            fullWidth={false}
            color={"black"}
            className={`block tab`}
          >
            <Tab
              className={`items-start justify-start `}
              key="allStudentlists"
              title="সকল ছাত্রছাত্রী"
            >
              <AllStudentListsTable />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AllStudentListsPage;
