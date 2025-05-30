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
import Footer from "../Main/Footer";
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
        <Route
          path="notification"
          element={
            <>
              <DailyNotification />
              <Footer />
            </>
          }
        />
        <Route
          path="weather"
          element={
            <>
              <WeatherUpdate />
              <Footer />
            </>
          }
        />
        <Route
          path="motivation"
          element={
            <>
              <MotivationPage />
              <Footer />
            </>
          }
        />
        <Route
          path="event"
          element={
            <>
              <Events />
              <Footer />
            </>
          }
        />
        <Route
          path="health"
          element={
            <>
              <HealthCare />
              <Footer />
            </>
          }
        />
        <Route
          path="assistent"
          element={
            <>
              <Assistent />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default GetStarted;
