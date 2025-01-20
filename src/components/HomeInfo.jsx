import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium text-center sm:text-xl">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow icon" className="object-contain w-4 h-4" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="px-8 py-4 mx-5 text-center text-white sm:text-xl sm:leading-snug neo-brutalism-blue">
      Hi, I'm <span className="font-semibold">Abhijeet</span> 👋
      <br />A Software Engineer in Bentonville, AR.
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Explored multiple projects to success over the years. Curious about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
