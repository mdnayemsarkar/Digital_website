import React from "react";
const Blue = () => {
  return (
    <>
      <div className="bg-blue-600 w-screen h-screen absolute top-1">
        <p className="mt-32">
          {" "}
          <div className="flex justify-around">
            <div className="text-white text-6xl tracking-wider font-semibold">
              Our recent <br />
              <p className="mt-6"> projects</p>
            </div>
            <div>
              <p className="text-white text-xl font-medium">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Dolore, possimus! Consequatur <br /> natus assumenda vero quod
                aut eaque <br /> fugit, temporibus blanditiis inventore officia{" "}
                <br />
                cumque adipisci rerum!
              </p>
            </div>
            <div className="mt-16">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Purple to pink
                </span>
              </button>
            </div>
          </div>
          {/* upper section ends here  */}
        </p>

        <div className="flex justify-evenly">
          <div className="bg-white h-80 w-72 mt-16 rounded-xl">
            <div>
              {" "}
              <img
                src="../public/image/Nayeem.png"
                alt=""
                className="h-56 w-64 ml-4 rounded-md"
              />
            </div>
            <div className="text-lg font-semibold ml-4 mt-4">
              Avada Interior Prebuilt Website
            </div>
            <div className="text-blue-600 font-semibold text-center mt-5">
              Web Design
            </div>
          </div>
          <div className="bg-white h-80 w-72 mt-16 rounded-xl">
            <div>
              {" "}
              <img
                src="../public/image/portfolio-17.jpg"
                alt=""
                className="h-56 w-64 ml-4 rounded-md"
              />
            </div>
            <div className="text-lg font-semibold ml-4 mt-4">
             Avada Fitness Prebuilt Website
            </div>
            <div className="text-blue-600 font-semibold text-center mt-5">
              Web Design
            </div>
          </div>
          <div className="bg-white h-80 w-72 mt-16 rounded-xl">
            <div>
              {" "}
              <img
                src="../public/image/portfolio-18.jpg"
                alt=""
                className="h-56 w-64 ml-4 rounded-md"
              />
            </div>
            <div className="text-lg font-semibold ml-4 mt-4">
              Avada Crypto Prebuilt Website
            </div>
            <div className="text-blue-600 font-semibold text-center mt-5">
              Web Design
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blue;
