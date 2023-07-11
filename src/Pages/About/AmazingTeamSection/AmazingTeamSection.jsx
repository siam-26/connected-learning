import React from "react";
import img1 from "../../../Assets/About/Amazing Team Members/img1.png";
import img2 from "../../../Assets/About/Amazing Team Members/img2.png";
import img3 from "../../../Assets/About/Amazing Team Members/img3.png";
import img4 from "../../../Assets/About/Amazing Team Members/img4.png";
import img5 from "../../../Assets/About/Amazing Team Members/img5.png";
import img6 from "../../../Assets/About/Amazing Team Members/img6.png";
import img7 from "../../../Assets/About/Amazing Team Members/img7.png";
import img8 from "../../../Assets/About/Amazing Team Members/img8.png";

const AmazingTeamSection = () => {

    const members = [
        {
            id:1,
            img:img1,
            name:"Pushpa Kanon",
            title:"CEO, derhab"
        },
        {
            id:2,
            img:img2,
            name:"Lolona khan",
            title:"UI Designer"
        },
        {
            id:3,
            img:img3,
            name:"Jahangiri khan",
            title:"UX Designer"
        },
        {
            id:4,
            img:img4,
            name:"Mukayemi sha",
            title:"Developer"
        },
        {
            id:5,
            img:img5,
            name:"Pushpa Kanon",
            title:"Photography"
        },
        {
            id:6,
            img:img6,
            name:"Lolona khan",
            title:"Graphics Designerb"
        },
        {
            id:7,
            img:img7,
            name:"Jahangiri khan",
            title:"Python Programar"
        },
        {
            id:8,
            img:img8,
            name:"Mukayemi sha",
            title:"Business Specialist"
        },
    ]
  return (
    <div className="bg-info mt-10">
      <div className="w-11/12 md:w-10/12 mx-auto py-10 lg:py-16">
        <div className="lg:w-80 mx-auto pb-8">
          <small className="text-primary flex justify-center font-bold pb-1">
            Team Member
          </small>
          <h1 className="text-4xl text-neutral text-center font-bold">
            The Amazing Team of Us
          </h1>
        </div>

        {/* team members */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-3 md:gap-y-10">

            {
                members &&
                members.map((member)=><div key={member.id} className="relative w-full mx-auto lg:mx-0">
                <img src={member.img} alt="" className="w-full rounded-2xl" />
                <div className="bg-primary absolute bottom-0 w-full rounded-b-2xl">
                  <h3 className="text-warning md:text-xl font-bold text-center pt-2 md:pt-8">
                  {member.name}
                  </h3>
                  <p className="flex justify-center text-base text-success text-center pb-2 md:pb-8">
                  {member.title}
                  </p>
                </div>
              </div>)
            }

        </div>
      </div>
    </div>
  );
};

export default AmazingTeamSection;
