"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import bg from "/public/assets/OurPartner/partner.svg";
import techMint from "/public/assets/OurPartner/techmint.svg";
import { useEffect, useState } from "react";
import Loading from "@/src/app/loading";
import { Image } from "@nextui-org/react";

const OurPartner = () => {
  let arr = [1, 2, 4, 5, 6, 7, 8];
  const [partnerData, setPartnerData] = useState([]);
  const [investorData, setInvestorData] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch data for the carousel

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://backend.driveshikhun.com/api/v1/partners/getPartners`
        );
        const data = await response.json();

        setPartnerData(data.data);

        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
    const fetchinvestor = async () => {
      try {
        const response = await fetch(
          `https://backend.driveshikhun.com/api/v1/investor/getInvestors`
        );
        const data = await response.json();

        setInvestorData(data.data);

        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchinvestor();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <section
      style={{
        background: `url(${bg.src}), #F5F6FA`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="py-[50px] font-liador dark:!bg-[url(/assets/OurPartner/darkbg.svg)]   "
    >
      <div className="container">
        {/* Investor */}
        <div>
          <div className=" relative max-w-[340px] mx-auto  mb-10">
            <h2 className=" md:text-[40px] text-2xl  primary-text-color dark:text-white font-semibold py-3 text-center">
              আমাদের ইনভেস্টর
            </h2>
            <div className="absolute right-0  -top-5">
              <Image
                src="/assets/benefitsSectionBanner/icon.png"
                width={50}
                height={50}
                alt="benefits"
              />
            </div>
          </div>
          <>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
              breakpoints={{
                767: {
                  slidesPerView: 3, // Show 2 slides on tablets
                },
                1024: {
                  slidesPerView: 3, // Show 3 slides on laptops
                },
                1440: {
                  slidesPerView: 4, // Show 4 slides on laptops
                },
                1536: {
                  slidesPerView: 5, // Show 4 slides on laptops
                },
              }}
            >
              {investorData?.map((i) => (
                <SwiperSlide key={i}>
                  <div className="h-[188px] border border-solid border-slate-200 bg-white shadow-md rounded-2xl flex justify-center items-center">
                    <Image src={i.img} alt={i.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
        {/* Partner */}
        <div className="mt-20">
          <div className=" relative max-w-[310px] mx-auto  mb-10">
            <h2 className=" md:text-[40px] text-2xl dark:text-white  primary-text-color font-semibold py-3 text-center">
              আমাদের পার্টনার
            </h2>
            <div className="absolute right-0  -top-5">
              <Image
                src="/assets/benefitsSectionBanner/icon.png"
                width={50}
                height={50}
                alt="benefits"
              />
            </div>
          </div>
          <>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
              breakpoints={{
                767: {
                  slidesPerView: 3, // Show 2 slides on tablets
                },
                1024: {
                  slidesPerView: 3, // Show 3 slides on laptops
                },
                1440: {
                  slidesPerView: 4, // Show 4 slides on laptops
                },
                1536: {
                  slidesPerView: 5, // Show 4 slides on laptops
                },
              }}
            >
              {partnerData?.map((i) => (
                <SwiperSlide key={i}>
                  <div className="h-[188px] border border-solid border-slate-200 bg-white shadow-md rounded-2xl flex justify-center items-center">
                    <Image src={i.img} alt={i.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
