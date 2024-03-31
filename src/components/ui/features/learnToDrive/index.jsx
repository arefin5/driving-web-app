import React from "react";

const LearnToDrive = () => {
  return (
    <div className=" py-10 px-20 mb-10">
      <div className="grid grid-cols-1 mt-16 md:mt-28 gap-10 md:gap-20 md:grid-cols-2">
        <div>
          <video className="w-full h-full rounded-xl" controls>
            <source src="/myvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="">
          <div>
            <h2 className="text-xl mb-4 font-semibold">
			Complete driving test preparation
            </h2>
            <h1 className="text-2xl md:text-3xl mb-7 font-semibold">
			start with Learn to Drive with this
            </h1>
            <p className="text-justify">
			Now wherever you are, nothing matters! Because everyone is learning and winning with Learn Drive, the most trusted driving learning organization in the country. But how? Watch the video next to know.
            </p>
            <button className="bg-primary mt-7 text-white px-6 py-3 text-lg font-semibold rounded">
			Learn More
            </button>
          </div>
        </div>
      </div>







      {/* <div className=" grid grid-cols-2 w-full">
				<div>
					<Image
						src="/assets/practicesection/tutorial2.png"
						width={0}
						height={0}
						sizes="100vw"
						alt="driving skill"
						style={{
							width: "450px",
							height: "auto",
							objectFit: "contain",
						}}
					/>
				</div>
				<div className=" flex flex-col justify-center w-full ">
					<h1 className=" text-2xl text-blue-800 w-[100%] ">
						{`Complete driving test preparation`}
					</h1>
					<h1 className=" text-4xl text-blue-800 w-[75%] ">
						{`Let's start with Learn to Drive with this`}
					</h1>
					<h1 className=" text-lg py-3 text-blue-800 w-[75%] ">
						Now wherever you are, nothing matters! Because everyone is learning
						and winning with Learn Drive, the most trusted driving learning
						organization in the country. But how? Watch the video next to know.
					</h1>

					<div className=" flex gap-4 ">
						<button
							title="learn more"
							type="button"
							className=" px-6 flex justify-center items-center w-auto py-2 bg-blue-800 text-white rounded-md gap-2 "
						>
							learn more
						</button>
					</div>
				</div>
			</div> */}




    </div>
  );
};

export default LearnToDrive;
