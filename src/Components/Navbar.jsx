import React from "react";

const Navbar = () => {
  return (
    <section className="w-[100%]">
      <div className="max-w-[1170px] mx-auto grid  grid-cols-2 items-center py-[20px] px-[20px]">

        <div className="">
          <img
            className="sm:w-[170px] w-[140px]"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
        </div>

        <div className="flex gap-[20px] justify-end">
          <div className="btn">
            <button className="text-white bg-red-600 hover:bg-red-700 px-[12px] py-[4px] rounded-sm">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
