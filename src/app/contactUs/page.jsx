"use client";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import Banner from "/public/assets/Courses/courses_banner.svg";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://backend.driveshikhun.com/api/v1/contacts/addContacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, subject, message }),
        }
      );

      if (response.ok) {
        // Reset form fields on successful submission
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        toast.success("Successfully  sent your message!");
      } else {
        toast.error("Error sending the message");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message");
    }
  };
  return (
    <main className=" pb-0 pt-3">
      {/* Banner section */}
      <section className="container font-liador text-white ">
        <div
          className="text-center bg-cover h-[200px] md:h-[282px] flex flex-col items-center justify-center bg-no-repeat bg-center rounded-lg"
          style={{ background: `url(${Banner.src})` }}
        >
          <h1 className=" font-bold text-2xl md:text-[40px] pb-4">
            আমাদের সাথে যোগাযোগ করুন
          </h1>
          <p className="md:text-xl text-base md:px-0 px-5">
            আপনার পছন্দের কোর্সটি বেছে নিন আর দক্ষতা অর্জন করে হয়ে উঠুন
            স্বাবলম্বী।
          </p>
        </div>
      </section>
      <section className="my-12 font-liador container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-solid border-black/30 rounded px-5 lg:px-10 py-8 dark:bg-darkbg bg-[#f7f7f7]/50">
            <h2 className=" text-3xl lg:text-[40px] font-semibold text-primarySolid dark:text-white  mb-4">
              যোগাযোগ করুন
            </h2>
            <p className="lg:text-xl text-base text-primarySolid dark:text-white ">
              Collaborating for a better drive learning.
            </p>
            <div className="my-8 space-y-6">
              <div className="flex gap-5">
                <div className="!w-12 !h-12 bg-loginButton rounded-lg flex justify-center items-center">
                  <FaLocationDot size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="second-text-color dark:text-white  text-xl font-semibold">
                    ঠিকানা
                  </p>
                  <p className="primary-text-color text-base font-semibold">
                    Słowackiego 55/1 60-521 Poznań, Poland
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-loginButton rounded-lg flex justify-center items-center">
                  <FaPhoneAlt size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="second-text-color dark:text-white  text-xl font-semibold">
                    কল করুন
                  </p>
                  <p className="primary-text-color text-base font-semibold">
                    +48 792 187 894
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-loginButton rounded-lg flex justify-center items-center">
                  <MdEmail size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="second-text-color dark:text-white  text-xl font-semibold">
                    ইমেইল
                  </p>
                  <p className="primary-text-color dark:text-white  text-base font-semibold">
                    support@driveshikhun.com
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="primary-text-color dark:text-white  text-2xl md:text-[32px] mb-4">
                আমাদের সাথে কানেক্টেড থাকুন
              </h3>
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 bg-loginButton rounded-lg flex justify-center items-center">
                  <FaFacebookF size={24} className="text-white" />
                </div>
                <div className="w-12 h-12 bg-loginButton rounded-lg flex justify-center items-center">
                  <FaYoutube size={24} className="text-white" />
                </div>
                <div className="w-12 h-12 bg-loginButton rounded-lg flex justify-center items-center">
                  <RiInstagramFill size={24} className="text-white" />
                </div>
                <div className="w-12 h-12 bg-loginButton rounded-lg flex justify-center items-center">
                  <FaLinkedinIn size={24} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="border border-solid border-black/30 rounded px-5 lg:px-10 py-8 dark:bg-darkbg bg-[#f7f7f7]/50">
            <h2 className="text-3xl lg:text-[40px] font-semibold text-primarySolid dark:text-white  mb-4">
              আমাদের মেসেজ পাঠান
            </h2>
            <div>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label className="text-primarySolid font-semibold mb-2">
                    আপনার নাম
                  </label>
                  <input
                    type="text"
                    value={name}
                    placeholder="আপনার সম্পূর্ণ নাম লিখুন"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-solid border-black/30 rounded py-3 px-4 placeholder:text-black/50 text-black/90 outline-0 placeholder:text-xs"
                  />
                </div>
                <div>
                  <label className="text-primarySolid font-semibold mb-2">
                    আপনার ইমেইল
                  </label>
                  <input
                    type="text"
                    value={email}
                    placeholder="আপনার ইমেইল এড্রেস লিখুন                    "
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-solid border-black/30 rounded py-3 px-4 placeholder:text-black/50 text-black/90 outline-0 placeholder:text-xs"
                  />
                </div>
                <div>
                  <label className="text-primarySolid font-semibold mb-2">
                    আপনার সাবজেক্ট
                  </label>
                  <input
                    type="text"
                    value={subject}
                    placeholder="আপনার মেসেজ এর বিষয় লিখুন                    "
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full border border-solid border-black/30 rounded py-3 px-4 placeholder:text-black/50 text-black/90 outline-0 placeholder:text-xs"
                  />
                </div>
                <div>
                  <label className="text-primarySolid font-semibold mb-2">
                    আপনার মেসেজটি এখানে লিখুন
                  </label>
                  <textarea
                    value={message}
                    placeholder="আপনার সম্পূর্ণ মেসেজ লিখুন                    "
                    onChange={(e) => setMessage(e.target.value)}
                    cols="30"
                    rows="3"
                    className="w-full border border-solid border-black/30 rounded py-3 px-4 placeholder:text-black/50 text-black/90 outline-0 placeholder:text-xs"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-secondarySolid w-full font-semibold text-white py-3 rounded flex justify-center items-center gap-5"
                >
                  মেসেজ পাঠান <FaArrowRightLong size={24} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
