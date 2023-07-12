import React from "react";
import business from "../../../Assets/Homepage_Header/categories img/business.png";
import development from "../../../Assets/Homepage_Header/categories img/development.png";
import software from "../../../Assets/Homepage_Header/categories img/It_And_software.png";
import circle from "../../../Assets/Homepage_Header/categories img/circle.png";
import vector from "../../../Assets/Homepage_Header/categories img/Vector 5.png";
import ui_design from "../../../Assets/Homepage_Header/categories img/ui_design.png";
import ux_design from "../../../Assets/Homepage_Header/categories img/UX_design.png";
import marketing from "../../../Assets/Homepage_Header/categories img/marketing.png";
import photography from "../../../Assets/Homepage_Header/categories img/photography.png";
import graphics_design from "../../../Assets/Homepage_Header/categories img/graphic_design.png";

const Categories = () => {
  const categories = [
    {
      id: 1,
      img: development,
      bg:"bg-info"
    },
    {
      id: 2,
      img: business,
      name: "Business",
    },
    {
      id: 3,
      img: software,
      subImg: circle,
      vectorImg: vector,
      bg:"bg-primary"
    },
    {
      id: 4,
      img: ui_design,
      name: "UI Design",
    },
    {
      id: 5,
      img: ux_design,
      name: "UX Design",
    },
    {
      id: 6,
      img: marketing,
      name: "Marketing",
    },
    {
      id: 7,
      img: photography,
      name: "Photography",
    },
    {
      id: 8,
      img: graphics_design,
      name: "Graphics Design",
    },
  ];
  return (
    <div className="bg-white mt-10">
      <div className="w-11/12 md:w-10/12 mx-auto pb-8 md:pb-16">
        <div className="lg:w-44 pb-8">
          <small className="text-primary font-bold pb-1">Service</small>
          <h1 className="text-3xl md:text-4xl text-neutral font-bold">
            Top Categories
          </h1>
        </div>

        {/* categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories &&
            categories.map((category) => (
              <>
                {category.name ? (
                  <div key={category.id} className="bg-info rounded-md">
                    <div className="pt-7 md:pt-8">
                      <img src={category.img} alt="" className="w-8 md:w-11 mx-auto" />
                    </div>

                    <div className="text-center pt-3 lg:pt-6 pb-8">
                      <p className="font-bold font-sans text-xs md:text-base lg:text-lg text-neutral">
                      {category.name}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div key={category.id} className={`${category.bg} rounded-md`}>
                    <div className="relative">
                      <img src={category.img} alt="" className="" />
                      <div className="absolute top-6 right-10 md:right-12 lg:right-14">
                        <img
                          src={category.subImg && category.subImg}
                          alt=""
                          className="w-2 md:w-3"
                        />
                      </div>
                      <div className="absolute top-10 md:top-11 lg:top-12 right-12 md:right-14 right-16">
                        <img
                          src={category.subImg && category.subImg}
                          alt=""
                          className="w-4 md:w-6"
                        />
                      </div>
                      <div className="absolute -bottom-2 md:bottom-0 -right-2">
                        <img
                          src={category.vectorImg && category.vectorImg}
                          alt=""
                          className="w-10 md:w-12 lg:w-14"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
