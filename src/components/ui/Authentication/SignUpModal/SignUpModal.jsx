import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Spinner,
} from "@nextui-org/react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { PiUserCircleFill } from "react-icons/pi";
import OtpModal from "../OtpModal/OtpModal";
import { useState } from "react";
import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";
import InputLabel from "../../features/Dashboard/UserDashboard/UserProfile/InputLabel";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const SignUpModal = ({ isOpen, onOpenChange }) => {
  const axiosPublic = useAxiosPublic();
  const [isOpenOtpClicke, setIsOpenOtpClicke] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const {
    isOpen: isOpenOtpModal,
    onOpen: onOpenOtpModal,
    onOpenChange: OnOpenChangeOtpModal,
  } = useDisclosure();
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handleNewPassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };
  const handleOptModal = async (onclose, e) => {
    e.preventDefault();
    // eslint-disable-next-line no-useless-escape
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!email) {
      setEmailError("Email is required");
    } else if (!emailReg.test(email)) {
      setEmailError("Provide a valid email address");
    } else if (!password) {
      setPasswordError("Password is required");
    } else if (password.length <= 7) {
      setPasswordError("Password must be  8 caracter");
    } else {
      setLoading(true);
      const { data } = await axiosPublic.post("/user/signup", {
        email,
        password,
      });

      if (data.error) {
        setEmailError(data.error);
        setLoading(false);
      } else {
        // close the current modal and open the next modal
        onclose();
        onOpenOtpModal();
        setIsOpenOtpClicke(true);
        setLoading(false);
      }
    }
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
        placement="center"
      >
        <ModalContent className=" bg-[#F2F2F2]">
          {(onClose) => (
            <>
              <ModalHeader className=" block mb-[30px] ">
                <span className="second-text-color  font-liador">
                  ড্রাইভিং শিখুন
                </span>{" "}
                <span className="primary-text-color dark:text-white font-liador">
                  এ রেজিস্টেশন করুন
                </span>
              </ModalHeader>
              <ModalBody className="font-liador pt-0 bg-[url(/assets/Login/loginbg.svg)] bg-no-repeat bg-cover   bg-[center_bottom_-3rem]">
                <form>
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
                    <p className="text-red-500 mt-2 text-xs">{emailError}</p>
                  )}
                  {/* password */}
                  <div className="flex flex-col w-full gap-2 mb-3">
                    <InputLabel label=" পাসওয়ার্ড সেট করুন " />
                    <div className="relative w-full">
                      <input
                        value={password}
                        onChange={handleNewPassword}
                        type={showPass ? "text" : "password"}
                        placeholder=" ৮ ডিজিটের পাসওয়ার্ড লিখুন"
                        className="py-3 px-4 border border-solid w-full text-black rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
                      />
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
                  </div>
                  {passwordError && (
                    <p className="text-red-500 mt-2 text-xs">{passwordError}</p>
                  )}
                  <button
                    type="submit"
                    onClick={(e) => handleOptModal(onClose, e)}
                    className="bg-secondaryGradiant justify-center gap-[10px]  !w-full py-3 rounded text-white font-semibold flex items-center mt-6"
                  >
                    এগিয়ে যান
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
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      {/* Opt modal */}
      {isOpenOtpClicke && (
        <OtpModal
          email={email}
          isOpen={isOpenOtpModal}
          onOpenChange={OnOpenChangeOtpModal}
        />
      )}
    </>
  );
};

export default SignUpModal;
