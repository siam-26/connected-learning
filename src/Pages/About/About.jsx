import React from "react";
import AboutBanner from "./AboutBanner/AboutBanner";
import WhyUs from "./WhyUs_Section/WhyUs";
import OurMission from "./OurMission/OurMission";
import AmazingTeamSection from "./AmazingTeamSection/AmazingTeamSection";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <WhyUs />
      <OurMission />
      <AmazingTeamSection/>
    </div>
  );
};

export default About;
