import React from "react";

const DownloadApp = () => {
  return (
    <section className="w-[100%] border-t-[2px] border-t-gray-500  bg-black sm:py-[30px] py-[50px]">
      <div className="max-w-[1170px] mx-auto grid sm:grid-cols-2 grid-cols-1 items-center pb-[80px]">
        <div className="right relative">
          <div className="">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt=""
            />
            <div className="border-[1px] sm:w-[50%] w-[60%] border-gray-500 absolute bottom-[5%] sm:left-[25%] left-[20%] grid grid-cols-[70%_auto] bg-[rgba(0,0,0,0.9)] rounded-[8px]">
              <div className="left grid grid-cols-[25%_auto] gap-[5px] text-center items-center">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  className="m-[20px]"
                  alt=""
                />
                <div className="">
                  <h1 className="text-white">Stranger Things</h1>
                  <p className="text-blue-700">Downloading....</p>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="left text-white sm:px-[50px] px-[31px] pt-[50px]">
          <h1 className="sm:text-5xl font-bold text-3xl">Download your shows to watch offline</h1>
          <p className="sm:text-2xl text-xl py-[20px]">
          Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
