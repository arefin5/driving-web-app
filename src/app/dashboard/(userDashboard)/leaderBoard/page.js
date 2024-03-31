import Image from "next/image";
import UserImage from "/public/assets/dashboard/LeaderBoard/user.png";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";

const LeaderBoardPage = () => {
  return (
    <section className="font-liador">
      <div className="flex flex-col md:flex-row justify-between gap-3  md:items-center">
        <div className="ml-5">
          <Title title="লীডারবোর্ড - র‍্যাংকিং" />
        </div>
        <select
          defaultValue="1.1 সহজ ড্রাইভিং - ১০১ অনুশীলন"
          className="bg-primaryGradiant rounded p-3  border-0 text-white"
        >
          <option className="" value="1.1 সহজ ড্রাইভিং - ১০১ অনুশীলন">
            1.1 সহজ ড্রাইভিং - ১০১ অনুশীলন
          </option>
          <option className="" value="1.2 সহজ ড্রাইভিং - ১০১ অনুশীলন">
            1.2 সহজ ড্রাইভিং - ১০১ অনুশীলন
          </option>
        </select>
      </div>
      <div className="flex lg:items-center flex-col lg:flex-row lg:gap-[150px] ml-5">
        <h3>
          <span className="primary-text-color dark:text-white text-lg">
            আপনার র‍্যাংকিং -{" "}
          </span>
          <span className="second-text-color  text-[32px] font-semibold">
            ৩য়
          </span>
        </h3>
        <h3>
          <span className="primary-text-color dark:text-white text-lg">
            আপনার রেজাল্ট -{" "}
          </span>
          <span className="second-text-color  text-[32px] font-semibold">
            ৯৩%
          </span>
        </h3>
      </div>
      {/* Leader Board table */}
      <div className="relative mt-6 border border-solid border-black/30 rounded-xl ">
        <table className="w-full table-fixed m-auto border-collapse  text-sm text-left overflow-hidden  rounded-xl">
          <thead className=" text-white uppercase bg-loginButton">
            <tr className="text-lg ">
              <th scope="col" className="p-6">
                নাম
              </th>
              <th scope="col" className="p-6 text-center">
                পজিশন
              </th>
              <th scope="col" className="p-6 text-center ">
                রেজাল্ট
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white justify-between primary-text-color dark:text-white border-b border-solid border-black/30 dark:bg-gray-800 dark:border-gray-700 text-lg px-[60px]">
              <th
                scope="row"
                className="p-6 text-left font-medium whitespace-nowrap flex items-center gap-4"
              >
                <Image src={UserImage} alt="user profile image" />
                <span className="text-2xl">N / A</span>
              </th>
              <td className="p-6 text-center text-[32px] whitespace-nowrap">
                ১ম
              </td>
              <td className="p-6 text-center text-2xl whitespace-nowrap">
                ৯৯%
              </td>
            </tr>
          </tbody>
        </table>
      </div>{" "}
    </section>
  );
};

export default LeaderBoardPage;
