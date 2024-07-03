import React from "react";

const WatcheEveryWhere = () => {
  return (
    <section className="w-[100%] border-t-[2px] border-t-gray-500  bg-black sm:py-[30px] py-[50px]">
      <div className="max-w-[1170px] mx-auto grid sm:grid-cols-2 grid-cols-1 items-center pb-[80px]">
        <div className="left text-white px-[50px]">
          <h1 className="sm:text-5xl font-bold text-3xl">Watch everywhere</h1>
          <p className="sm:text-2xl text-xl py-[20px]">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <div className="right relative">
          <div className="">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              className="relative z-[2]"
              alt=""
            />
            <video
              className="absolute z-[1] top-[22%] w-[70%] left-[15%]"
              autoPlay
              muted
            >
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatcheEveryWhere;
