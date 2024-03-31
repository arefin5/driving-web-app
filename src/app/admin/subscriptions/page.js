"use client";

import AddSubscriptionModal from "@/src/components/Admin/Subscription/AddSubscriptionModal";
import AllSubsctipionTable from "@/src/components/Admin/Subscription/AllSubsctipionTable";
import ModalOpenButton from "@/src/components/ui/features/Dashboard/InstructorDashboard/ModalOpenButton";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Tabs, Tab, useDisclosure } from "@nextui-org/react";
const SubscriptionsPage = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="font-liador">
        <div className="flex justify-between items-center mb-4">
          <Title title="সাবস্ক্রিপশন সমূহ " />
          <ModalOpenButton
            onclick={onOpen}
            value={"Add Subscription"}
            // Icon={MdOutlineLibraryAdd}
          />
        </div>

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
              key="allSubscriptionlists"
              title="সকল সাবস্ক্রিপশন "
            >
              <AllSubsctipionTable />
            </Tab>
          </Tabs>
        </div>
      </div>
      <AddSubscriptionModal onOpenChange={onOpenChange} isOpen={isOpen} />
    </>
  );
};

export default SubscriptionsPage;
