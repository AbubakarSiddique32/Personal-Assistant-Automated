import React from "react";
import { Routes, Route } from "react-router-dom";
import MainSection from "./MainSection";
import LastSection from "../Main/LastSection";
import GetNavbar from "./GetNavbar";
import DailyNotification from "./Pages/Notification";
import WeatherUpdate from "./Pages/Weather";
import MotivationPage from "./Pages/Motivational";
import Events from "./Pages/Events";
import HealthCare from "./Pages/HealthCare";
import Assistent from "./Pages/Assistent";
const GetStarted = () => {
  return (
    <div>
      <GetNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainSection />
              <LastSection />
            </>
          }
        />
        <Route path="notification" element={<DailyNotification />} />
        <Route path="weather" element={<WeatherUpdate />} />
        <Route path="motivation" element={<MotivationPage />} />
        <Route path="event" element={<Events />} />
        <Route path="health" element={<HealthCare />} />
        <Route path="assistent" element={<Assistent />} />
      </Routes>
    </div>
  );
};

export default GetStarted;
