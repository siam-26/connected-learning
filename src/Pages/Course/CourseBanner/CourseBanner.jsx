import React from "react";
import { Link } from "react-router-dom";
import aboutBannerImg from "../../../Assets/About/about_banner.png";
import { AiOutlineRight } from "react-icons/ai";

const CourseBanner = () => {
  return (
    <div className="w-full relative">
      <img
        src={aboutBannerImg}
        alt=""
        className="w-full lg:h-[600px] brightness-50"
      />

      <div className="flex gap-3 lg:justify-center lg:items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center items-center">
          <Link to="/">
            <h1 className="font-bold text-white md:text-3xl lg:text-4xl">
              Home
            </h1>
          </Link>
          <span className="text-white md:text-3xl lg:text-5xl">
            <AiOutlineRight />
          </span>
        </div>

        <div>
          <Link to="/course">
            <h1
              className="font-bold text-primary
            md:text-3xl lg:text-4xl">
              Course
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
