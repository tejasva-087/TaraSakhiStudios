import { Link, NavLink } from "react-router-dom";

import Logo from "./ui/Logo";

function Navigation() {
  return (
    <nav className="absolute z-10 flex items-center justify-between w-full px-6 py-4 bg-white/20 bg-opacity-70 backdrop-blur-md shadow-md">
      <Link to="/">
        <Logo />
      </Link>
      <ul className="flex items-center gap-6 tracking-wide text-zinc-50 uppercase">
        <li>
          <NavLink to="/work">Work</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">News</NavLink>
        </li>
        <li>
          <NavLink to="/collabs">Collabs</NavLink>
        </li>
        <li>
          <NavLink to="/press">Press</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
