import React from "react";
import rectangle from "../../../Assets/Homepage_Header/people_say_img/Rectangle 27.png";
import reviewBox from "../../../Assets/Homepage_Header/people_say_img/Rectangle 29.png";
import mask from "../../../Assets/Homepage_Header/people_say_img/Mask group.png";
import people from "../../../Assets/Homepage_Header/people_say_img/people.png";
import round from "../../../Assets/Homepage_Header/people_say_img/round.png";
import { AiFillStar } from "react-icons/ai";

const What_they_say = () => {
  return (
    <div className="bg-white mt-10">
      <div className="w-11/12 md:w-10/12 mx-auto mb-40 md:mb-20 lg:mb-0 md:pb-16">
        <div className="hero-content flex flex-col-reverse lg:flex-row-reverse lg:gap-24 pt-10 lg:pt-10">
          <div className="relative lg:w-6/12">
            <img src={people} alt="" className="w-full lg:w-72" />
            <div className="absolute top-20 md:top-28 lg:top-20 right-0 md:-right-6 lg:right-36">
              <div className="relative w-12">
                <img src={round} alt="" className="w-full" />
                <div className="absolute bottom-4 left-4">
                  <img src={mask} alt="" className="w-4" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-28 md:-bottom-20 -right-3 md:-right-20 lg:right-12">
              <div className="relative">
                <img src={reviewBox} alt="" className="w-72 h-48" />

                <div className="absolute bottom-0 my-4">
                  <div className="w-5/6 mx-auto">
                    <small className="text-xs">
                      Lorem ipsum dolor sit amet, consectetur adip iscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commo do consequat.
                      Duis aute irure dolor in repreh
                    </small>
                  </div>
                  <div className="flex justify-between w-5/6 mx-auto mt-2">
                    <div>
                      <p className="font-bold text-neutral text-sm">
                        Ruksana Akter
                      </p>
                    </div>
                    <div className="flex text-yellow-500">
                      <AiFillStar className="text-xl" />
                      <AiFillStar className="text-xl" />
                      <AiFillStar className="text-xl" />
                      <AiFillStar className="text-xl" />
                      <AiFillStar className="text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-6/12 pt-3 md:pt-0">
            <small className="text-primary font-bold pb-2">Testimonial</small>
            <h1 className="text-3xl md:text-4xl text-neutral font-bold">
              What They Say?
            </h1>
            <p className="py-6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiu smod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              repreh
              <br />
              <br />
              enderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <div className="text-center lg:text-left pb-4 lg:pb-0 mt-3 flex justify-center md:justify-start">
              <div className="flex items-center input input-bordered border-2 border-r-0 border-primary  rounded-full w-5/6 relative">
                <input
                  type="text"
                  placeholder="Write your Assessment"
                  className="focus:outline-none w-full pr-16 text-xs text-primary md:text-base placeholder-primary font-bold"
                />
                <div className="absolute right-0 cursor-pointer">
                  <div className="relative">
                    <img src={rectangle} alt="" className="w-14" />
                    <div className="absolute bottom-4 left-6">
                      <img src={mask} alt="" className="w-4" />
                    </div>
                  </div>
                </div>

                {/* <button className="bg-primary text-white text-base rounded-full px-8 py-3 absolute right-0">
                  Started
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What_they_say;
