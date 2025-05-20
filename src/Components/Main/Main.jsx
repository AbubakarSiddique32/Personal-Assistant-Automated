import React from "react";
import HeroSection from "./HeroSection";
import IphoneSection from "./IphoneSection";
import Tabs from "./Tabs";
import VideoSection from "./VideoSection";
import PricingPlans from "./PricingPlans";
import Testimonials from "./Testimonials";
import Chatbot from "./Chatbot";
import FAQ from "./FAQ";
import OverLap from "./Overlap";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <HeroSection />
      <IphoneSection />
      {/* <Tabs /> */}
      <VideoSection />
      <PricingPlans />
      <Testimonials />
      <Chatbot />
      <FAQ />
      <OverLap />
      <Footer />
    </div>
  );
};

export default Main;
