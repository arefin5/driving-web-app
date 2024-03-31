"use client";

import useCourseById from "@/src/Hooks/courses/useCourseById";
import Sidebar from "@/src/components/Admin/AllCourses/CourseDetails/Sidebar";
import React from "react";

const SingleCourseLayout = ({ children, params }) => {
  const { id } = params;
  const { data } = useCourseById(id);

  return (
    <>
      <div className="mb-10 flex items-center gap-4">
        <h2 className="text-transparent  bg-loginButton bg-clip-text text-[30px] font-semibold">
          {data?.title}
        </h2>
        <p className="flex items-center gap-2">
        
          <span className="w-5 h-5 rounded-full inline-block bg-secondaryGradiant"></span>{" "}
          {data?.category}
        </p>
      </div>
      <div className="flex max-h-fit justify-between gap-6">
        <div className="basis-[350px]">
          <Sidebar />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
};

export default SingleCourseLayout;
