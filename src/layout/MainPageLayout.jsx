import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";
import ScrollToHash from "../components/ScrollToHash";

function MainPageLayout() {
  return (
    <>
      <ScrollToHash />
      <Navigation />
      <Outlet />
    </>
  );
}

export default MainPageLayout;
