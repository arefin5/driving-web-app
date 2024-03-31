"use client";
import { useEffect, useState } from "react";
import PricingPayment from "./PricingPayment";
import icon from "/public/assets/icons/editor_choice.svg";
import Banner from "/public/assets/Courses/courses_banner.svg";
import { Image } from "@nextui-org/react";
const PricingPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://backend.driveshikhun.com/api/v1/subscriptionPlans/getSubscriptionPlans")
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data);
      });
  }, []);

  console.log(data);
  return (
    <main className="pb-[60px] pt-3">
      {/* Banner section */}
      <section className="container font-liador text-white ">
        <div
          className="text-center bg-cover h-[200px] md:h-[282px] flex flex-col items-center justify-center bg-no-repeat bg-center rounded-lg"
          style={{ background: `url(${Banner.src})` }}
        >
          <h1 className=" font-bold text-2xl md:text-[40px] pb-4">
            আমাদের সাবস্ক্রিপশন প্যাকেজ সমূহ
          </h1>
          <p className="md:text-xl text-base md:px-0 px-5">
            আপনার পছন্দের কোর্সটি বেছে নিন আর দক্ষতা অর্জন করে হয়ে উঠুন
            স্বাবলম্বী।
          </p>
        </div>
      </section>
      <section className="container my-10 font-liador">
        <h2 className="text-[40px] font-semibold primary-text-color mb-6 dark:text-white">
          কোর্সটি কিনতে আমাদের সাবস্ক্রিপশন প্যাকেজ সমূহ দেখে নিন{" "}
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {data?.map((item) => (
            <div
              key={item._id}
              className=" flex items-center justify-center flex-col bg-loginButton rounded-md py-10 px-8 h-full"
            >
              <div className="mb-10">
                <span className="bg-white/10 text-white inline-block text-xl font-semibold px-6 py-3 rounded mb-8">
                  {item.name}
                </span>
                <h2 className="text-[40px] text-center font-semibold text-white">
                  ৳ {item.price}
                </h2>
                <p className="text-white text-xl font-light text-center">
                  {item.duration} মাস মেয়াদ
                </p>
              </div>

              <div className="flex-1  flex flex-col gap-4 mb-8">
                {item.features?.map((feature, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <Image width={24} height={24} src={icon.src} alt="" />
                    <p className="text-white text-xl font-light">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="w-full mt-auto">
                <PricingPayment plan={item} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
