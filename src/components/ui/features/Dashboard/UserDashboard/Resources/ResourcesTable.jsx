const ResourcesTable = () => {
  return (
    <div className="relative border border-solid overflow-x-scroll lg:overflow-hidden  border-black/30 rounded-xl ">
      <table className="w-full table-auto m-auto text-sm text-left   rounded-xl">
        <thead className="text-xs  text-white uppercase  pl-10  bg-loginButton">
          <tr className="text-lg ">
            <th scope="col" className="p-6 text-left">
              নাম
            </th>
            <th scope="col" className="p-6 text-center">
              সময়
            </th>
            <th scope="col" className="p-6 text-center">
              একশন
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white  primary-text-color dark:text-white border-b border-solid border-black/30 dark:bg-gray-800 dark:border-gray-700 text-lg">
            <td className="flex">
              <div className="p-6 font-medium whitespace-nowrap flex items-center gap-2">
                <span>Driving Tips and Tricks.pdf</span>
              </div>
            </td>
            <td className=" p-6 whitespace-nowrap text-center">
              শনি ১১ নভে রাত ১০:০০
            </td>
            <td className=" p-6 whitespace-nowrap text-center">
              <button className="bg-secondaryGradiant   px-6 py-1 rounded text-white">
                দেখুন
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResourcesTable;
