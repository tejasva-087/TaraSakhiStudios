import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img src={logo} alt="" className="w-12" />
      <h3 className="text-2xl font-light">Tara Sakhi Studios</h3>
    </Link>
  );
}

export default Logo;
