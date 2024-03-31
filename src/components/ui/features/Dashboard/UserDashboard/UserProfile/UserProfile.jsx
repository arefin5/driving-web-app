"use client";

import Image from "next/image";
import DummyAvatar from "/public/assets/Profile/camera.svg";
import Male from "/public/assets/dashboard/UserProfile/male.svg";
import Female from "/public/assets/dashboard/UserProfile/female.svg";

import InputLabel from "./InputLabel";
import PrimaryButton from "../../Shared/PrimaryButton";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";
import useAxiosPublic from "@/src/Hooks/axios/useAxiosPublic";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import { useForm } from "react-hook-form";
import { useDisclosure, Spinner } from "@nextui-org/react";
import ConformationModal from "@/src/components/Shared/ConformationModal/ConformationModal";
import { singleImageUpload } from "@/src/Hooks/ImageUpload";

const UserProfile = () => {
  const [loading, setLoading] = useState(false);
  const [passLoading, setPassLoading] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [img, setImg] = useState("");
  const {
    onOpen: onOpenConfrimModal,
    isOpen: isOpenConfrimModal,
    onOpenChange: onOpenChangeConfrimModal,
  } = useDisclosure();

  const axiosPublic = useAxiosPublic();
  const { data: user, refetch } = useGetSingleUserData();
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    mode: "onChange",
  });
  useEffect(() => {
    // Extracting the date part (YYYY-MM-DD) from the datetime string
    const dateOfBirth = user?.dateOfBirth?.split("T")[0];
    setValue("fullName", user?.name || "");
    setValue("country", user?.country || "");
    setValue("gender", user?.gender || "");
    setValue("dateOfBirth", dateOfBirth || "");
    setValue("language", user?.language || "");
    //
    setValue("language", user?.language || "");
  }, [setValue, user]);

  const [selectedGender, setSelectedGender] = useState(null);

  useEffect(() => {
    const genderValue = watch("gender");

    setSelectedGender(genderValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("gender")]);

  // Image upload
  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    singleImageUpload(formData, setImg);
  };
  const handleNewPassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };
  const handleConfrimPass = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  // update password
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (!password) {
      setPasswordError("Password is required");
    } else if (password.length <= 7) {
      setPasswordError("Password must be  8 caracter");
    } else if (!confirmPassword) {
      setConfirmPasswordError("Confrom password is required");
    } else {
      try {
        if (password !== confirmPassword) {
          setConfirmPasswordError("password not match");
        } else {
          setPassLoading(true);
          const { data } = await axiosPublic.patch(
            `/user/updateUserInfo?userId=${user?.userId}`,
            {
              password,
              confirmPassword,
            }
          );

          if (data.status === "success") {
            onOpenConfrimModal();
          }
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setPassLoading(false);
      }
    }
  };

  // personal data update
  const onSubmit = async (userInfo) => {
    try {
      setLoading(true);
      const { data } = await axiosPublic.patch(
        `/user/updateUserInfo?userId=${user?.userId}`,
        {
          profilePicture: img,
          name: userInfo.fullName,
          country: userInfo.country,
          gender: userInfo.gender,
          dateOfBirth: userInfo.dateOfBirth,
          language: userInfo.language,
        }
      );

      console.log("data personal info  update", data);
      if (data.status === "success") {
        onOpenConfrimModal();
        refetch();
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  // phone number update
  const phoneNumberUpdate = async (e) => {
    e.preventDefault();
    try {
      setEmailLoading(true);
      const { data } = await axiosPublic.patch(
        `/user/updateUserInfo?userId=${user?.userId}`,
        {
          phone: phoneNumber,
        }
      );

      if (data.status === "success") {
        onOpenConfrimModal();
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setEmailLoading(false);
    }
  };
  return (
    <>
      <div className="flex max-lg:flex-col gap-5 ">
        <div className="basis-[58%] bg-[rgba(247,247,247,0.50)] dark:bg-darkbg py-[30px] px-10 border border-solid border-black/30  backdrop-blur-[3.5px] rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="font-semibold text-2xl primary-text-color dark:text-white">
              পারসোনাল ডিটেইলস
            </h2>
            <div className="center flex flex-col items-center mb-4 justify-center gap-3">
              <label className="relative">
                <Image
                  src={img ? img : user?.profilePicture || DummyAvatar}
                  width={100}
                  height={100}
                  alt="user avatar"
                  className="rounded-full w-[100px] h-[100px] object-cover border border-solid border-primarySolid"
                />
                <input
                  type="file"
                  className="hidden"
                  onChange={handleChangeUploadImage}
                />
              </label>
              <p>আপনার প্রোফাইল পিকচার আপলোড করুন</p>
            </div>
            <div>
              {/* Name */}
              <div className="flex flex-col w-full gap-2 mb-3">
                <InputLabel label="আপনার নাম" />
                <input
                  {...register("fullName", {
                    required: { message: "Full name is required" },
                  })}
                  name="fullName"
                  type={"text"}
                  placeholder="আপনার পুরো নাম লিখুন"
                  className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:placeholder:text-white dark:bg-transparent dark:border-white"
                />
                {errors?.fullName && <p>{errors?.fullName?.message}</p>}
              </div>
              {/* Select countery */}
              <div className="flex flex-col w-full gap-2 mb-3 relative">
                <InputLabel label="আপনার দেশ সিলেক্ট করুন" />
                <select
                  {...register("country")}
                  className="py-3 text-black/30 appearance-none px-5  border border-solid rounded focus:text-black text-black border-black/30 outline-0 placeholder:text-black/50 dark:placeholder:text-white dark:bg-transparent dark:border-white"
                  name="country"
                >
                  <option
                    disabled
                    className="text-black/50 dark:text-white"
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
                      {...register("gender")}
                      className="hidden"
                    />
                    <label
                      htmlFor="male"
                      className={`w-[100px] h-[100px] border rounded flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100 group ${
                        selectedGender === "male" ? "border-primarySolid" : ""
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
                      {...register("gender")}
                      className="hidden"
                    />
                    <label
                      htmlFor="female"
                      className={`w-[100px] h-[100px] border rounded flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100 group${
                        selectedGender === "female" ? "border-primarySolid" : ""
                      }`}
                    >
                      <Image src={Female} alt="Female avatar" />
                      <p className="group-hover:text-primarySolid">নারী</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex max-lg:flex-wrap gap-[34px] mt-3">
                {/* data of birth */}
                <div className="flex flex-col w-full gap-2 mb-3">
                  <InputLabel label={"জন্ম তারিখ"} />
                  <input
                    // value={user?.dateOfBirth}
                    name="dateOfBirth"
                    {...register("dateOfBirth")}
                    type={"date"}
                    placeholder={"MM / DD / YY"}
                    className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:placeholder:text-white dark:bg-transparent dark:border-white"
                  />
                </div>
                <div className="flex flex-col w-full gap-2 mb-3 relative">
                  <InputLabel label="ভাষা" />
                  <select
                    {...register("language")}
                    className="py-3 text-black/30 appearance-none px-6  border border-solid rounded focus:text-black border-black/30 outline-0 placeholder:text-black/50 dark:placeholder:text-white dark:bg-transparent dark:border-white"
                    name="language"
                  >
                    <option
                      disabled
                      className="text-black/50 dark:text-white"
                      value="Choose your language"
                    >
                      Choose your language
                    </option>
                    <option value="Bangla">Bangla</option>
                    <option value="English">English</option>
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
              </div>
              <div>
                <PrimaryButton isLoading={loading} value={"আপডেট করুন"} />
              </div>
            </div>
          </form>
        </div>
        {/* account details */}
        <div className="basis-[46%] bg-[rgba(247,247,247,0.50)] dark:bg-darkbg py-[30px] px-10 border border-solid border-black/30  backdrop-blur-[3.5px] rounded-lg ">
          {/* email and phone number */}
          <form className=" ">
            <h2 className="font-semibold text-2xl primary-text-color mb-6 dark:text-white">
              একাউন্ট ডিটেইলস
            </h2>
            <div>
              {/* Phone */}
              <div className="flex flex-col w-full gap-2 mb-3">
                <InputLabel label="ফোন নাম্বার " />
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={user ? user?.phone : phoneNumber}
                  type={"text"}
                  placeholder="আপনার ফোন নাম্বার লিখুন"
                  className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:placeholder:text-white dark:bg-transparent dark:border-white"
                />
              </div>
              {/* Email */}
              <div className="flex flex-col w-full gap-2 mb-3">
                <InputLabel label="ইমেইল" />
                <input
                  disabled
                  type="email"
                  value={user?.email}
                  placeholder="আপনার ইমেইল লিখুন"
                  className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] cursor-not-allowed dark:placeholder:text-white dark:bg-transparent dark:border-white"
                />
              </div>
            </div>

            <button
              onClick={phoneNumberUpdate}
              type="submit"
              className="bg-secondaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
            >
              আপডেট করুন{" "}
              {emailLoading ? (
                <Spinner
                  size="sm"
                  className="text-white"
                  color="white"
                  classNames={{ base: "text-white" }}
                />
              ) : (
                <FaRegCircleCheck size={24} />
              )}{" "}
            </button>
          </form>
          {/* Password set  */}
          <form className="mt-[46px] ">
            <h2 className="font-semibold text-2xl primary-text-color mb-6 dark:text-white">
              পাসওয়ার্ড সেট ও পরিবর্তন করুন
            </h2>
            <div>
              {/* password */}
              <div className="flex flex-col w-full gap-2 mb-3">
                <InputLabel label="নতুন পাসওয়ার্ড " />
                <input
                  value={password}
                  onChange={handleNewPassword}
                  type={"text"}
                  placeholder=" ৮ ডিজিটের পাসওয়ার্ড লিখুন"
                  className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:placeholder:text-white dark:bg-transparent dark:border-white"
                />
              </div>
              {passwordError && (
                <p className="text-red-500 mt-2 text-xs">{passwordError}</p>
              )}

              {/*confrom password */}
              <div className="flex flex-col w-full gap-2 mb-3">
                <InputLabel label="কনফর্ম পাসওয়ার্ড" />
                <input
                  value={confirmPassword}
                  onChange={handleConfrimPass}
                  type={"text"}
                  placeholder=" ৮ ডিজিটের পাসওয়ার্ড লিখুন"
                  className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:placeholder:text-white dark:bg-transparent dark:border-white "
                />
              </div>
              {confirmPasswordError && (
                <p className="text-red-500 mt-2 text-xs">
                  {confirmPasswordError}
                </p>
              )}
            </div>

            <button
              onClick={handleUpdatePassword}
              type="submit"
              className="bg-secondaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
            >
              সেভ করুন{" "}
              {passLoading ? (
                <Spinner
                  size="sm"
                  className="text-white"
                  color="white"
                  classNames={{ base: "text-white" }}
                />
              ) : (
                <FaRegCircleCheck size={24} />
              )}{" "}
            </button>
          </form>
        </div>
      </div>
      {/* Conform modal */}
      <ConformationModal
        isOpen={isOpenConfrimModal}
        onOpenChange={onOpenChangeConfrimModal}
        message="Information updated"
      />
    </>
  );
};

export default UserProfile;
