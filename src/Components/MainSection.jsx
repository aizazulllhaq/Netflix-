import React from "react";

const MainSection = () => {
  return (
    <section className="w-[100%] sm:h-[100vh] md:h-[600px] h-[580px]">
      <div className="max-w-[1170px] mx-auto py-[150px] text-white text-center">
        <h1 className="md:text-6xl sm:text-3xl text-2xl font-bold px-[20px]">
          Unlimited movies TV shows, and more
        </h1>
        <p className="md:text-2xl sm:text-xl text-md py-[25px] font-semibold">Watch anywhere. Cancel anytime.</p>
        <p className="md:text-2xl sm:text-xl text-md pb-[20px] font-semibold px-[20px]">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="max-w-[700px] mx-auto px-[20px] md:my-[20px]">
          <form action="" className="flex justify-center sm:flex-nowrap flex-wrap">
            <input type="search" className="text-md w-[400px] h-[60px] px-[10px] bg-[rgba(0,0,0,0.6)] border-[1px] border-gray-600 mr-[10px] sm:mb-0 mb-[10px]" placeholder="Email Address" />
            <button className="px-[30px] py-[15px] bg-red-600 font-bold rounded-md">{"Get Started >"}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
