import React from "react";
import experienceImg from "../../../Assets/About/Why_us/experience (3) 1.png";
import unitedImg from "../../../Assets/About/Why_us/united 1.png";
import pricingImg from "../../../Assets/About/Why_us/pricing.png";

const WhyUs = () => {
  const services = [
    {
      id: 1,
      name: "Great Experience",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simplyrandom text. It has roopiece of classical Latin liter ature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin profes",
      img: experienceImg,
    },

    {
      id: 2,
      name: "Dedicated Team",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roopiece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin profes",
      img: unitedImg,
    },

    {
      id: 3,
      name: "Flexible Pricing",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simplyrandom text. It has roopiece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin profes",
      img: pricingImg,
    },
  ];

  return (
    <div className="bg-info pt-10">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className=" md:w-4/6 lg:w-3/6 mx-auto md:pt-6 lg:pt-10 lg:pb-5">
          <h1 className="font-bold text-4xl text-neutral text-center py-4">
            Why Us?
          </h1>
          <p className="text-center text-accent text-sm md:text-normal">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roo piece of classical Latin literature from 45 BC, making it
            over 2000 years old. Ri chard McClintock, a Latin profes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 md:pt-2 lg:pt-0 py-20">
          {services &&
            services.map((service) => (
              <div key={service.id} className="lg:w-5/6">
                <div className="px-10 pt-10 lg:pb-3 flex justify-center">
                  <img
                    src={service.img}
                    alt=""
                    className="w-10 md:w-14 lg:w-16"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-2xl text-neutral text-center py-3">
                    {service.name}
                  </h2>
                  <p className="text-center text-accent text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
