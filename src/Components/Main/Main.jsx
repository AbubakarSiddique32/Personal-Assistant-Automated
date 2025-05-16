import React from "react";
import HeroSection from "./HeroSection";
import IphoneSection from "./IphoneSection";
import Tabs from "./Tabs";
import VideoSection from "./VideoSection";
import PricingPlans from "./PricingPlans";

const Main = () => {
  return (
    <div>
      <HeroSection />
      <IphoneSection />
      {/* <Tabs /> */}
      <VideoSection />
      <PricingPlans />
    </div>
  );
};

export default Main;
