import { useState } from "react";
import Countdown from "./Countdown";
import userBg from "/public/assets/dashboard/UserHome/bg-user-card.png";
import userBg2 from "/public/assets/dashboard/UserHome/bg-user-card2.png";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import Image from "next/image";
const PaymentHistoryView = ({ isOpen, onOpenChange, messageDetails }) => {
  const [copied, setCopied] = useState(false);

  const copyTransactionId = () => {
    navigator.clipboard.writeText(messageDetails?.transactionId);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
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
          base: "border-[#292f46] bg-white max-w-[950px] px-5 py-5 md:px-[90px] md:py-[50px] text-black",
          header: "p-0 py-10 border-[#292f46]",
          footer: "p-0 border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        className="font-liador"
      >
        <ModalContent className="relative modal_scrollbar">
          {(onClose) => (
            <>
              <Image
                src={userBg}
                width={90}
                height={90}
                alt=""
                className="absolute left-0 top-0 z-10"
              />
              <ModalHeader className="flex items-center gap-3 pb-2">
                <div>
                  {/*  <Image
                    width={56}
                    height={56}
                    src={NotificationIcon}
                    alt="Add quiz icon"
                  /> */}
                </div>
                <div>
                  <h2 className="text-[32px] leading-[3rem] font-semibold text-transparent bg-loginButton bg-clip-text">
                    {messageDetails?.user?.name} পেমেন্ট হিস্টোরি
                  </h2>
                  <div className="flex items-center">
                    <p className="text-[15px] leading-[3rem] font-semibold text-transparent bg-loginButton bg-clip-text mr-2">
                      এক্সপায়ার সাবস্ক্রিপশন তারিখ:{" "}
                    </p>
                    <span style={{ color: "red" }}>
                      <Countdown
                        expirationDate={messageDetails?.user?.subscription}
                      />
                    </span>
                  </div>{" "}
                  <p className="text-[15px]  font-semibold text-transparent bg-loginButton bg-clip-text mr-2 ">
                    প্যাকেজের মূল্য: {messageDetails?.price} USD
                  </p>
                  <p className="text-[15px]  font-semibold text-transparent bg-loginButton bg-clip-text mr-2 ">
                    ট্রানজেকশন আইডি: {messageDetails?.transactionId}
                  </p>
                  <button
                    onClick={copyTransactionId}
                    className="text-secondary cursor-pointer"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </ModalHeader>
              <ModalBody>
                <div>
                  <div>
                    {/* Name */}
                    <div className="flex flex-col w-full gap-2 mb-3">
                      <span className="text-base font-semibold primary-text-color">
                        নাম
                      </span>
                      <p className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px]">
                        {messageDetails?.user?.name}
                      </p>
                    </div>
                    {/* Select countery */}
                    <div className="flex flex-col w-full gap-2 mb-3 relative">
                      <span className="text-base font-semibold primary-text-color">
                        ইমেইল
                      </span>
                      <p className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px]">
                        {messageDetails?.user?.email}
                      </p>
                    </div>
                    {/* select female or male */}
                    <div className="">
                      <span className="text-base font-semibold primary-text-color">
                        প্যাকেজ
                      </span>
                      <p className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px]">
                        {messageDetails?.plan?.name}
                      </p>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={() => onClose()}
                  type="submit"
                  className="bg-secondaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
                >
                  Close
                </button>
              </ModalFooter>
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

export default PaymentHistoryView;
