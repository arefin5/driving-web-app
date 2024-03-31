"use client";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import PendingInstructor from "@/src/components/PendingInstructor/PendingInstructor";

import InstructorSidebar from "@/src/components/ui/features/Dashboard/InstructorDashboard/InstructorSidebar/InstructorSidebar";
import UserSidebar from "@/src/components/ui/features/Dashboard/UserDashboard/UserSidebar/UserSidebar";
import { useState } from "react";

const UserDashboardLayout = ({ children }) => {
  const { data: user } = useGetSingleUserData();
  const userRole = user?.role;
  const userStatus = user?.status;
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <section className={` container pt-12 overflow-hidden overflow-y-auto `}>
      <div className="flex lg:flex-row flex-col justify-between gap-5 pb-12 ">
        {/* user  */}
        {userRole === "user" && (
          <UserSidebar
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
          />
        )}
        {/* Instructor */}
        {userRole === "instructor" && (
          <>
            {userStatus === "success" && (
              <InstructorSidebar
                toggleSidebar={toggleSidebar}
                setToggleSidebar={setToggleSidebar}
              />
            )}
          </>
        )}

        <main
          className={`flex-1 min-h-full scrollbar-hide  overflow-y-auto font-liador ${
            toggleSidebar ? "pl-10" : ""
          }`}
        >
          {userRole === "user" && children}
          {userRole === "instructor" && userStatus === "success" && children}
          {userRole === "instructor" && userStatus !== "success" && (
            <PendingInstructor user={user} />
          )}
        </main>
      </div>
    </section>
  );
};

export default UserDashboardLayout;
