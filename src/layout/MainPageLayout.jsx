import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";

function MainPageLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default MainPageLayout;
