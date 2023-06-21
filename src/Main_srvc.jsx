import React from "react";
import Service from "./Service";

const Msrvc = () => {
  return (
    <>
      <div className="w-screen h-[760px]">
        <div className="mt-48">
          <Service />
        </div>
        <div className="flex">
          <div>
            <img
              src="../public/image/seervice-bg.png"
              alt=""
              className="w-4/5 pl-20 mt-44"
            />
          </div>
          {/* right section starts  */}
          <div className="mt-44">
            <div className="text-xl text-blue-600 font-semibold">Web and mobile develoment</div>
            <div className="text-4xl font-bold tracking-wider mt-4">We are a full-service <br /> degital company</div>
            <div className="mt-4 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. A,
              repellendus?Lorem <br /> ipsum dolor sit amet.
            </div>
            <div className="mt-11">
              <button
                type="button"
                class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
               Got a project?contact us!
              </button>
            </div>
          </div>
          {/* right section ends here  */}
        </div>
      </div>
    </>
  );
};
export default Msrvc;
