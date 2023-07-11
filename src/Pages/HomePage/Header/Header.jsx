import React from "react";
import playButton from "../../../Assets/Homepage_Header/Group 5.png";
import headerImg from "../../../Assets/Homepage_Header/Group 6.png";
import headerCountingImg from "../../../Assets/Homepage_Header/Group 10.png";
import polygon from "../../../Assets/Homepage_Header/Polygon 1.png";
import vector3 from "../../../Assets/Homepage_Header/Vector 3.png";
import mouse from "../../../Assets/Homepage_Header/Mask group.png";
import vector2 from "../../../Assets/Homepage_Header/Vector 2.png";
import vector4 from "../../../Assets/Homepage_Header/Vector 4.png";
import vector1 from "../../../Assets/Homepage_Header/Vector 1.png";


const Header = () => {
  return (
    <div className="bg-info relative">
      <div className="w-11/12 md:w-10/12 mx-auto flex flex-col-reverse lg:flex-row gap-10 justify-center items-center pt-10">
        {/* left part */}
        <div className="lg:w-7/12 md:pt-5 lg:pt-0">
          <div className="lg:w-5/6 text-center lg:text-left">
            <h1 className="font-bold text-4xl md:text-5xl text-neutral">
              For Every Student Every Classroom.
              <span className="text-primary">Real Results.</span>
            </h1>
          </div>

          <div className="lg:w-5/6 py-4 md:py-8 lg:py-4 text-center lg:text-left">
            <p className="text-sm md:text-base lg:text-sm">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a
              completeLorem ipsum dolor sit amet, consectetur adipi scing elit,
              sed do eiusm
            </p>
          </div>

          {/* button part */}
          <div className="flex justify-evenly lg:justify-start items-center lg:gap-3 pb-6 lg:pb-0">
            <div>
              <button className="bg-primary rounded-full px-4 py-1 md:py-1">
                <a className="text-white font-bold text-xs md:text-sm">
                  Get Started
                </a>
              </button>
            </div>

            <div className="w-10">
              <img src={playButton} alt="" />
            </div>

            <div>
              <p className="text-black font-bold text-xs md:text-sm">
                Watch Video
              </p>
            </div>
          </div>
        </div>

        {/* right part */}
        <div className="lg:w-5/12 relative">
          <img src={headerImg} alt="" className=""/>
          <div>
            <img
              src={headerCountingImg}
              alt=""
              className="absolute bottom-8 right-1 md:-right-5 w-32 md:w-44"
            />
          </div>

          <div className="absolute top-14 w-12">
            <img src={polygon} alt="" />
          </div>

          <div className="absolute top-10 right-0 w-44">
            <img src={vector3} alt="" />
          </div>

          <div className="absolute top-20 right-0 w-10">
            <img src={mouse} alt="" />
          </div>

          <div className="absolute bottom-10 left-10 w-10">
            <img src={mouse} alt="" />
          </div>

          <div className="absolute bottom-0 right-6 w-44">
            <img src={vector2} alt="" />
          </div>

          <div className="absolute bottom-20 md:bottom-24 -left-1 md:-left-6 w-44">
            <img src={vector4} alt="" />
          </div>
        </div>
      </div>
      <img src={vector1} alt="" className="w-72 absolute bottom-0 hidden lg:flex"/>
    </div>
  );
};

export default Header;
