import React from "react";
import mission_Img from "../../../Assets/About/Our_Mission/ourMissionImg.png";

const OurMission = () => {
  return (
    <div className="hero w-11/12 md:w-10/12 mx-auto pt-10">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:gap-28">

        <div className="relative">
          <img src={mission_Img} className="max-w-sm rounded-lg w-full" />
          <div className="bg-white w-3/6 rounded-lg absolute -bottom-2 -left-2 md:bottom-10 md:-left-20 lg:-left-24">
            <h3 className="text-neutral text-base font-bold text-center pt-3">MST: Alonker lon</h3>
            <p className="text-primary text-normal text-center pb-3">CEO,Education LTD</p>
          </div>
        </div>

        <div className="lg:w-6/12">
          <small className="text-primary font-bold pb-2">Our Mission</small>
          <h1 className="text-4xl text-neutral font-bold">
            Build Better For Best Economy
          </h1>
          <p className="py-6 text-justify">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roo piece of classical Latin literature from 45 BC, making it
            over 2000 years old. Ri chard McClintock, a Lati.Contrary to popular
            belief, Lorem Ipsum is not simply piece of classical Latin <br />
            <br />
            literature from 45 BC, making it over 2000 years old. Ri chard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            l ooked up one of the more obscure Latin words, consectetur, from a
            Lorem Ips um passage, and going through the cites of the word in
            classical literature, di scovered the undoubtable source
          </p>
          <div className="text-center lg:text-left pb-4 lg:pb-0">
            <button className="bg-primary rounded-full px-7 py-1 md:py-2">
              <a className="text-white text-base font-bold text-xs md:text-base">
                Join Our Team
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
