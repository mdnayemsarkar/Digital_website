import React from "react";
import one from "../public/image/cardiogram.png";
import two from "../public/image/handshake.png";
import three from "../public/image/letter-t.png";
import four from "../public/image/s.png";
import five from "../public/image/wardrobe.png";
import six from "../public/image/ux.png";

const MiniCntnr = () => {
  return (
    <>
      {/* mini container starts  */}
      <div className="h-64 w-screen">
        <div>
          <p className="text-center text-xl mt-7 font-semibold">
            We are very fortunate to work these amaizing partners
          </p>
        </div>
        <div className="flex pl-16 gap-14">
          <div>
            <img src={one} alt="" className="h-28 mt-12" />
          </div>
          <div>
            <img src={two} alt="" className="h-28 mt-12" />
          </div>
          <div>
            <img src={five} alt="" className="h-28 mt-12" />
          </div>
          <div>
            <img src={three} alt="" className="h-28 mt-12" />
          </div>
          <div>
            <img src={four} alt="" className="h-28 mt-12" />
          </div>
          <div>
            <img src={five} alt="" className="h-28 mt-12" />
          </div>
          <div>
            <img src={six} alt="" className="h-28 mt-12" />
          </div>
        </div>
      </div>
      {/* mini cintainer ends  */}
    </>
  );
};
export default MiniCntnr;
