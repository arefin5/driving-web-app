"use client";
import Logo from "/public/assets/header/logo.svg";
import whiteLogo from "/public/assets/header/whitLogo.svg";
import Language from "/public/assets/header/language.png";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";
import ToogleTheme from "./ToogleTheme";
import userIcon from "/public/assets/header/account_circle.svg";
import userIconMobile from "/public/assets/header/account_circle_white.svg";
import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import {
  MdOutlineContentPasteSearch,
  MdOutlineDashboard,
} from "react-icons/md";
import {
  Badge,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
  useDisclosure,
} from "@nextui-org/react";
import { IoCheckmarkDone, IoNotifications } from "react-icons/io5";

import LoginModal from "../../ui/Authentication/LoginModal/LoginModal";

import SignUpModal from "../../ui/Authentication/SignUpModal/SignUpModal";

import { useState } from "react";

import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";


import { useRouter } from "next/navigation";
import useAuthContext from "@/src/Hooks/context/useAuthContext";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";

const Header = () => {
  const axiosPublic = useAxiosPublic();

  let { user, setUser } = useAuthContext();
  const { data } = useGetSingleUserData();

  const { push } = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  const {
    onOpen: onOpenSignUp,
    isOpen: isOpenSignUp,
    onOpenChange: onOpenChangeSignUp,
  } = useDisclosure();
  const handleLoginModal = () => {
    onOpen();
  };

  const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Country",
      href: "/country",
      dropDownArrow: true,
    },
    {
      title: "Courses",
      href: "/courses",
      dropDownArrow: true,
    },
    {
      title: "Contact Us",
      href: "/contactUs",
    },
  ];
  // handle logout
  const handleLogout = async () => {
    const { data } = await axiosPublic.post("/user/removeToken");
    console.log("token", data);
    if (data.status === "success") {
      setUser(null);
      localStorage.removeItem("token");
      push("/");
    }
  };

  return (
    <>
      <header
        className={` shadow-md font-liador z-50 relative backdrop-blur-lg bg-white dark:bg-[#181F4E] bg-opacity-50 dark:text-white py-5 `}
      >
        <nav className="flex justify-between items-center container">
          <Link href="/">
            <Image
              width={60}
              height={50}
              className="w-[60px] n_md:w-full hidden dark:inline-block"
              src={whiteLogo}
              alt="drive shikun logo"
            />
            <Image
              width={60}
              height={50}
              className="w-[60px] n_md:w-full inline-block dark:hidden"
              src={Logo}
              alt="drive shikun logo"
            />
          </Link>
          <div className="flex items-center gap-2 n_md:gap-6">
            <ul className={`hidden n_md:flex  items-center `}>
              {menuItems.map((menuItem) => (
                <NavItem
                  openMenu={openMenu}
                  key={menuItem.title}
                  item={menuItem}
                />
              ))}
            </ul>
            <div className="relative">
              <Image
                className="w-[20px] md:max-w-full cursor-pointer"
                src={Language}
                alt="change language"
              />
              {/* Show Google Translate component only if language is not English */}
            </div>
            {/* Dark mode light mode */}
            <ToogleTheme />
            {/* desktop Login signup button and user profile image */}
            <div className="hidden n_md:flex">
              {user ? (
                <div className="flex md:gap-3 lg:gap-6 items-center">
                  <Link
                    href={`${data?.role === "admin" ? "/admin" : "/dashboard"}`}
                  >
                    <button className="bg-primaryGradiant rounded font-liador font-semibold text-white flex py-3 px-6 gap-[10px] items-center ">
                      ড্যাশবোর্ড <MdOutlineDashboard className="text-2xl" />
                    </button>
                  </Link>
                  {/* Notifications Start */}

                  <Dropdown
                    className="font-liador"
                    classNames={{
                      backdrop: "dark:bg-default/30 bg-primarySolid/30  ",
                      base: "dark:bg-[#13236C]",
                      content: "dark:bg-[#13236C]",
                    }}
                    backdrop="blur"
                  >
                    <DropdownTrigger>
                      <Button
                        fullWidth={false}
                        radius="full"
                        aria-label="more than 99 notifications"
                        variant="light"
                        className="bg-[#EBEBEB] px-0 min-w-unit-10 overflow-visible"
                      >
                        <Badge
                          content="১"
                          shape="circle"
                          showOutline={false}
                          placement="bottom-right"
                          className="bg-[#F77878] text-[#2B388F]"
                        >
                          <IoNotifications
                            className="text-[#2B388F]"
                            size={24}
                          />
                        </Badge>
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      itemClasses={{
                        base: " border-none data-[hover=true]:bg-pink-100 :first-child:data-[hover=false]:bg-none",
                      }}
                      itemRef="notificationItem"
                      classNames={{ base: "w-[400px]" }}
                      variant="faded"
                      aria-label="Static Actions"
                    >
                      <DropdownItem
                        classNames={{
                          base: "border-0 hover:border-0 bg-none :first-child:data-[hover=false]:bg-none ",
                        }}
                      >
                        <div className="flex justify-between border-b border-solid border-secondarySolid pb-1">
                          <h2 className="text-2xl font-semibold ">
                            Notifications
                          </h2>
                          <p className="text-xl font-medium text-secondarySolid flex items-center gap-2">
                            <IoCheckmarkDone /> mark all
                          </p>
                        </div>
                      </DropdownItem>
                      <DropdownItem>
                        <div className="flex gap-5">
                          <MdOutlineContentPasteSearch
                            size={40}
                            className="text-primarySolid"
                          />
                          <div className="space-y-1">
                            <p className="text-black/80 text-xl font-medium ">
                              Notifications one here
                            </p>
                            <p className="text-sm text-slate-600">
                              18 hours ago
                            </p>
                            <button className="bg-secondarySolid/20 text-primarySolid px-3 py-1 text-sm font-medium rounded">
                              check It
                            </button>
                          </div>
                        </div>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                  {/* Notifications End */}
                  {/* User  */}
                  <Dropdown
                    classNames={{
                      base: "bg-primaryGradiant w-[282px] px-4 py-3 rounded-lg",
                      content: "bg-none bg-opacity-0 ",
                      backdrop: " bg-primarySolid/30  ",
                    }}
                    placement="bottom-end"
                    backdrop="blur"
                  >
                    <DropdownTrigger>
                      <User
                        as="button"
                        avatarProps={{
                          isBordered: true,
                          src: data?.profilePicture
                            ? data?.profilePicture
                            : "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                        }}
                        className="transition-transform"
                      />
                    </DropdownTrigger>
                    <DropdownMenu
                      itemClasses={{
                        base: "bg-white dark:bg-[#13236C] px-3 my-1 py-3",
                      }}
                      aria-label="User Actions"
                      variant="border"
                    >
                      <DropdownItem className="" key="settings">
                        <Link href={"/"}>My Settings</Link>
                      </DropdownItem>

                      <DropdownItem
                        onClick={handleLogout}
                        className=""
                        key="logout"
                        color="danger"
                      >
                        Log Out
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              ) : (
                <div className="border border-solid hover:border-[#CE2786] border-primarySolid dark:border-white px-3 py-1  items-center gap-3 flex rounded hover:bg-secondaryGradiant duration-200 hover:text-white">
                  <button
                    className={`text-base font-liador md:text-sm lg:text-base outline-none primary-text-color dark:text-white py-2 font-semibold px-0  hover:text-white `}
                  >
                    <span
                      onClick={handleLoginModal}
                      className="hover:underline"
                    >
                      Log In
                    </span>
                    /
                    <span
                      onClick={() => onOpenSignUp()}
                      className="hover:underline"
                    >
                      Sign Up
                    </span>
                  </button>
                  <Image
                    width={24}
                    height={24}
                    src={userIcon}
                    alt="User demo Profile"
                  />
                </div>
              )}
            </div>

            {/* Toogle menu bar Icon */}
            <div className="n_md:hidden">
              <HiBars3
                onClick={() => setOpenMenu(true)}
                className="text-primarySolid text-3xl cursor-pointer"
              />
            </div>
          </div>
          {/* Mobile menu */}
          <div
            style={{
              transform: openMenu ? "rotateX(0deg)" : "rotateX(90deg)",
            }}
            className={`absolute !z-[9999] h-screen shadow-2xl top-0 left-0 right-0 w-full transition-transform duration-400 px-7 py-5 bg-[#F9F9F9] dark:bg-[#13236C] n_md:hidden  origin-top flex items-center justify-between flex-col overflow-hidden`}
          >
            <IoMdClose
              className="self-end text-3xl text-primarySolid cursor-pointer"
              onClick={() => setOpenMenu(false)}
            />

            <div className="mt-9 w-full">
              {/*mobile Login signup button and user profile image */}
              <div className="">
                {user ? (
                  <div className="flex  items-center justify-between">
                    <Link
                      href={`${
                        user?.userRole === "admin" ? "/admin" : "/dashboard"
                      }`}
                    >
                      <button
                        onClick={() => setOpenMenu(false)}
                        className="bg-primaryGradiant rounded font-liador font-semibold text-white flex py-3 px-6 gap-[10px] items-center "
                      >
                        ড্যাশবোর্ড <MdOutlineDashboard className="text-2xl" />
                      </button>
                    </Link>
                    {/*Mobile Notifications Start */}

                    <Dropdown
                      className="font-liador"
                      classNames={{
                        backdrop: " bg-primarySolid/30  ",
                        content: "dark:bg-[#13236C]",
                      }}
                      backdrop="blur"
                    >
                      <DropdownTrigger>
                        <Button
                          fullWidth={false}
                          radius="full"
                          aria-label="more than 99 notifications"
                          variant="light"
                          className="bg-[#EBEBEB] px-0 min-w-unit-10 overflow-visible"
                        >
                          <Badge
                            content="১"
                            shape="circle"
                            showOutline={false}
                            placement="bottom-right"
                            className="bg-[#F77878] text-[#2B388F]"
                          >
                            <IoNotifications
                              className="text-[#2B388F]"
                              size={24}
                            />
                          </Badge>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        itemClasses={{
                          base: " border-none dark:text-white data-[hover=true]:bg-pink-100 :first-child:data-[hover=false]:bg-none",
                        }}
                        itemRef="notificationItem"
                        classNames={{ base: "w-[300px] sm:w-[580px]" }}
                        // className="w-dvw"
                        variant="faded"
                        aria-label="Static Actions"
                      >
                        <DropdownItem
                          classNames={{
                            base: "border-0 hover:border-0 bg-none :first-child:data-[hover=false]:bg-none ",
                          }}
                        >
                          <div className="flex justify-between border-b border-solid border-secondarySolid pb-1">
                            <h2 className="text-2xl font-semibold ">
                              Notifications
                            </h2>
                            <p className="text-xl font-medium text-secondarySolid flex items-center gap-2">
                              <IoCheckmarkDone /> mark all
                            </p>
                          </div>
                        </DropdownItem>
                        <DropdownItem>
                          <div className="flex gap-5">
                            <MdOutlineContentPasteSearch
                              size={40}
                              className="text-primarySolid"
                            />
                            <div className="space-y-1">
                              <p className="text-black/80 dark:text-white text-xl font-medium ">
                                Notifications one here
                              </p>
                              <p className="text-sm text-slate-600">
                                18 hours ago
                              </p>
                              <button className="bg-secondarySolid/20 text-primarySolid px-3 py-1 text-sm font-medium rounded">
                                check It
                              </button>
                            </div>
                          </div>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                    {/* Notifications End */}
                    {/* User  */}
                    <Dropdown
                      classNames={{
                        base: "bg-primaryGradiant w-[282px] px-4 py-3 rounded-lg",
                        content: "bg-none bg-opacity-0",
                        backdrop: " bg-primarySolid/30  ",
                      }}
                      placement="bottom-end"
                      backdrop="blur"
                    >
                      <DropdownTrigger>
                        <User
                          as="button"
                          avatarProps={{
                            isBordered: true,
                            src: data?.profilePicture
                              ? data?.profilePicture
                              : "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                          }}
                          className="transition-transform"
                        />
                      </DropdownTrigger>
                      <DropdownMenu
                        itemClasses={{ base: "bg-white px-3 my-1 py-3" }}
                        aria-label="User Actions"
                        variant="border"
                      >
                        <DropdownItem className="" key="settings">
                          My Settings
                        </DropdownItem>

                        <DropdownItem
                          onClick={handleLogout}
                          className=""
                          key="logout"
                          color="danger"
                        >
                          Log Out
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                ) : (
                  <div className="border border-solid border-primarySolid p-3  items-center gap-3 flex rounded">
                    <button
                      className={`text-base font-liador md:text-sm lg:text-base outline-none primary-text-color dark:text-white py-2 font-semibold px-0  `}
                    >
                      <span
                        onClick={handleLoginModal}
                        className="hover:underline inline-block"
                      >
                        Log In
                      </span>
                      /
                      <span
                        onClick={() => onOpenSignUp()}
                        className="hover:underline"
                      >
                        Sign Up
                      </span>
                    </button>
                    <Image
                      width={24}
                      height={24}
                      src={userIconMobile}
                      alt="User demo Profile"
                    />
                  </div>
                )}
              </div>
              {/* Mobile Menu  */}
              <ul className="mt-5">
                {menuItems.map((menuItem) => (
                  <NavItem
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                    key={menuItem.title}
                    item={menuItem}
                  />
                ))}
              </ul>
            </div>
            <Link className="mt-auto" href="/">
              <Image
                className="w-[60px] md:w-full"
                src={Logo}
                alt="drive shikun logo"
              />
            </Link>
          </div>
        </nav>
      </header>
      {/* Login modal */}
      <LoginModal isOpen={isOpen} onOpenChange={onOpenChange} />
      {/* Signup modal */}
      <SignUpModal isOpen={isOpenSignUp} onOpenChange={onOpenChangeSignUp} />
    </>
  );
};

export default Header;
