"use client";
import ModalOpenButton from "@/src/components/ui/features/Dashboard/InstructorDashboard/ModalOpenButton";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { MdLiveTv, MdOutlineVideoCall } from "react-icons/md";
import { Tabs, Tab, useDisclosure } from "@nextui-org/react";
import AddLiveClassTable from "@/src/components/ui/features/Dashboard/InstructorDashboard/LiveClass/AddLiveClassTable";
import AddLiveClassModal from "@/src/components/ui/features/Dashboard/InstructorDashboard/LiveClass/AddLiveClassModal";
import AddRecordLiveClassTable from "@/src/components/ui/features/Dashboard/InstructorDashboard/RecordLiveClass/AddRecordLiveClassTable";
import { useState } from "react";
import AddRecordLiveClassModal from "@/src/components/ui/features/Dashboard/InstructorDashboard/RecordLiveClass/AddRecordLiveClassModal";

const LiveClassList = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const {
    onOpen: recordClassOnOpen,
    isOpen: recordClassIsOpen,
    onOpenChange: recordClassOnOpenChange,
  } = useDisclosure();
  const [activeTab, setActiveTab] = useState("liveClassList");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  return (
    <>
      <div className="font-liador">
        <div className="flex justify-between items-center mb-4">
          <Title title="লাইভ ক্লাস" />
          {activeTab === "recordedLiveClasslist" ? (
            <ModalOpenButton
              onclick={recordClassOnOpen}
              value={"Add Live Recorded Class"}
              Icon={MdOutlineVideoCall}
            />
          ) : (
            <ModalOpenButton
              onclick={onOpen}
              value={"Add Live Class"}
              Icon={MdLiveTv}
            />
          )}
        </div>
        <div className="flex w-full flex-col underline_modifi">
          <Tabs
            aria-label="Options"
            variant="underlined"
            size="lg"
            fullWidth={false}
            color={"black"}
            className={`block tab`}
            onSelectionChange={handleTabChange}
            selectedKey={activeTab}
            classNames={{ tabList: "flex-wrap md:flex-nowrap" }}
          >
            <Tab
              className={`items-start justify-start `}
              key="liveClassList"
              title="লাইভ ক্লাস লিস্ট "
            >
              <AddLiveClassTable />
            </Tab>
            <Tab
              className={`items-start justify-start`}
              key="recordedLiveClasslist"
              title="রেকর্ডেড লাইভ ক্লাস লিস্ট"
            >
              <AddRecordLiveClassTable />
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* LIve class add modal */}
      <AddLiveClassModal isOpen={isOpen} onOpenChange={onOpenChange} />
      {/* Record Class Modal Open */}
      <AddRecordLiveClassModal
        isOpen={recordClassIsOpen}
        onOpenChange={recordClassOnOpenChange}
      />
    </>
  );
};

export default LiveClassList;
