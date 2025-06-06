import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AuthNavbar from "./Components/LogIn/AuthNavbar"; // <-- new import
import Main from "./Components/Main/Main";
import ForgetPassword from "./Components/LogIn/Forget";
import LogIn from "./Components/LogIn/LogIn";
import Signup from "./Components/LogIn/Signup";
import NewPassword from "./Components/LogIn/Password";
import GetStarted from "./Components/Dashboard/GetStarted";

const Layout = ({ children }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const authRoutes = ["/login", "/signup", "/forget", "/password"];
  const isAuthRoute = authRoutes.includes(pathname);
  const isGetStartedRoute = pathname.startsWith("/getstarted");

  return (
    <>
      {!isAuthRoute && !isGetStartedRoute && <Navbar />}
      {isAuthRoute && <AuthNavbar />}
      {children}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/password" element={<NewPassword />} />
          <Route path="/getstarted/*" element={<GetStarted />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
