import Link from "next/link";
const DropDown = ({ dropdownItem }) => {
  return (
    <ul className="absolute bg-primaryGradiant top-full w-32 duration-500 -translate-y-[800%] lg:group-hover:translate-y-0 rounded-lg py-5">
      {dropdownItem.map((item) => (
        <li key={item.title}>
          <Link className="text-red-500 px-5 py-4" href={item.href}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
