import ConformationModal from "@/src/components/Shared/ConformationModal/ConformationModal";
// TODO: VALIDATION otp timer for 1:30 min

// TODO: Dark mode color fix all over website

// TODO: select country josn file or api link to the dropdown

// TODO: full landign responsive check all deivice


import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { PiUserCircleFill } from "react-icons/pi";
import OtpModal from "../OtpModal/OtpModal";
import { useState } from "react";
import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import useAuthContext from "@/src/Hooks/context/useAuthContext";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { LuLoader2 } from "react-icons/lu";
import LoginWithOTPModal from "../OtpModal/LoginWithOTPModal";
import { useRouter } from "next/navigation";
const LoginModal = ({ isOpen, onOpenChange }) => {
  const router = useRouter();
  const { refetch } = useGetSingleUserData();
  const axiosPublic = useAxiosPublic();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setUser } = useAuthContext();
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };
  const {
    onOpen: onOpenConfrimModal,
    isOpen: isOpenConfrimModal,
    onOpenChange: onOpenChangeConfrimModal,
  } = useDisclosure();
  const handleLogin = async (onclose) => {
    try {
      setLoading(true);
      if (!email) {
        setEmailError("Email is required");
      } else if (!password) {
        setPasswordError("Password is required");
      } else {
        const { data } = await axiosPublic.post("/user/loginWithPassword", {
          email: email,
          password: password,
        });
        if (data.status === "success") {
          setEmail("");
          setPassword("");
          localStorage.setItem("token", JSON.stringify(data.data));
          const currentUser = JSON.parse(localStorage.getItem("token"));
          if (currentUser) {
            const { data } = await axiosPublic.post("/user/accessToken", {
              email: currentUser.userEmail,
            });
            if (data.status === "success") {
              setUser(currentUser);
              onclose();
              onOpenConfrimModal();
              refetch();
              setLoading(false);
              if (currentUser.userRole === "admin") {
                router.push("/admin");
              } else {
                router.push("/dashboard");
              }
            }
          }
          // console.log("currentUser", currentUser);
        } else {
          setLoading(false);
          setError(data.message);
        }
      }
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };
  const {
    isOpen: isOpenOtpModal,
    onOpen: onOpenOtpModal,
    onOpenChange: OnOpenChangeOtpModal,
  } = useDisclosure();
  const handleOptModal = (onclose) => {
    onclose();
    onOpenOtpModal();
  };

  return (
    <>
      <Modal
        classNames={{
          body: `p-7 rounded-lg font-liador `,
          backdrop: "bg-[#304996]/70  backdrop-opacity-40",
          base: `border-[#292f46] bg-[#F2F2F2] dark:bg-darkbg  text-[#a8b0d3] dark:text-white  mr-1`,
          header: `!font-liador font-semibold text-2xl font-liador `,

          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement={"center"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" block mb-[30px] ">
                <span className="second-text-color  font-liador">
                  ড্রাইভিং শিখুন
                </span>{" "}
                <span className="primary-text-color dark:text-white font-liador">
                  এ আপনাকে স্বাগতম <br /> লগইন করুন
                </span>
              </ModalHeader>
              <ModalBody className="font-liador pt-0 bg-[url(/assets/Login/loginbg.svg)] bg-no-repeat bg-cover   bg-[center_bottom_-3rem]">
                <div className="">
                  <label
                    className="primary-text-color dark:text-white font-semibold text-base"
                    htmlFor="email"
                  >
                    আপনার ইমেইল দিন
                  </label>
                  <div className="relative">
                    <input
                      onChange={handleEmail}
                      value={email}
                      type="email"
                      id="email"
                      className=" w-full pl-9 py-3 rounded border border-solid border-black/30 placeholder:text-black/50 placeholder:text-[12px] outline-none text-black dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
                      placeholder={` Enter Email or Phone Number`}
                    />
                    <PiUserCircleFill className="absolute top-1/2 -translate-y-1/2 left-4" />
                  </div>
                  {emailError && (
                    <p className="text-xs text-red-500">{emailError}</p>
                  )}
                  <label
                    className="primary-text-color dark:text-white font-semibold text-base block  mt-4"
                    htmlFor="email"
                  >
                    পাসওয়ার্ড দিন
                  </label>
                  <div className="relative">
                    <input
                      onChange={handlePassword}
                      value={password}
                      type={showPass ? "text" : "password"}
                      id="email"
                      className=" w-full pl-9 py-3 rounded border border-solid border-black/30 placeholder:text-black/50 placeholder:text-[12px] outline-none text-black dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
                      placeholder={`••••••••`}
                    />
                    <PiUserCircleFill className="absolute top-1/2 -translate-y-1/2 left-4" />
                    {showPass ? (
                      <AiFillEyeInvisible
                        size={20}
                        onClick={() => setShowPass(!showPass)}
                        className="absolute inset-y-0 top-1/2 -translate-y-1/2 end-3"
                      />
                    ) : (
                      <AiFillEye
                        size={20}
                        onClick={() => setShowPass(!showPass)}
                        className="absolute inset-y-0 top-1/2 -translate-y-1/2 end-3"
                      />
                    )}
                  </div>
                  {passwordError && (
                    <p className="text-xs text-red-500">{passwordError}</p>
                  )}
                  {error && <p className="text-xs text-red-500">{error}</p>}

                  {/* <p className="text-right primary-text-color cursor-pointer">
                    Reset Password
                  </p> */}
                  <button
                    onClick={() => handleLogin(onClose)}
                    type="submit"
                    className="bg-secondaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
                  >
                    লগইন করুন{" "}
                    {loading && (
                      <LuLoader2 size={18} className="animate-spin" />
                    )}
                  </button>
                  <p
                    onClick={() => handleOptModal(onClose)}
                    className="text-center cursor-pointer primary-text-color dark:text-white mt-4 flex justify-center items-center gap-3 text-base font-semibold"
                  >
                    ওটিপি দিয়ে লগ ইন করুন{" "}
                    <PiUserCircleFill className="text-[#2B388F] dark:text-white text-xl " />
                  </p>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      {/* Handle open modal */}
      <ConformationModal
        message="Login successfull!!"
        isOpen={isOpenConfrimModal}
        onOpenChange={onOpenChangeConfrimModal}
      />
      {/* Otp modal */}
      <LoginWithOTPModal
        isOpen={isOpenOtpModal}
        onOpenChange={OnOpenChangeOtpModal}
      />
    </>
  );
};

export default LoginModal;
