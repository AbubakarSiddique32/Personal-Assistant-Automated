import React from "react";
import HeroSection from "./HeroSection";
import IphoneSection from "./IphoneSection";
import Tabs from "./Tabs";
import VideoSection from "./VideoSection";

const Main = () => {
  return (
    <div>
      <HeroSection />
      <IphoneSection />
      {/* <Tabs /> */}
      <VideoSection />
    </div>
  );
};

export default Main;
