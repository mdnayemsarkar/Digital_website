import React from "react";
const Card = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-evenly ">
        {/* first card starts here  */}
        <div className="bg-white h-[520px] w-96 mt-96 ml rounded-xl shadow-2xl">
          <div>
            {" "}
            <img
              src="../public/image/portfolio-18.jpg"
              alt=""
              className="h-56 w-80 ml-8 rounded-md"
            />
          </div>
          <div className="pl-10 mt-4">Design</div>
          <div className="text-3xl pl-6 font-semibold ml-4 mt-4">
          Power up design <br /> system with an Avada <br />Prebuilt Website
          </div>
          <div><p className="text-base mt-5 ml-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, animi. Ipsa quaerat voluptatum quibusdam officiis.</p></div>
          <div className="text-blue-600 font-semibold ml-10 mt-2">
           continue reading
          </div>
        </div>
        {/* first card ends here  */}

        {/* secound card starts here  */}
        <div className="bg-white shadow-2xl h-[520px] w-96 mt-96 ml rounded-xl">
          <div>
            {" "}
            <img
              src="../public/image/portfolio-17.jpg"
              alt=""
              className="h-56 w-80 ml-8 rounded-md"
            />
          </div>
          <div className="pl-10 mt-6">Design,Tips & Trick</div>
          <div className="text-3xl pl-6 font-semibold ml-4 mt-4">
        Behind rhe scenes of <br /> creating a UI kit
          </div>
          <div><p className="text-base mt-5 ml-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, animi. Ipsa quaerat voluptatum quibusdam officiis.</p></div>
          <div className="text-blue-600 font-semibold ml-10  mt-10">
           continue reading
          </div>
        </div>
        {/* secound card ends here  */}
        {/* third card starts here  */}
        <div className="bg-white shadow-2xl h-[520px] w-96 mt-96 ml rounded-xl">
          <div>
            {" "}
            <img
              src="../public/image/portfolio-18.jpg"
              alt=""
              className="h-56 w-80 ml-8 rounded-md"
            />
          </div>
          <div className="pl-10 mt-6">Design,Tips & Trick</div>
          <div className="text-3xl pl-6 font-semibold ml-4 mt-4">
         Five integration to help <br /> Your Product team  <br />collaborate better
          </div>
          <div><p className="text-base mt-4 ml-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, animi. Ipsa quaerat voluptatum quibusdam officiis.</p></div>
          <div className="text-blue-600 font-semibold  ml-10 mt-2">
           continue reading
          </div>
        </div>
        {/* third card ends here  */}
      </div>
    </>
  );
};
export default Card;
