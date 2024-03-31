import { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Spinner,
} from "@nextui-org/react";
import { PiUserCircleFill } from "react-icons/pi";
import { IoArrowForwardSharp } from "react-icons/io5";

import InformationModal from "../InformationModal/InformationModal";
import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import { toast } from "react-toastify";

const OtpModal = ({ isOpen, onOpenChange, email }) => {
  const axiosPublic = useAxiosPublic();
  const { refetch } = useGetSingleUserData();
  const [seconds, setSeconds] = useState(90);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const {
    isOpen: isOpenInfoModal,
    onOpen: onOpenInfoModal,
    onOpenChange: OnOpenChangeInfoModal,
  } = useDisclosure();
  const handleOptLogin = (e) => {
    setOtp(e.target.value);
    setOtpError("");
  };
  const handleOpenInfoModal = async (onClose, e) => {
    e.preventDefault();
    if (!otp) {
      setOtpError("Otp is required");
    } else {
      try {
        setLoading(true);
        const { data } = await axiosPublic.patch(`/user/loginWithOtp`, {
          otp,
          email,
        });

        if (data.status === "success") {
          localStorage.setItem("token", JSON.stringify(data.data));
          refetch();
        }
        if (data.error) {
          setOtpError(data.error);
        } else {
          onClose();
          onOpenInfoModal();
        }
      } catch (error) {
        // Handle network error
        console.error("Network error:", error);
        setOtpError("Network error occurred");
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    let intervalId = setInterval(() => {
      // Decrease the seconds by 1 every second
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalId); // Clear interval when seconds reach 0
          return 0; // Return 0 to stop further decrease
        } else {
          return prevSeconds - 1; // Decrease seconds by 1
        }
      });
    }, 1000); // Run every 1000 milliseconds (1 second)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handleResendOtp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosPublic.patch("/user/resendOtp", { email });
      console.log("data", data);
      if (data.status === "success") {
        toast.success(data.message);
        setSeconds(90);

        let intervalId = setInterval(() => {
          // Decrease the seconds by 1 every second
          setSeconds((prevSeconds) => {
            if (prevSeconds === 0) {
              clearInterval(intervalId); // Clear interval when seconds reach 0
              return 0; // Return 0 to stop further decrease
            } else {
              return prevSeconds - 1; // Decrease seconds by 1
            }
          });
        }, 1000); // Run every 1000 milliseconds (1 second)

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  // Format the seconds to display minutes and seconds
  const displayTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return (
    <>
      <Modal
        classNames={{
          body: `p-7 rounded-lg font-liador `,
          backdrop: "bg-[#304996]/70  backdrop-opacity-40",
          base: `border-[#292f46] bg-[#F2F2F2] dark:bg-darkbg  text-[#a8b0d3] dark:text-white   `,
          header: `!font-liador font-semibold text-2xl font-liador `,

          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" block mb-[30px] ">
                <span className="second-text-color font-liador">ওটিপি</span>{" "}
                <span className="primary-text-color font-liador">
                  ভেরিফিকেশন
                </span>
              </ModalHeader>
              <ModalBody className="bg-no-repeat font-liador bg-cover pt-0 bg-[center_bottom_-4rem] bg-[url(/assets/Login/loginbg.svg)] ">
                <form className="">
                  <div></div>
                  <label
                    className="primary-text-color dark:text-white font-semibold text-base"
                    htmlFor="otp"
                  >
                    ইমেইলে পাঠানো ৪ ডিজিটের কোডটি লিখুন
                  </label>
                  <div className="relative">
                    <input
                      onChange={handleOptLogin}
                      type="otp"
                      id="otp"
                      className=" w-full pl-9 py-3 rounded border border-solid border-black/30 placeholder:text-black/50 placeholder:text-[12px] outline-none text-black dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
                      placeholder={`Enter OTP Number`}
                    />
                    <PiUserCircleFill className="absolute top-1/2 -translate-y-1/2 left-4" />
                  </div>
                  {otpError && (
                    <p className="text-red-500 mt-2 text-xs">{otpError}</p>
                  )}
                  <div className="text-right">
                    <button
                      disabled={seconds > 0 ? true : false}
                      onClick={handleResendOtp}
                      className="text-right font-semibold disabled:cursor-not-allowed primary-text-color cursor-pointer hover:text-secondarySolid dark:text-white"
                    >
                      Resend OTP
                    </button>
                  </div>
                  <button
                    onClick={(e) => handleOpenInfoModal(onClose, e)}
                    type="submit"
                    className="bg-secondaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
                  >
                    এগিয়ে যান{" "}
                    {loading ? (
                      <Spinner
                        size="sm"
                        className="text-white"
                        color="white"
                        classNames={{ base: "text-white" }}
                      />
                    ) : (
                      <IoArrowForwardSharp size={24} />
                    )}
                  </button>
                </form>
                <div className="text-center primary-text-color dark:text-white">
                  <p>কোনো কোড পাননি?</p>
                  <p>
                    আবার অনুরোধ জানাতে অপেক্ষা করুন{" "}
                    <span className="second-text-color font-bold">
                      {displayTime()} সেকেন্ড
                    </span>
                  </p>
                </div>
                {/*     <div className="border shadow-lg border-solid border-black/30 bg-white py-5 px-[30px] rounded-lg">
                  <p className="primary-text-color font-normal">
                    আপনার ইমেইল ভুল হয়নি তো?
                  </p>
                  <p className="text-xs text-black/70 font-medium">
                    drive***@gmail.com
                  </p>
                  <p
                    onClick={(e) => handleOpenAgainRegister(onClose, e)}
                    className="text-right flex justify-end items-center font-semibold mt-4 primary-text-color gap-2"
                  >
                    <MdOutlineEdit size={20} color="#CE2786" />
                    ইমেইল পরিবর্তন করুন
                  </p>
                </div> */}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Info modal */}
      <InformationModal
        isOpen={isOpenInfoModal}
        onOpenChange={OnOpenChangeInfoModal}
      />
    </>
  );
};
export default OtpModal;
