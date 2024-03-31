import Image from "next/image";
import DummyAvatar from "/public/assets/Profile/camera.svg";
import Male from "/public/assets/dashboard/UserProfile/male.svg";
import Female from "/public/assets/dashboard/UserProfile/female.svg";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Spinner,
} from "@nextui-org/react";
import { IoArrowForwardSharp } from "react-icons/io5";

import UserInput from "../../features/Dashboard/UserDashboard/UserProfile/UserInput";
import InputLabel from "../../features/Dashboard/UserDashboard/UserProfile/InputLabel";

import { useState } from "react";
import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";
import ConformSingUpModal from "@/src/components/Shared/ConformationModal/ConformSingUpModal";
import { singleImageUpload } from "@/src/Hooks/ImageUpload";
import { useRouter } from "next/navigation";
import useAuthContext from "@/src/Hooks/context/useAuthContext";
const InformationModal = ({ isOpen, onOpenChange }) => {
  const [img, setImg] = useState("");
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [selectedGender, setSelectedGender] = useState("male");
  const [selectedRole, setSelectedRole] = useState("user");
    const { user, setUser } = useAuthContext();

    console.log("information usersssssss",user)
    const router = useRouter();
    const {
      onOpen: onOpenConfrimModal,
      isOpen: isOpenConfrimModal,
      onOpenChange: onOpenChangeConfrimModal,
    } = useDisclosure();

    // Image upload
    const handleChangeUploadImage = async (event) => {
      const image = event.target.files[0];
      const formData = new FormData();
      formData.append("image", image);

      singleImageUpload(formData, setImg);
    };
    const handleCountry = (e) => {
      setCountry(e.target.value);
    };
    const handleFullName = (e) => {
      setFullName(e.target.value);
    };
    const handleGenderChange = (event) => {
      setSelectedGender(event.target.id);
    };
    const handleRoleChange = (event) => {
      setSelectedRole(event.target.id);
    };
    const handleConfrimModal = async (onClose, e) => {
      e.preventDefault();
      if (!fullName) {
        setFullNameError("Full name is required");
      } else if (!country) {
        setCountryError("Country is required");
      } else {
        try {
          setLoading(true);
          const { data } = await axiosPublic.patch(
            `/user/updateUserInfo?userId=${user?.userId}`,
            {
              name: fullName,
              gender: selectedGender,
              country: country,
              role: selectedRole,
              profilePicture: img,
            }
          );
          const currentUser = data?.data;
          setUser(currentUser);
          if (currentUser.userRole === "admin") {
            router.push("/admin");
          } else {
            router.push("/dashboard");
          }
          console.log(data, "info model");
          onClose();
          onOpenConfrimModal();
        } catch (error) {
          console.log("error", error);
        } finally {
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
          base: `border-[#292f46] bg-[#F2F2F2] dark:bg-darkbg  text-[#a8b0d3] dark:text-white`,
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
                <span className="second-text-color font-liador">স্বাগতম,</span>{" "}
                <span className="primary-text-color dark:text-white font-liador">
                  আপনার তথ্য দিন
                </span>
              </ModalHeader>
              <ModalBody className="font-liador pt-0 bg-[url(/assets/Login/loginbg.svg)] bg-no-repeat bg-cover bg-[center_bottom_-18rem]">
                <form className="">
                  <div className="center flex flex-col items-center mb-4 justify-center gap-3">
                    <label className="relative">
                      <Image
                        src={img ? img : DummyAvatar}
                        width={100}
                        height={100}
                        alt="user avatar"
                        className="rounded-full w-[100px] h-[100px] object-cover"
                      />

                      <input
                        type="file"
                        className="hidden"
                        onChange={handleChangeUploadImage}
                      />
                    </label>
                    <p className="primary-text-color dark:text-white">
                      আপনার প্রোফাইল পিকচার আপলোড করুন
                    </p>
                  </div>
                  <UserInput
                    value={fullName}
                    onchange={handleFullName}
                    type={"text"}
                    placeholder="আপনার পুরো নাম লিখুন"
                    label="আপনার নাম"
                  />
                  {fullNameError && (
                    <p className="text-red-500 mt-2 text-xs">{fullNameError}</p>
                  )}
                  {/* Select countery */}
                  <div className="flex flex-col w-full gap-2 mb-3 relative">
                    <InputLabel label="আপনার দেশ সিলেক্ট করুন" />
                    <select
                      defaultValue="দেশের নাম বাছাই করুন"
                      value={country}
                      onChange={handleCountry}
                      className="py-3 text-black/30 dark:text-white appearance-none px-5  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50 dark:placeholder:text-white dark:bg-transparent dark:border-white"
                      name=""
                      id=""
                    >
                      <option
                        className="text-black/50 "
                        value="দেশের নাম বাছাই করুন"
                      >
                        দেশের নাম বাছাই করুন
                      </option>
                      <option value="bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 top-[40%]  flex items-center px-2 pointer-events-none">
                      <svg
                        className="fill-current h-4 w-4 text-black/30 border border-solid border-black/30 rounded-full leading-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12L5 7h10l-5 5z" />
                      </svg>
                    </div>
                  </div>
                  {countryError && (
                    <p className="text-red-500 mt-2 text-xs">{countryError}</p>
                  )}
                  {/* select female or male */}
                  <div className="">
                    <InputLabel label="আপনি একজন" />
                    <div className="flex justify-center gap-9 mt-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value={"male"}
                          onChange={handleGenderChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="male"
                          className={`w-[100px] h-[100px] border rounded flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100 group ${
                            selectedGender === "male"
                              ? "border-primarySolid dark:border-white"
                              : "dark:border-transparent"
                          }`}
                        >
                          <Image src={Male} alt="Male avatar" />
                          <p className="group-hover:text-primarySolid">পুরুষ</p>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value={"female"}
                          onChange={handleGenderChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="female"
                          className={`w-[100px] h-[100px] border rounded flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100 group ${
                            selectedGender === "female"
                              ? "border-primarySolid dark:border-white"
                              : "dark:border-transparent"
                          }`}
                        >
                          <Image src={Female} alt="Female avatar" />
                          <p className="group-hover:text-primarySolid">নারী</p>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* select user or Instructor */}
                  <div className="">
                    <InputLabel label="আপনি একজন" />
                    <div className="flex justify-center gap-9 mt-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="user"
                          name="role"
                          value={"user"}
                          onChange={handleRoleChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="user"
                          className={`w-[100px] h-[100px] border rounded flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100  group ${
                            selectedRole === "user"
                              ? "border-primarySolid dark:border-white"
                              : "dark:border-transparent"
                          }`}
                        >
                          <Image src={Male} alt="user avatar" />
                          <p className="group-hover:text-primarySolid">
                            শিক্ষার্থী
                          </p>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="instructor"
                          name="role"
                          value={"instructor"}
                          onChange={handleRoleChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="instructor"
                          className={`w-[100px] h-[100px] border rounded flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100 group ${
                            selectedRole === "instructor"
                              ? "border-primarySolid dark:border-white"
                              : "dark:border-transparent"
                          }`}
                        >
                          <Image src={Female} alt="Instructor avatar" />
                          <p className="group-hover:text-primarySolid">
                            প্রশিক্ষক
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    onClick={(e) => handleConfrimModal(onClose, e)}
                    className="bg-secondaryGradiant justify-center gap-[10px]  !w-full py-3 rounded text-white font-semibold flex items-center mt-6"
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
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      {/* Handle open modal */}
      <ConformSingUpModal
        message="আপনার লগইন সফল হয়েছে"
        isOpen={isOpenConfrimModal}
        onOpenChange={onOpenChangeConfrimModal}
      />
    </>
  );
};

export default InformationModal;
