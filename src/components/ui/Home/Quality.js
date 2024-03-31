import Image from "next/image";
import React from "react";
import img1 from "../../../../public/assets/betweenCourse/Icones/Frame (2).png";
import img2 from "../../../../public/assets/betweenCourse/Icones/Frame (3).png";
import img3 from "../../../../public/assets/betweenCourse/Icones/Frame (4).png";



const Quality = () => {
  return (
    <div className=" mb-10 mx-5 md:mx-8 rounded-xl px-5 py-10 bg-gradient-to-r from-fuchsia-900 via-primary to-fuchsia-900">
      <div className="flex md:flex-row flex-col gap-5 md:gap-0 md:justify-between justify-start items-center">
        <div className="flex text-white items-center md:items-start gap-3">
          <Image src={img1} className="h-16 w-16" height={80} width={80} alt=""></Image>
          <div>
            <h1 className="font-semibold mb-1 text-lg">Enjoy Lifetime Access</h1>
            <p>Watch Video Anywhere</p>
          </div>
        </div>
        <div className="flex text-white items-center md:items-start gap-3">
          <Image src={img2} className="h-16 w-16" height={80} width={80} alt=""></Image>
          <div>
            <h1 className="font-semibold mb-1 text-lg">Top Instructor in over World</h1>
            <p>Watch Video Anywhere</p>
          </div>
        </div>
        <div className="flex text-white items-center md:items-start gap-3">
          <Image src={img3} className="h-16 w-16" height={80} width={80} alt=""></Image>
          <div>
            <h1 className="font-semibold mb-1 text-lg">Made your own Career</h1>
            <p>Watch Video Anywhere</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
