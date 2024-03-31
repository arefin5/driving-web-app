import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import UserHomeCard from "../../UserDashboard/UserDashboardHome/UserHomeCard";

const moment = require("moment");
require("moment/locale/bn"); // Import Bengali (Bangla) locale

// Set the locale to Bengali (Bangla)
moment.locale("bn");

const InstructorDashboardHome = () => {
  const { data } = useGetSingleUserData();
  const formattedDate = moment().format("LLLL");
  return (
    <div>
      <div className=" pl-[10px] pb-[50px]">
        <h2 className="text-lg  sm:text-3xl lg:text-[40px] font-semibold ">
          <span className="second-text-color">স্বাগতম,</span>
          <span className="primary-text-color capitalize dark:text-white">
            {" "}
            {data?.name}
          </span>
        </h2>
        <span className="second-text-color">আজ</span> {formattedDate}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <UserHomeCard />
        <UserHomeCard />
        <UserHomeCard />
        <UserHomeCard />
        <UserHomeCard />
        <UserHomeCard />
      </div>
    </div>
  );
};

export default InstructorDashboardHome;
