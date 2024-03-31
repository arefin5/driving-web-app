"use client";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import PendingInstructor from "@/src/components/PendingInstructor/PendingInstructor";

import InstructorDashboardHome from "@/src/components/ui/features/Dashboard/InstructorDashboard/InstructorDashboardHome/InstructorDashboardHome";
import UserDashboardHome from "@/src/components/ui/features/Dashboard/UserDashboard/UserDashboardHome/UserDashboardHome";

const UserDashboardPage = () => {
  const { data: user } = useGetSingleUserData();
  const userRole = user?.role;
  const userStatus = user?.status;
  return (
    <div>
      {userRole === "user" && <UserDashboardHome />}

      {userRole === "instructor" && (
        <>
          {userStatus === "success" && <InstructorDashboardHome />}
          {/* {userStatus === "pending" && <PendingInstructor />} */}
          {userStatus === "cancel" && <p>Your request is canceled</p>}
        </>
      )}
    </div>
  );
};

export default UserDashboardPage;
