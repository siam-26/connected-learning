import React from "react";
import footerLogo from "../../../Assets/footer/footer_logo.png";
import appStoreImg from "../../../Assets/footer/appStore.png";
import googlePlayImg from "../../../Assets/footer/googlePlay.png";
import linkedinImg from "../../../Assets/footer/linkedin (7) 1.png";
import twitterImg from "../../../Assets/footer/twitter (7) 1.png";
import facebookImg from "../../../Assets/footer/facebook (8) 1.png";

const FooterMedium = () => {
  return (
    // Only for medium device
    <div className="hidden md:flex lg:hidden w-10/12 mx-auto mt-24 ">
      <footer className="grid grid-cols-2 gap-x-24 gap-y-14 py-10">
        <div className="w-72">
          <a
            href="#"
            className="text-black normal-case text-2xl bg-base-100 border-none font-extrabold pl-0">
            <img src={footerLogo} alt="" className="w-32 bg-secondary" />
          </a>
          <p className="text-white my-4 text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do.
          </p>

          <img src={appStoreImg} alt="" className="w-32 py-2" />
          <img src={googlePlayImg} alt="" className="w-32" />

          <div>
            <h4 className="font-bold text-white text-base pt-8 lg:pt-3">
              Follow Us
            </h4>

            <div className="flex gap-2 mt-3 py-3 md:py-0">
              <div className="w-8">
                <img src={linkedinImg} alt="" />
              </div>
              <div className="w-8">
                <img src={twitterImg} alt="" />
              </div>
              <div className="w-8">
                <img src={facebookImg} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 lg:my-0">
          <span className="font-semibold text-white text-xl">About Us</span>
          <div className="flex flex-col gap-3 my-4">
            <a href="#" className="font-normal text-info text-sm text-sm">
              Career
            </a>
            <a href="#" className="font-normal text-info text-sm text-sm">
              Investor Relations
            </a>
            <a href="#" className="font-normal text-info text-sm text-sm">
              Social Impact
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-4 lg:py-0">
          <span className="font-semibold text-white text-xl">Resources</span>
          <div className="flex flex-col gap-3">
            <a href="#" className="font-normal text-info text-sm mt-2 md:mt-4">
              Contact
            </a>
            <a href="#" className="font-normal text-info text-sm">
              Give Feedback
            </a>
            <a href="#" className="font-normal text-info text-sm">
              Hello@example.com
            </a>
          </div>
        </div>

        <div className="py-4 lg:py-0 form-control w-80">
          <div className="flex items-center input input-bordered lg:py-4 rounded-full w-full relative">
            <input
              type="text"
              placeholder="Email Address"
              className="focus:outline-none w-full pr-16 text-xs md:text-base placeholder-neutral"
            />
            <button className="bg-primary text-white text-base rounded-full px-8 py-3 absolute right-0">
              Started
            </button>
          </div>
          <div className="flex flex-col gap-3 pl-4 pt-4 lg:pt-0">
            <a href="#" className="font-normal text-info text-sm mt-2 md:mt-4">
              Email US
            </a>
            <a href="#" className="font-normal text-info text-sm">
              RK@Oama.io
            </a>
            <a href="#" className="font-normal text-info text-sm">
              Bolomu All Rights Reserved, 2021
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterMedium;
