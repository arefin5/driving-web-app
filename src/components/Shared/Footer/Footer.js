"use client";

import footerLogo from "/public/assets/footer/footerLogo.png";

import Image from "next/image";
import paymentImage from "/public/assets/footer/payment.png";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
import Facebook from "/public/assets/footer/facebook.svg";
import Linkdin from "/public/assets/footer/linkdin.svg";
import Instragram from "/public/assets/footer/instragram.svg";
import Youtube from "/public/assets/footer/youtube.svg";
import FooterNav from "./FooterNav";
import Call from "/public/assets/footer/call.svg";
import Mail from "/public/assets/footer/mail.svg";
import Location from "/public/assets/footer/location.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "@/src/app/loading";
import Link from "next/link";
const Footer = ({ fontClasses }) => {
  const [email, setEmail] = useState("");

  const [footerData, setFooterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleSubscribe = async () => {
    try {
      const response = await axios.post(
        "https://backend.driveshikhun.com/api/v1/subscribe/addSubscribe",
        {
          email,
        }
      );
      console.log(response.data);
      toast.success("subscribing successful!");
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error("subscribing failed. Please try again later.");
    }
  };

  // Fetch data for the carousel
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://backend.driveshikhun.com/api/v1/footer/getFooters`
        );
        const data = await response.json();

        setFooterData(data.data[0]);

        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  }

  const quickMenuItems = [
    {
      title: "Academic Programme",
      href: "/",
    },
    {
      title: "Courses",
      href: "/country",
    },
    {
      title: "Live Workshop",
      href: "/courses",
    },
    {
      title: "Career",
      href: "/contact-us",
    },
  ];
  const companyMenuItems = [
    {
      title: "About Us",
      href: "/",
    },
    {
      title: "Refund Policy",
      href: "/country",
    },
    {
      title: "Privacy Policy",
      href: "/courses",
    },
    {
      title: "Terms & Conditions",
      href: "/contact-us",
    },
  ];
  return (
    <footer
      style={{
        background: `#E4EDF4`,
      }}
      className={`${fontClasses} font-liador py-[29px]  xl:bg-center  text-primarySolid`}
    >
      <div className="container n_lg:px-6">
        <div className=" n_lg:mx-[63px] pb-[27px]  border-b border-solid border-white">
          {/* Footer Logo and Links part */}
          <div className="flex flex-col n_md:flex-row gap-10 n_lg:gap-24  xl:gap-44">
            {/* Footer left side */}
            <div className="w-full n_md:w-[253px] ">
              <div className="flex flex-col sm:flex-row flex-wrap gap-7  n_md:gap-10">
                {/* Footer logo */}
                <div className="basis-full">
                  <Image
                    className="mb-5 n_md:mb-2"
                    src={footerLogo}
                    alt="logo"
                  />
                  <p className="text-base font-normal">
                    Driving Learning Platform <br />
                    <span className="text-[12px]">
                      Learn to drive with us, have a career with yourself.
                    </span>
                  </p>
                </div>
                {/* Download app button */}
                <div className="basis-5/12 n_md:basis-auto">
                  <p className="mb-1">
                    Download the
                    <span className="font-bold"> Drive Shikhun</span> App
                  </p>
                  <div className="flex n_md:flex-wrap gap-[10px]">
                    <Link
                      href={footerData?.playStoreUrl}
                      className="flex text-xs gap-[10px] bg-white p-2 items-center rounded"
                    >
                      <span className="text-[20px] ">
                        <BiLogoPlayStore className="text-[#304996]" />
                      </span>
                      <span className="primary-text-color">
                        Google Play Store
                      </span>
                    </Link>
                    <Link
                      href={footerData?.appStoreUrl}
                      className="flex text-xs gap-[10px] bg-white p-2 items-center rounded"
                    >
                      <span className="text-[20px] ">
                        <FaAppStoreIos className="text-[#304996]" />
                      </span>
                      <span className="primary-text-color">App Store</span>
                    </Link>
                  </div>
                </div>
                {/* social media part */}
                <div className="basis-6/12 md:basis-full">
                  <p>Connected with us on</p>
                  <div className="flex gap-[10px]">
                    <Link href={footerData?.facebook}>
                      <Image src={Facebook} alt="Facebook"></Image>
                    </Link>
                    <Link href={footerData?.youtubeUrl}>
                      <Image src={Youtube} alt="Youtube"></Image>
                    </Link>
                    <Link href={footerData?.linkedin}>
                      <Image src={Linkdin} alt="Linkdin"></Image>
                    </Link>
                    <Link href={footerData?.instagram}>
                      <Image src={Instragram} alt="Instragram"></Image>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer right side */}
            <div className="flex-1">
              <div className="flex flex-wrap sm:flex-nowrap gap-[65px] sm:gap-[30px] n_lg:gap-[30px] xl:gap-[73px] justify-between n_md:justify-between n_lg:justify-between">
                <FooterNav title={"Quick Link"} navitem={quickMenuItems} />
                <FooterNav title={"Company"} navitem={companyMenuItems} />
                {/* Contact part */}
                <nav className="basis-[123px] sm:basis-auto font-roboto text-center sm:text-left -mt-10 sm:mt-0">
                  <h3
                    className={`border-b font-semibold text-base n_md:text-2xl pb-2 border-solid font-liador border-white mb-4 md:mb-10  sm:mx-0 w-[123px]`}
                  >
                    Contact
                  </h3>
                  <ul className="flex-col flex gap-1 md:gap-4">
                    <li className="flex gap-2 text-xs n_md:text-xl items-center">
                      <Image src={Call} alt="call-icon" />{" "}
                      {footerData?.hotlineNumber}
                    </li>
                    <li className="flex gap-2 text-xs n_md:text-xl items-center">
                      <Image src={Location} alt="mail-icon" />{" "}
                      {footerData?.email}
                    </li>
                    <li className="flex w-[266px] n_md:w-[275px] gap-2 text-xs n_md:text-xl items-start leading-6">
                      <Image src={Mail} alt="location-icon" />{" "}
                      {footerData?.location}
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Newsletter */}
              <div className=" flex flex-col sm:flex-row sm:justify-center n_md:justify-end  mt-5 gap-4 ">
                <h3 className="text-2xl font-bold text-center mb-3 n_md:mb-0">
                  Our NewsLetter
                </h3>
                <div className="flex justify-between gap-4">
                  <input
                    className="w-[204px] sm:w-[256px] py-2 px-4 border border-solid border-[#C62F8F] text-black rounded"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="bg-secondaryGradiant py-2 px-4 rounded text-primarySolid"
                    onClick={handleSubscribe}
                  >
                    সাবস্ক্রাইব করুন
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright part */}
        <div className="flex flex-col  justify-between py-3 n_md:py-[29px]">
          <Image className="w-full n_md:w-auto" src={paymentImage} alt="logo" />
          <p className="text-center">
            <small className="block n_md:inline">
              {/* © 2023 Drive Shikhun.
              <span className="block n_md:inline">
                All Rights Reserved. Develop by Amir Faysal & Team
              </span> */}
              {footerData?.copyRights}
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
