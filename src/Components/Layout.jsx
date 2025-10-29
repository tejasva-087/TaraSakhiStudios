import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layput() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default Layput;
