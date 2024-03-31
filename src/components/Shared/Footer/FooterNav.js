import FooterNavItem from "./FooterNavItem";
import FooterTitle from "./FooterTitle";

const FooterNav = ({ title, navitem }) => {
  return (
    <nav className=" basis-[123px] sm:basis-auto">
      <FooterTitle title={title} />
      <ul className="flex-col flex gap-1 md:gap-4">
        {navitem?.map((item) => (
          <FooterNavItem key={item.title} navitem={item} />
        ))}
      </ul>
    </nav>
  );
};

export default FooterNav;
