import React, {useEffect,useState} from "react";
import Header from "./Header";
import MiniCntnr from "./minicntnr";
import homeimg from "../public/image/hero-1.jpg";
import homeimgtwo from "../public/image/hero-2-400x473.jpg";
import homeimgthree from "../public/image/Capture.jpg";
import hand from "../public/image/icon-1.webp";
import player from "../public/image/play-button.png";

import Msrvc from "./Main_srvc";
import Blue from "./Bluecontainer";
import Oppositehm from "./Opposite";
import Card from "./Card";
import Footer from "./Footer";

const MyComponent = () => {
  const words = ['Dynamic website', 'React Website',  'product','Responsive site', 'Change'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showWord, setShowWord] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowWord(false); // Start fade-out effect

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Change to the next word
        setShowWord(true); // Start fade-in effect
      }, 500); // Wait for 500 milliseconds for fade-out effect to complete
    }, 2000); // Change the word every 2 seconds

    return () => {
      clearInterval(timer);
    };
  }, [words.length]); // Include words.length in the dependency array to update when the number of words changes

  const currentWord = words[currentWordIndex];
  return (
    <>
      <Header />

      {/* header ends  */}

      <div className="grid grid-cols-2 w-screen h-screen">
        <div className="flex">
          <div>
            <img
              src={homeimg}
              alt=""
              className=" w-[50%] mt-20 ml-14 rounded"
            />
          </div>
          {/* img two start  */}
          <div className="flex flex-col justify-center items-center">
            <div className="absolute top-52 left-1/3">
              <img src={homeimgtwo} alt="" className="w-[50%] rounded-md" />
            </div>
            {/* img two ends  */}
            <div className="absolute top-[480px] left-[433px]">
              <img src={homeimgthree} alt="" className="rounded-lg" />
            </div>
          </div>
        </div>
        {/* right section start */}
        <div className="flex flex-col">
          <div className="flex mt-10">
            <img src={hand} alt="" />
            <p className="text-3xl pl-5">Hello! We are Avada Digital Agency.</p>
          </div>
          <div className="text-7xl font-semibold pl-12 mt-3">
            We Create Amazing digital<br />
         <p className={`transition-opacity duration-500 text-purple-600 ${showWord ? 'opacity-100' : 'opacity-0'}`}>{currentWord}</p>
          </div>
          <div className="flex justify-around mt-11">
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Perspiciatis, maiores!
            </p>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Learn more about us
              </span>
            </button>
          </div>
          <div className="flex items-center mt-8">
            <div>
              <img src={player} alt="" />
            </div>
            <p className="pl-4 text-blue-700 font-semibold text-lg">
              View our new showrell
            </p>
          </div>
        </div>
        {/* right section ends  */}
      </div>

      <MiniCntnr />
      <div className="bg-[url('../public/image/banner-1.jpg')] h-[600px] w-screen bg-cover relative">
        <div className="absolute top-44 left-16 rounded-2xl shadow-2xl bg-white w-2/5 h-5/6 flex flex-col items-center">
          <div>
            <p className="text-2xl text-blue-500 text-center mt-16">
              We are Avada Digital Agency
            </p>
          </div>
          <div className="text-4xl font-semibold mt-6 tracking-wider">
            Analyze Your entire <br />
            market pricing & <br /> stock availability
          </div>
          <div>
            <p className="mt-8 text-gray-500 pl-10">
              Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
              Sequi placeat nemo facere numquam, veritatis culpa?
            </p>
          </div>
          <div className="mr-56 mt-10">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Buy Avada today
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* main service component start  */}
      <div>
        <Msrvc />
      </div>
      {/* main service component ends */}

      {/* blue container start here  */}
      <div className="mt-16 relative">
        <Blue />
      </div>
      {/* blue container ends here  */}
      {/* Oppositehm starts here  */}
<div className="h-screen w-screen mt-96 relative top-96
">
<Oppositehm/>
</div>
      {/* Oppositehm ends here  */}
      {/* card starts here  */}
<div>
  <Card/>
</div>
      {/* card ends here  */}
      {/* footer starts here  */}
<div className="mt-96">
  <Footer/>
</div>

      {/* footer ends here  */}
    </>
  );
};

export default MyComponent;
