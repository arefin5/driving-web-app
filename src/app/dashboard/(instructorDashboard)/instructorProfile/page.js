"use client";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import AllTransactions from "@/src/components/ui/features/Dashboard/UserDashboard/UserProfile/AllTransactions";
import UserProfile from "@/src/components/ui/features/Dashboard/UserDashboard/UserProfile/UserProfile";
import { Tabs, Tab } from "@nextui-org/react";
const InstructorProfilePage = () => {
  return (
    <div className="font-liador">
      <Title title="প্রোফাইল" />

      <div className="flex w-full flex-col underline_modifi profile">
        <Tabs
          aria-label="Options"
          variant="underlined"
          size="lg"
          fullWidth={false}
          color={"black"}
          className={`block tab profile_tab`}
          classNames={{ tabList: "flex-wrap md:gap-[128px] md:flex-nowrap" }}
        >
          <Tab
            className={`items-start justify-start `}
            key="accountDetails"
            title="অ্যাকাউন্টের বিবরন"
          >
            <div className="h-[595px] !max-h-full overflow-y-auto scrollbar-hide">
              <UserProfile />
            </div>
          </Tab>
          <Tab
            className={`items-start justify-start`}
            key="allTransiction"
            title="ট্রান্সএকশন বিবরনী"
          >
            <AllTransactions />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default InstructorProfilePage;
