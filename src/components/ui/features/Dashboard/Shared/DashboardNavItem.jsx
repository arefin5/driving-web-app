"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
const DashboardNavItem = ({ Icon, title, href, toggleSidebar, isProfile }) => {
  const pathname = usePathname();
  return (
    <li
      className={` navItem hover:text-white dark:bg-slate-300 ${
        pathname === href
          ? " bg-loginButton hover:bg-secondaryGradiant shadow-md text-white"
          : " shadow-md primary-text-color dark:text-white "
      }  p-3 hover:text-white ${
        isProfile
          ? "px-9 dark:text-white dark:bg-slate-100"
          : "px-3 dark:text-white dark:bg-slate-100"
      } rounded `}
    >
      <Link
        href={href}
        className="flex gap-5 items-center text-base font-semibold"
      >
        <Icon
          className={` iconCustomColor dark:text-white ${
            pathname === href ? "text-white" : "text-[#2B388F] "
          } `}
          size={30}
        />
        {toggleSidebar ? "" : title}
      </Link>
    </li>
  );
};

export default DashboardNavItem;
