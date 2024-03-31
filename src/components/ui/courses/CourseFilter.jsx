"use client";
import "./courseStyle.css";
const CourseFilter = ({ label }) => {
  return (
    <>
      <label class="checkBox block relative pl-[45px] cursor-pointer lg:text-[22px] sm:text-base primary-text-color dark:text-white ">
        {label}
        <input type="checkbox" className="" />
        <span class="checkmark"></span>
      </label>
    </>
  );
};
export default CourseFilter;
