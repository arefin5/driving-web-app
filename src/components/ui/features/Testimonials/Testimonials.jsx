import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import quatation from "/public/assets/Testimonial/qutation.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://backend.driveshikhun.com/api/v1/reviews/getReviews"
        );
        setTestimonials(response.data.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="container testimonial font-liador -mt-40 max-h-[340px] h-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {testimonials?.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#FAFAFA] mx-10 md:mx-14 lg:mx-20  shadow-lg md:px-5 px-3 lg:px-[60px] py-12 rounded-lg flex flex-col md:flex-row justify-between lg:max-h-[400px] h-full items-center">
              <div className="flex-1">
                <Image src={quatation} alt="" width={54} height={40} />
                <p className="text-black  text-lg lg:text-2xl my-6 max-w-full pr-8">
                  {testimonial.review}
                </p>
                <h4 className="lg:text-[30px] text-xl primary-text-color capitalize">
                  {testimonial.name}
                </h4>
              </div>
              <div className="basis-[40%]">
                <Image
                  width={200}
                  height={200}
                  className=" xl:max-w-[387px] w-full xl:!h-[200px] !h-[200px] max-w-[200px] rounded-2xl  object-cover"
                  src={testimonial.img}
                  alt=""
                  layout="responsive"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
