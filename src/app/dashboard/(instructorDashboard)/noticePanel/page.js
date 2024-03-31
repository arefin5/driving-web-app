"use client";

import ModalOpenButton from "@/src/components/ui/features/Dashboard/InstructorDashboard/ModalOpenButton";
import AddNoticePanelModal from "@/src/components/ui/features/Dashboard/InstructorDashboard/NoticePanel/AddNoticePanelModal";
import NoticePanelTable from "@/src/components/ui/features/Dashboard/InstructorDashboard/NoticePanel/NoticePanelTable";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Tabs, Tab, useDisclosure } from "@nextui-org/react";

import { MdOutlineCircleNotifications } from "react-icons/md";

const NoticePanel = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="font-liador ">
        <div className="flex justify-between flex-wrap lg:flex-nowrap items-center mb-4">
          <Title title="নোটিশ প্যানেল" />
          <div className="flex flex-wrap lg:flex-nowrap max-lg:mt-5 items-center gap-6">
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
            <ModalOpenButton
              onclick={onOpen}
              value={"Add Notice"}
              Icon={MdOutlineCircleNotifications}
            />
          </div>
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
              key="allNotice"
              title="সকল নোটিশ"
            >
              <NoticePanelTable />
            </Tab>
            <Tab
              className={`items-start justify-start`}
              key="liveclassQuizAssignment"
              title="লাইভ ক্লাস, কুইজ ও অ্যাসাইনমেন্ট"
            >
              live calss quiz
            </Tab>
            <Tab
              className={`items-start justify-start`}
              key="others"
              title="অন্যান্য"
            >
              other
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* Open Add Modal */}
      <AddNoticePanelModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default NoticePanel;
