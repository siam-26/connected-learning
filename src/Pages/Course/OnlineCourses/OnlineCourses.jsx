import React from "react";
import img1 from "../../../Assets/Courses/img1.png";
import img2 from "../../../Assets/Courses/img2.png";
import img3 from "../../../Assets/Courses/img3.png";
import img4 from "../../../Assets/Courses/img4.png";
import best from "../../../Assets/Courses/best 1.png";
import { AiFillStar } from "react-icons/ai";

const OnlineCourses = () => {
    const courses = [
        {
            id:1,
            subtitle:"Web Design",
            img:img1,
            name:"UI/UX Design",
            price:"$254.36",
        },
        {
            id:2,
            subtitle:"Web Design",
            img:img2,
            name:"CSS",
            price:"$254.36",
        },
        {
            id:3,
            subtitle:"Web Design",
            img:img3,
            name:"Digital Marketing",
            price:"$254.36",
        },
        {
            id:4,
            subtitle:"Web Design",
            img:img4,
            name:"UI/UX Design",
            price:"$254.36",
        },
        {
            id:5,
            subtitle:"Web Design",
            img:img1,
            name:"UI/UX Design",
            price:"$254.36",
        },
        {
            id:6,
            subtitle:"Web Design",
            img:img1,
            name:"UI/UX Design",
            price:"$254.36",
        },
        {
            id:7,
            subtitle:"Web Design",
            img:img1,
            name:"UI/UX Design",
            price:"$254.36",
        },
        {
            id:8,
            subtitle:"Web Design",
            img:img2,
            name:"CSS",
            price:"$254.36",
        },
        {
            id:9,
            subtitle:"Web Design",
            img:img3,
            name:"Digital Marketing",
            price:"$254.36",
        },
        {
            id:10,
            subtitle:"Web Design",
            img:img4,
            name:"UI/UX Design",
            price:"$254.36",
        },
        {
            id:11,
            subtitle:"Web Design",
            img:img1,
            name:"UI/UX Design",
            price:"$254.36",
        },
        {
            id:12,
            subtitle:"Web Design",
            img:img1,
            name:"UI/UX Design",
            price:"$254.36",
        },
    ]
  return (
    <div className="bg-info mt-10">
      <div className="w-11/12 md:w-10/12 mx-auto py-5">
        <div className="lg:w-72 mx-auto pb-8">
          <small className="text-primary flex justify-center font-bold pb-1">
            Course List
          </small>
          <h1 className="text-4xl text-neutral text-center font-bold">
            Our Online Course
          </h1>
        </div>

        {/* Online Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-6">
            
            {
                courses &&
                courses.map((course)=><div key={course.id} className="bg-white rounded-3xl">
                <div className="p-4">
                  {/* first part */}
                  <div className="relative">
                    <img src={course.img} alt="" />
                    <div className="absolute top-3 right-3 bg-white opacity-50 rounded-lg">
                      <h4 className="text-primary font-bold p-2">
                        {course.subtitle}
                      </h4>
                    </div>
                  </div>
    
                  {/* second part */}
                  <div className="flex justify-between justify-center items-center py-4">
                    <div>
                      <h3 className="text-neutral font-bold text-xl">{course.name}</h3>
                    </div>
                    <div className="flex text-yellow-500">
                      <AiFillStar className="text-xl"/>
                      <AiFillStar className="text-xl"/>
                      <AiFillStar className="text-xl"/>
                      <AiFillStar className="text-xl"/>
                      <AiFillStar className="text-xl"/>
                    </div>
                  </div>
    
                  {/* third part */}
                  <div className="flex justify-between justify-center items-center">
                    <div>
                      <p className="text-primary font-bold text-xl">{course.price}</p>
                    </div>
    
                    <div>
                      <button className="bg-primary rounded-full px-4 py-1 md:py-1">
                        <a className="text-white font-bold text-xs md:text-sm">
                          Book Now
                        </a>
                      </button>
                    </div>
                  </div>
    
                  {/* fourth part */}
                  <div className="flex items-center gap-2 py-4">
                    <div className="border rounded-full bg-blue-100">
                      <img src={best} alt="" className="p-2"/>
                    </div>
                    <div>
                      <p className="text-primary font-xl">Best Seller</p>
                    </div>
                  </div>
                </div>
              </div>)
            }

        </div>
      </div>
    </div>
  );
};

export default OnlineCourses;
