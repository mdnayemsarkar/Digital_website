import React from "react";
import hand from "../public/image/icon-1.webp";
const Oppositehm = () => {
  return (
    <>
      <div className="grid grid-cols-2 ">
        <div>
          <div className="flex justify-center mt-20">
            <img src={hand} alt="" />
            <p className="text-center text-3xl">We are a passionste team</p>
          </div>
          {/* end  */}
          <div>
            <p className="text-6xl tracking-wider ml-32 mt-10">
              We Create <br /> amazing digital <br /> product
            </p>
          </div>
          {/* ends  */}
          <div>
            <p className="text-gray-500 mt-16 pl-32">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Nisi quaerat nobis expedita soluta sunt quo blanditiis
              debitis
              <br /> officiabr asperiores consectetur?
            </p>
          </div>
          {/* ends  */}
          <div className="mt-16 pl-32">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Learn more about us
              </span>
            </button>
          </div>
          {/* ends  */}
        </div>
        <div className="flex">
          <div>
            <img
              src="../public/image/hero-3.jpg"
              alt=""
              className="w-80 rounded-md mt-28"
            />
          </div>
          {/* ends  */}
          <div>
            <div>
              <img
                src="../public/image/hero-4.jpg"
                alt=""
                className="h-60 mt-40 pl-12 rounded-lg"
              />
            </div>
            {/* ends  */}
            <div>
              <img
                src="../public/image/Capture.jpg"
                alt=""
                className="mt-8 pl-16"
              />
            </div>
          </div>
          {/* ends  */}
        </div>
      </div>
    </>
  );
};
export default Oppositehm;
