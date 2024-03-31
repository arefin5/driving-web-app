import Link from "next/link";
const FooterNavItem = ({ navitem }) => {
  return (
    <li className="">
      <Link className="md:text-xl text-[12px] font-normal" href={navitem.href}>
        {navitem.title}
      </Link>
    </li>
  );
};

export default FooterNavItem;
