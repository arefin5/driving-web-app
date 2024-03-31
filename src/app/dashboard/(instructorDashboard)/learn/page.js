"use client";


import AddLearnModal from "@/src/components/Instructor/learn/AddLearnModal";
import AllLearnTable from "@/src/components/Instructor/learn/AllLearnTable";
import ModalOpenButton from "@/src/components/ui/features/Dashboard/InstructorDashboard/ModalOpenButton";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Tabs, Tab, useDisclosure } from "@nextui-org/react";
const CategoryPage = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="font-liador">
        <div className="flex justify-between items-center mb-4">
          <Title title="Learn" />
          <ModalOpenButton
            onclick={onOpen}
            value={"Add Learn"}
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
              key="allCategory"
              title="All learn"
            >
              <AllLearnTable />
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* Add category modal  */}
      <AddLearnModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default CategoryPage;
