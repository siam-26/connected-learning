import React from "react";
import largerImg from "../../../Assets/contact/Contact us-rafiki 1.png";
import address from "../../../Assets/contact/address.png";
import contact1 from "../../../Assets/contact/contact1.png";
import contact2 from "../../../Assets/contact/contact2.png";

const Get_in_touch = () => {
  return (
    <div className="bg-info mt-10">
      <div className="w-11/12 md:w-10/12 mx-auto pt-5 pb-16">
        <div className="lg:w-72 mx-auto pb-8">
          <small className="text-primary flex justify-center font-bold pb-1">
            Contact Us
          </small>
          <h1 className="text-3xl lg:text-4xl text-neutral text-center font-bold">
            Our Company Contact Now
          </h1>
        </div>

        <div className="flex justify-center items-center mt-4 lg:mt-0">
          <div>
            <div>
              <h3 className="font-bold text-2xl text-black text-center lg:text-left">
                Get In Touch With Us
              </h3>
              <p className="text-accent text-sm text-center lg:text-left pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt.
              </p>
            </div>

            <div className="pt-6">
              {/* 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4 pt-3 lg:pt-2 lg:py-0">
                <div className="w-12">
                  <img src={address} alt="" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black text-center lg:text-left">Our Address</h3>
                  <p className="text-accent text-sm text-center lg:text-left pt-1 lg:w-5/6">
                    2972 Westheimer Rd. Santa Ana, Illinois 8585
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4 pt-5 lg:pt-6 ">
                <div className="w-12">
                  <img src={contact1} alt="" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black text-center lg:text-left">
                    Contact Information
                  </h3>
                  <p className="text-accent text-sm text-center lg:text-left pt-1 lg:w-5/6">
                    Mobile: +8825465456 Email: example@gmail.com
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4 pt-8 lg:pt-6">
                <div className="w-12">
                  <img src={contact2} alt="" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black text-center lg:text-left">
                    Contact Information
                  </h3>
                  <p className="text-accent text-sm text-center lg:text-left pt-1 lg:w-5/6">
                    Mobile: +8825465456 Email: example@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex">
            <img src={largerImg} alt="" className="w-5/6 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Get_in_touch;
