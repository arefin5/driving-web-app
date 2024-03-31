"use client";
import RecordingClassTable from "@/src/components/ui/features/Dashboard/UserDashboard/RecordingClass/RecordingClassTable";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Tabs, Tab } from "@nextui-org/react";
const RecordingPage = () => {
  return (
    <div className="font-liador">
      <div className="flex flex-col gap-5  md:flex-row justify-between md:items-center">
        <Title title="রেকর্ডিং ক্লাস" />
        <select
          defaultValue="1.1 সহজ ড্রাইভিং - ১০১ অনুশীলন"
          className="bg-primaryGradiant rounded p-3   border-0 text-white"
        >
          <option className="" value="1.1 সহজ ড্রাইভিং - ১০১ অনুশীলন">
            1.1 সহজ ড্রাইভিং - ১০১ অনুশীলন
          </option>
          <option className="" value="1.2 সহজ ড্রাইভিং - ১০১ অনুশীলন">
            1.2 সহজ ড্রাইভিং - ১০১ অনুশীলন
          </option>
        </select>
      </div>
      <div className="flex w-full mt-4 md:mt-0 flex-col underline_modifi">
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
            key="liveClass"
            title="লাইভ ক্লাস"
          >
            <RecordingClassTable />
          </Tab>
          <Tab
            className={`items-start justify-start`}
            key="supportClass"
            title="সাপোর্ট ক্লাস"
          >
            <p>Supprt class comming</p>
          </Tab>
          <Tab
            className={`items-start justify-start`}
            key="conceptualClass"
            title="কনসেপচুয়াল ক্লাস"
          >
            <p>Conceptual class coming</p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default RecordingPage;
