import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";
import ScrollToHash from "../components/ScrollToHash";
import ScrollToTop from "../components/ScrollToTop";

function MainPageLayout() {
  return (
    <>
      <ScrollToTop />
      <ScrollToHash />
      <Navigation />
      <Outlet />
    </>
  );
}

export default MainPageLayout;
