import React from "react";
import MainSection from "./MainSection";
import LastSection from "../Main/LastSection";
import GetNavbar from "./GetNavbar";
const GetStarted = () => {
  return (
    <div>
      <GetNavbar />
      <MainSection />
      <LastSection />
    </div>
  );
};

export default GetStarted;
