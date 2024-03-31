import { Image } from "@nextui-org/react";
import Banner from "/public/assets/Courses/courses_banner.svg";
import usa from "/public/assets/country/usa.png";
import canada from "/public/assets/country/canada.png";
import germany from "/public/assets/country/germany.png";
import poland from "/public/assets/country/poland.png";
import spain from "/public/assets/country/spain.png";
import uk from "/public/assets/country/uk.png";
import swedne from "/public/assets/country/swedne.png";
const CountryPage = () => {
  const images = [poland, usa, canada, germany, spain, uk, swedne];
  return (
    <main className="pb-[60px] pt-3">
      {/* Banner section */}
      <section className="container font-liador text-white ">
        <div
          className="text-center bg-cover h-[200px] md:h-[282px] flex flex-col items-center justify-center bg-no-repeat bg-center rounded-lg"
          style={{ background: `url(${Banner.src})` }}
        >
          <h1 className=" font-bold text-2xl md:text-[40px] pb-4">
            আপনার দেশ বাছাই করুন
          </h1>
          <p className="md:text-xl text-base md:px-0 px-5">
            আপনার পছন্দের কোর্সটি বেছে নিন আর দক্ষতা অর্জন করে হয়ে উঠুন
            স্বাবলম্বী।
          </p>
        </div>
      </section>
      <section className="container mt-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
          {images.map((img, index) => (
            <div key={index}>
              <Image alt="" src={img.src} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CountryPage;
