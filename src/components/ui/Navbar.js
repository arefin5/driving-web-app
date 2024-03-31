import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../images/Home/navber/Group.png";
import icon1 from "../../images/Home/navber/Group (2).png";
import icon2 from "../../images/Home/navber/Icons.png";
import icon3 from "../../images/Home/navber/Subtract.png";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" p-5 shadow md:px-10">
      <div className=" flex items-center justify-between">
        <Link href="/">
          <Image src={logo} width={100} height={100} alt=""></Image>
        </Link>

        <div className="hidden md:flex items-center font-semibold gap-6">
          <Link href="/">
            <button className="focus:text-secondary text-primary">হোম</button>
          </Link>
          <Link href="/">
            <button className="focus:text-secondary text-primary">দেশ</button>
          </Link>
          <Link href="/">
            <button className="focus:text-secondary text-primary">
              কোর্সসমূহ
            </button>
          </Link>
          <Link href="/">
            <button className="focus:text-secondary text-primary">
              যোগাযোগ
            </button>
          </Link>
          <Link href="/">
            <Image src={icon1} width={30} height={30} alt=""></Image>
          </Link>
          <button
            onClick={handleToggle}
            className={`bg-primary pr-7 py-1 px-1 rounded-full focus:outline-none
          }`}
          >
            <span
              className={`block w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                isActive ? "translate-x-full" : ""
              }`}
            >
              {isActive ? (
                <Image src={icon2} width={30} height={30} alt=""></Image>
              ) : (
                <Image src={icon3} width={30} height={30} alt=""></Image>
              )}
            </span>
          </button>
          <Link href="/">
            <button className="flex rounded items-center gap-3 px-3 py-2 border-primary border-2 duration-300 hover:text-secondary text-primary">
              লগ ইন / সাইন আপ
              <FaRegUserCircle className="text-2xl" />
            </button>
          </Link>
        </div>

        {/* small device sticky */}
        <div className="flex gap-3 items-center  md:hidden">
          <Link href="/">
            <Image src={icon1} width={30} height={30} alt=""></Image>
          </Link>
          <button
            onClick={handleToggle}
            className={`bg-primary pr-7 py-1 px-1 rounded-full focus:outline-none
          }`}
          >
            <span
              className={`block w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                isActive ? "translate-x-full" : ""
              }`}
            >
              {isActive ? (
                <Image src={icon2} width={30} height={30} alt=""></Image>
              ) : (
                <Image src={icon3} width={30} height={30} alt=""></Image>
              )}
            </span>
          </button>
          <button onClick={toggleMenu}>
            <IoMdMenu className="text-4xl text-primary" />
          </button>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidde block text-start">
        {isMenuOpen && (
          <div className="flex flex-col mt-5 font-semibold gap-2">
            <Link href="/">
              <button className="focus:text-secondary py-2 border-b-2 border-b-gray-400 text-primary">
                হোম
              </button>
            </Link>
            <Link href="/">
              <button className="focus:text-secondary py-2 border-b-2 border-b-gray-400 text-primary">
                দেশ
              </button>
            </Link>
            <Link href="/">
              <button className="focus:text-secondary py-2 border-b-2 border-b-gray-400 text-primary">
                কোর্সসমূহ
              </button>
            </Link>
            <Link href="/">
              <button className="focus:text-secondary py-2 border-b-2 border-b-gray-400 text-primary">
                যোগাযোগ
              </button>
            </Link>
            <Link className="mt-3" href="/">
              <button className="flex rounded items-center gap-3 px-3 py-2 border-primary border-2 duration-300 hover:text-secondary text-primary">
                লগ ইন / সাইন আপ
                <FaRegUserCircle className="text-2xl" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
