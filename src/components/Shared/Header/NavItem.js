"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ item, setOpenMenu, openMenu }) => {
  const pathname = usePathname();

  return (
    <li
      onClick={() => openMenu && setOpenMenu(false)}
      className="relative group shadow-md md:shadow-none n_md:mb-0 mb-3 px-5 lg:px-[14px] n_md:py-0  py-3 rounded"
    >
      <Link
        className={`${
          pathname === item.href
            ? "second-text-color font-bold text-base"
            : "primary-text-color font-semibold dark:text-white"
        } flex items-center gap-2 md:justify-normal px-20 n_md:px-0 `}
        href={item.href}
      >
        {item.title}
      </Link>
    </li>
  );
};

export default NavItem;
