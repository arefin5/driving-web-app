import React from "react";

const SelectCourseCard = ({ c, courses, setCourses }) => {
    const find = courses?.find((item) => item === c?._id);
    const remove = courses?.filter((item) => item !== c?._id);
  const handleClick = () => {
    if (!find) {
      setCourses([...courses, c?._id]);
    } else {
      setCourses(remove);
    }
  };
  console.log(courses)
  return (
    <div
      onClick={()=>handleClick()}
      key={c?._id}
      c={c}
      className={find?"border border-green-300 p-2 rounded-md bg-green-100 cursor-pointer":"border p-2 rounded-md bg-slate-50 cursor-pointer"}
    >
      <p className="font-bold">{c?.title}</p>
      <p className="">{c?.region}</p>
    </div>
  );
};

export default SelectCourseCard;
