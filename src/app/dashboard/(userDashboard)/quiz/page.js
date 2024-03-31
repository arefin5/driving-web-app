"use client";

import QuizAndAssetsment from "@/src/components/ui/features/Dashboard/UserDashboard/QuizAndAssetsment/QuizAndAssetsmentTable";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Tabs, Tab } from "@nextui-org/react";
const QuizAndAssignmentPage = () => {
  return (
    <div className="font-liador">
      <div className="flex flex-col md:flex-row justify-between gap-3  md:items-center">
        <Title title="কুইজ ও অ্যাসাইনমেন্ট" />
        <select
          defaultValue="1.1 সহজ ড্রাইভিং - ১০১ অনুশীলন"
          className="bg-primaryGradiant rounded p-3  border-0 text-white"
        >
          <option className="bg-red-500" value="1.1 সহজ ড্রাইভিং - ১০১ অনুশীলন">
            1.1 সহজ ড্রাইভিং - ১০১ অনুশীলন
          </option>
          <option className="bg-red-500" value="1.2 সহজ ড্রাইভিং - ১০১ অনুশীলন">
            1.2 সহজ ড্রাইভিং - ১০১ অনুশীলন
          </option>
        </select>
      </div>
      <div className="flex w-full mt-5 flex-col underline_modifi">
        <Tabs
          aria-label="Options"
          variant="underlined"
          size="lg"
          fullWidth={false}
          color={"black"}
          className={`block tab`}
          classNames={{ tabList: "flex-wrap md:flex-nowrap" }}
        >
          <Tab className={`items-start justify-start `} key="quiz" title="কুইজ">
            <QuizAndAssetsment />
          </Tab>
          <Tab
            className={`items-start justify-start`}
            key="assesment"
            title="অ্যাসাইনমেন্টস"
          >
            <QuizAndAssetsment />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default QuizAndAssignmentPage;
