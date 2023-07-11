import React from "react";
import smallImage from "../../../Assets/Homepage_Header/digitalCourses/digitalCoursesImg2.png";
import mainImage from "../../../Assets/Homepage_Header/digitalCourses/digitalCoursesImg1.png";

const BestDigitalCourses = () => {
  return (
    <div className="hero w-11/12 md:w-10/12 mx-auto pt-10 md:pt-20">
      <div className="hero-content flex flex-col lg:flex-row lg:gap-24 pt-10 lg:pt-0">
        <div className="relative">
          <div className="w-64 h-36 md:w-96 md:h-60 border border-primary rounded-xl"></div>
          <div className="hidden md:flex w-16 h-28 md:w-28 md:h-38 absolute -top-14 -right-10 md:-top-16 md:-right-14">
            <img src={smallImage} alt="" />
          </div>

          <div className="w-64 h-36 md:w-96 md:h-60 absolute -top-8 -right-3 md:-top-10 md:-right-7">
            <img src={mainImage} alt="" />
          </div>
        </div>

        <div className="lg:w-6/12 pt-3 md:pt-0">
          <small className="text-primary font-bold pb-2">About Us</small>
          <h1 className="text-3xl md:text-4xl text-neutral font-bold">
            We are providing the best online digital courses.
          </h1>
          <p className="py-6 text-justify">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roo piece of classical Latin literature from 45 BC, making it
            over 2000 years old. Ri chard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, l ooked up one of the more
            obscure Latin words, consectetur, from a Lorem Ips um passage, and
            going through the cites of the word in classical literature, di
            scovered the undoubtable source .
            <br />
            <br />
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonoru et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on.
          </p>
          <div className="text-center lg:text-left pb-4 lg:pb-0">
            <button className="bg-primary rounded-full px-7 py-1 md:py-2">
              <a className="text-white text-base font-bold text-xs md:text-base">
                Learn More
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDigitalCourses;
