"use client";
import LiveClassTable from "@/src/components/ui/features/Dashboard/UserDashboard/LiveClass/LiveClassTable";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Tabs, Tab } from "@nextui-org/react";
const LiveClassPage = () => {
  return (
    <div className="font-liador">
      <Title title="লাইভ ক্লাস" />
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
            key="all"
            title="সবগুলো"
          >
            <LiveClassTable />
          </Tab>
          <Tab
            className={`items-start justify-start`}
            key="runningLiveClass"
            title="রানিং লাইভ ক্লাস"
          >
            <p>Runnig class comming</p>
          </Tab>
          <Tab
            className={`items-start justify-start`}
            key="upcommingLikeclass"
            title="আপকামিং লাইভ ক্লাস"
          >
            <p>upcomming class comming</p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default LiveClassPage;
