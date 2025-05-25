import React from "react";
import HeroSection from "./HeroSection";
import IphoneSection from "./IphoneSection";
import Tabs from "./Tabs";
import VideoSection from "./VideoSection";
import PricingPlans from "./PricingPlans";
import Testimonials from "./Testimonials";
import Chatbot from "./Chatbot";
import LastSection from "./LastSection";

const Main = () => {
  return (
    <div>
      <HeroSection />
      <IphoneSection />
      <Tabs />
      <VideoSection />
      <PricingPlans />
      <Testimonials />
      <Chatbot />
      <LastSection />
    </div>
  );
};

export default Main;
