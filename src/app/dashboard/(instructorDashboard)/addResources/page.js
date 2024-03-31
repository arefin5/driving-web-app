"use client";
import ModalOpenButton from "@/src/components/ui/features/Dashboard/InstructorDashboard/ModalOpenButton";
import AddResourcesModal from "@/src/components/ui/features/Dashboard/InstructorDashboard/Resources/AddResourcesModal";
import AddResourcesTable from "@/src/components/ui/features/Dashboard/InstructorDashboard/Resources/AddResourcesTable";

import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Tabs, Tab, useDisclosure } from "@nextui-org/react";
import { MdOutlineLibraryAdd } from "react-icons/md";

const AddResources = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="font-liador">
        <div className="flex justify-between items-center mb-4">
          <Title title=" রিসোর্স" />
          <ModalOpenButton
            onclick={onOpen}
            value={"Add Resources"}
            Icon={MdOutlineLibraryAdd}
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
              key="documnetsLink"
              title="ডকুমেন্টস ও লিংক"
            >
              <AddResourcesTable />
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* Add resources modal  */}
      <AddResourcesModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default AddResources;
