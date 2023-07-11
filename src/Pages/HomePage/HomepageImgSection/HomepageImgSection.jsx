import React from "react";
import google from "../../../Assets/Homepage_Header/google.png";
import microsoft from "../../../Assets/Homepage_Header/microsoft.png";
import dribble from "../../../Assets/Homepage_Header/dribble.png";
import lattice from "../../../Assets/Homepage_Header/lattice.png";

const HomepageImgSection = () => {
  return (
    <div className="bg-info pt-0 pb-10 lg:pt-16 lg:pb-16">
      <div className="w-11/12 md:w-10/12 mx-auto pt-5">
        <div className="flex justify-center items-center bg-white rounded-xl px-5 lg:px-16 md:gap-20">
          <div className="">
            <img src={google} alt="" />
          </div>

          <div className="">
            <img src={microsoft} alt="" />
          </div>

          <div className="">
            <img src={dribble} alt="" />
          </div>

          <div className="">
            <img src={lattice} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageImgSection;
