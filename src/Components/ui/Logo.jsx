import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-1 sm:gap-2 lg:gap-3">
      <img src={logo} alt="" className="sm:w-12 w-10" />
      <h3 className="sm:text-2xl text-xl font-light">Tara Sakhi Studios</h3>
    </Link>
  );
}

export default Logo;
