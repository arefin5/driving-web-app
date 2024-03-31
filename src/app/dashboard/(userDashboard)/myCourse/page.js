"use client";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import MyCourseCard from "@/src/components/ui/features/Dashboard/UserDashboard/MyAllCourse/MyCourseCard";
import Title from "@/src/components/ui/features/Dashboard/UserDashboard/Title";
import { Tabs, Tab } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
const MyCoursePage = () => {
  const { data:user } = useGetSingleUserData();
  const [courses,setCourses]=useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios?.get(
          `https://backend.driveshikhun.com/api/v1/course/getUserCourses?course=${user?.courses}`
        );
        setCourses(response?.data?.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, [user]);

  console.log(user?.courses)

  return (
    <div className="font-liador">
      <Title title="আমার কোর্সসমূহ" />
      <div className="flex w-full flex-col underline_modifi">
        <Tabs
          aria-label="Options"
          variant="underlined"
          size="lg"
          fullWidth={false}
          className={`block tab`}
          classNames={{ tab: "dark:text-white text-black " }}
        >
          <Tab
            className={`items-start justify-start `}
            key="allCourses"
            title="সকল কোর্স"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {courses?.map((course) => (
                <MyCourseCard key={course?._id} course={course} />
              ))}
            </div>
          </Tab>
          <Tab
            className={`items-start justify-start`}
            key="completeCourses"
            title="কমপ্লিট কোর্স"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <MyCourseCard />
              <MyCourseCard />
              <MyCourseCard />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default MyCoursePage;
