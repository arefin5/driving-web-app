import bg from "/public/assets/shared/BG.svg";

const NewBanner = ({ bannerText = "bannder text please" }) => {
  return (
    <section
      style={{ backgroundImage: `url(${bg.src})` }}
      className="bg-cover py-20 te"
    >
      <h2 className="text-center text-white text-5xl font-bold font-liador">
        {bannerText}
      </h2>
    </section>
  );
};

export default NewBanner;
