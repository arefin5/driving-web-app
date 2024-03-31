"use client";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Image, Pagination } from "@nextui-org/react";
import Loading from "../../loading";

const Page = () => {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0); // Start from page 0 qwe2r45
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://backend.driveshikhun.com/api/v1/user/specific?page=${currentPage}&size=${itemsPerPage}`
        );
        const data = await response.json();

        setUsers(data.data);
        setTotal(data.total);
        setTotalPages(Math.ceil(total / itemsPerPage));

        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchUsers();
  }, [currentPage, itemsPerPage, total]);

  const handleDeleteUser = async (userId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await fetch(
          `https://backend.driveshikhun.com/api/v1/user/deleteUser/${userId}`,
          {
            method: "DELETE",
          }
        );

        if (response.status === 200) {
          setUsers(users.filter((user) => user._id !== userId));
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } else {
          throw new Error("Failed to delete user");
        }
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      Swal.fire("Error", "Failed to delete the user.", "error");
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user?.name?.toLowerCase().includes(searchInput.toLowerCase()) ||
      user?.email?.toLowerCase().includes(searchInput.toLowerCase())
  );

  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][date.getMonth()];
  const formattedDate = `${day} ${monthName} ${year}`;
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" mt-3">
      <div className="  lg:flex lg:justify-between">
        <div>
          <Title title={"টোটাল ইউজার একাউন্ট"} />
          <p className=" font-medium text-base second-text-color">
            {formattedDate}
          </p>
        </div>
        <div className="  w-full lg:max-w-xs flex justify-center items-center gap-2  text-xl  rounded-md p-2">
          <p>টোটাল ইউজার:</p>

          <p className="font-bold">{total}</p>
        </div>
      </div>

      <div className="flex relative rounded-md w-full mt-3">
        <input
          type="text"
          placeholder="ইমেইল এবং নাম দিয়ে সার্চ করুন"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
        />
        <button className="inline-flex items-center gap-2 bg-primarySolid text-white text-lg font-semibold py-3 px-6 rounded-r-md hover:bg-secondary/90">
          <span>search</span>
          <span className="hidden md:block">
            <Icon icon="material-symbols:search"></Icon>
          </span>
        </button>
      </div>
      <div className="relative border border-solid border-black/30 rounded-xl pb-5 !max-h-full overflow-auto md:overflow-y-auto md:scrollbar-hide mt-6">
        <table className="w-full max-lg:min-w-[700px] px-10 table-auto text-sm text-left overflow-scroll md:overflow-hidden  rounded-xl">
          <thead className="text-xs text-white uppercase  pl-10  bg-loginButton">
            <tr className="text-lg grid grid-cols-12 px-10 py-5 items-center">
              <th scope="col" className=" text-left col-span-1">
                #
              </th>
              <th scope="col" className=" col-span-2 text-center">
                নাম
              </th>
              <th scope="col" className=" col-span-2 text-center">
                ইমেইল
              </th>
              <th scope="col" className="col-span-3 text-center">
                ফোন নাম্বার
              </th>
              <th scope="col" className="col-span-2 text-center">
                রোল
              </th>
              <th scope="col" className=" text-right col-span-2">
                একশন
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((user, index) => (
              <tr
                key={user?._id}
                className="mx-5 mt-4  bg-white border-solid border-2 rounded border-primarySolid primary-text-color dark:text-white dark:bg-gray-800 dark:border-gray-700 text-lg grid grid-cols-12"
              >
                <th
                  scope="row"
                  className="pl-4 py-3 font-medium whitespace-nowrap text-center  border-collapse col-span-1"
                >
                  <span className="flex items-center gap-2">{index + 1}</span>
                </th>
                <td className="py-3 text-center col-span-2 border-collapse">
                  {user?.name}
                </td>
                <td className="py-3 text-center col-span-2 border-collapse">
                  {user?.email}
                </td>
                <td className=" py-3 text-center col-span-3 border-collapse">
                  {user?.phone}
                </td>
                <td className=" py-3 text-center col-span-2 border-collapse">
                  {user?.role}
                </td>
                <td className=" py-3 text-right  col-span-2 border-collapse mr-3">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    aria-label="Open delete confirmation"
                    className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300"
                  >
                    <Icon
                      className="cursor-pointer dark:text-white text-[#2B388F]"
                      icon="material-symbols:delete-outline"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination here */}
      <div className=" my-5">
        <Pagination
          classNames={{
            item: "w-8 h-8 text-small rounded-none bg-transparent",
            cursor: `bg-primaryGradiant dark:!bg-darkbg shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold`,
            prev: "dark:!bg-darkbg",
            next: "dark:!bg-darkbg",
          }}
          showControls
          total={totalPages}
          initialPage={currentPage + 1} // Increment currentPage by 1 for UI display
          page={currentPage + 1} // Increment currentPage by 1 for UI display
          onChange={(currentPage) => {
            setCurrentPage(currentPage - 1); // Decrement currentPage by 1 internally
          }}
        />
      </div>
    </div>
  );
};

export default Page;
