import React from "react";

const ProfileForKids = () => {
  return (
    <section className="w-[100%] border-t-[2px] border-t-gray-500  bg-black sm:py-[30px] py-[50px]">
      <div className="max-w-[1170px] mx-auto grid sm:grid-cols-2 grid-cols-1 items-center pb-[80px]">
        <div className="right">
          <div className="">
            <img
              src="https://occ-0-7649-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
              alt=""
            />
          </div>
        </div>
        <div className="left text-white px-[50px]">
          <h1 className="sm:text-5xl font-bold text-3xl">
            Create profiles for kids
          </h1>
          <p className="sm:text-2xl text-xl py-[20px]">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileForKids;
