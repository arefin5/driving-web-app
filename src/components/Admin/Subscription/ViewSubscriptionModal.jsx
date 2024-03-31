import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import Image from "next/image";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import InputLabel from "../../ui/features/Dashboard/UserDashboard/UserProfile/InputLabel";

import { useEffect, useState } from "react";
const ViewSubscriptionModal = ({
  isOpen,
  onOpenChange,
  planId,
}) => {


  const [subscription, setSubscription] = useState({
    name: "",
    price: 0,
    duration: 0,
    features: [],
  });

  useEffect(() => {
    fetch(
      `https://backend.driveshikhun.com/api/v1/subscriptionPlans/getSubscriptionPlanById/${planId}`
    )
      .then((res) => res.json())
      .then((data) => setSubscription(data?.data));
  }, [planId, isOpen]);

  const handleSubscriptionChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSubscription((prev) => ({ ...prev, [name]: value }));
  };
  const handleItemInputChange = (e, index, type) => {
    const { value } = e.target;
    setSubscription((prevData) => {
      const newData = { ...prevData };
      newData[type][index] = value;
      return newData;
    });
  };

  
  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6 block max-h-[400px] overflow-y-auto",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-white dark:bg-darkbg max-w-[950px] px-5 py-5 md:px-[90px] md:py-[50px] text-black dark:text-white",
          header: "p-0 py-10 border-[#292f46]",
          footer: "p-0 border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        className="font-liador"
      >
        <ModalContent className="relative modal_scrollbar">
          {() => (
            <>
              <Image
                src={userBg}
                width={90}
                height={90}
                alt=""
                className="absolute left-0 top-0 z-10"
              />
              <ModalHeader className="flex items-center gap-3">
                <div>
                  {/*  <Image
                    width={56}
                    height={56}
                    src={NotificationIcon}
                    alt="Add quiz icon"
                  /> */}
                </div>
                <div>
                  <h2 className="text-[32px] leading-[3rem] font-semibold text-transparent bg-loginButton bg-clip-text dark:text-white">
                    সাবস্ক্রিপশন ডিটেইলস
                  </h2>
                  <p className="text-base font-normal -mt-2">
                    সাবস্ক্রিপশন তথ্যগুলো
                  </p>
                </div>
              </ModalHeader>
              <ModalBody>
                <form className="grid grid-cols-2 gap-5">
                  <div className=" flex flex-col w-full gap-2 ">
                    <InputLabel label={"সাবস্ক্রিপশন টাইটেল"} />
                    <input
                      name={"name"}
                      value={subscription?.name}
                      onChange={handleSubscriptionChange}
                      disabled
                      type="text"
                      placeholder="সাবস্ক্রিপশন এর নাম লিখুন..."
                      className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                    />
                  </div>
                  <div className=" flex flex-col w-full gap-2 ">
                    <InputLabel label={"সাবস্ক্রিপশন প্রাইস "} />
                    <input
                      onChange={handleSubscriptionChange}
                      name={"price"}
                      value={subscription?.price}
                      disabled
                      type="text"
                      placeholder="সাবস্ক্রিপশন প্রাইস লিখুন..."
                      className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                    />
                  </div>
                  <div className="col-span-full flex flex-col w-full gap-2 ">
                    <InputLabel label={"সাবস্ক্রিপশন Duration "} />
                    <input
                      onChange={handleSubscriptionChange}
                      name={"duration"}
                      value={subscription?.duration}
                      disabled
                      type="text"
                      placeholder="সাবস্ক্রিপশন Duration লিখুন..."
                      className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-xs dark:placeholder:text-white dark:bg-transparent dark:border-white dark:text-white"
                    />
                  </div>

                  <div className="col-span-full">
                    <InputLabel label="সাবস্ক্রিপশন features " />
                    <div className="bg-[#F2F2F2] mt-2 rounded-lg py-3 px-4 border border-solid border-black/30 ">
                      <p className="mb-3 text-xs text-black/50 font-light">
                        Add minimum 4 items
                      </p>
                      <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                        {[...Array(8)].map((_, index) => (
                          <input
                            key={index}
                            className="bg-white border border-solid border-black/30 placeholder:text-black/50 rounded py-[6px] px-4 placeholder:text-xs outline-0"
                            value={subscription?.features[index]}
                            type="text"
                            name="features"
                            disabled
                            id=""
                            placeholder="Type here..."
                            onChange={(e) =>
                              handleItemInputChange(e, index, "features")
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter></ModalFooter>
              <Image
                src={userBg2}
                width={90}
                height={90}
                alt=""
                className="absolute right-0 bottom-0"
              />
            </>
          )}
        </ModalContent>
      </Modal>
      {/* Handle open modal */}
    </>
  );
};

export default ViewSubscriptionModal;
