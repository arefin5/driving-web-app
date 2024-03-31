"use client";

import { Progress } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaList, FaMicrophone, FaPlay, FaVideo } from "react-icons/fa";
import { toast } from "react-toastify";
const { convert } = require("html-to-text");
import Video from "next-video";

const ELearingExam = () => {
  const [learn, setLearn] = useState([]);
  const [size, setSize] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`https://backend.driveshikhun.com/api/v1/learn/specific?size=${1}&&page=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setLearn(data?.data);
        setTotal(data?.total);
      });
  }, [size]);

  console.log(size,learn)
  return (
    <div className="mx-5 px-5 mt-10">
      <div className="bg-primaryGradiant px-6 py-5 flex justify-between">
        <div className="flex gap-2">
          <div className="border border-solid border-white text-white p-4 rounded-lg text-center flex flex-col items-center justify-center ">
            <FaList size={30} />
            <p className="text-xl font-semibold">lessons</p>
          </div>
          <div className="border border-solid border-white text-white p-4 rounded-lg text-center flex flex-col items-center justify-center ">
            <FaPlay size={30} />
            <p className="text-xl font-semibold">AutoPlay</p>
          </div>
          <div className="border border-solid border-white text-white p-4 rounded-lg text-center flex flex-col items-center justify-center ">
            <FaMicrophone size={30} />
            <p className="text-xl font-semibold">Lector</p>
          </div>
          <div className="border border-solid border-white text-white p-4 rounded-lg text-center flex flex-col items-center justify-center ">
            <FaVideo size={30} />
            <p className="text-xl font-semibold">Movie</p>
          </div>
          <div>
            <p className="text-white">lessons 31 out of 31</p>
            <Progress value="74" max="100" color="white" size="lg" />
          </div>
        </div>
        <div>
          <button className="text-white bg-secondaryGradiant px-6 py-3 rounded-lg font-medium text-xl">
            Finish course
          </button>
        </div>
      </div>
      {learn?.map((l) => (
        <div key={l?._key} className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-5 rounded-md ">
          <div>
            <div className="">
              {
                l?.learnImg&&<Image width={500} height={300} className="h-full" src={l?.learnImg} alt="img here" />
              }
              {
                l?.learnVideo&&<Video  src={l?.learnVideo}  placeholder="blur"
                className="rounded-lg" />
              }
            </div>
            <div className="flex justify-around mt-5">
              <button
                onClick={() => {
                  if (size == 1) {
                    toast.error("This is the first learn");
                  } else {
                    setSize(size - 1);
                  }
                }}
                className="bg-primaryGradiant text-xl text-white px-4 py-3 rounded-lg"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  if (size == total-1) {
                    toast.error("This is the last learn");
                  } else {
                    setSize(size + 1);
                  }
                }}
                className="bg-primaryGradiant text-xl text-white px-4 py-3 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
          <div>{convert(l?.learnDescription)}</div>
        </div>
      ))}
    </div>
  );
};

export default ELearingExam;
