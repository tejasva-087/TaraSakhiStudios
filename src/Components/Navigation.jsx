import { Link } from "react-router-dom";
import Logo from "./ui/Logo";

function Navigation() {
  return (
    <header className="p-4 flex items-center justify-between border-b border-stone-700">
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <ul className="flex items-center gap-12 ">
          <li className="tracking-wider text-stone-300 hover:text-stone-50">
            <Link to="/work">Works</Link>
          </li>
          <li className="tracking-wider text-stone-300 hover:text-stone-50">
            <Link to="/about">About</Link>
          </li>
          <li className="tracking-wider text-stone-300 hover:text-stone-50">
            <Link to="/news">News</Link>
          </li>
          <li className="tracking-wider text-stone-300 hover:text-stone-50">
            <Link to="/collabs">Collabs</Link>
          </li>
          <li className="tracking-wider text-stone-300 hover:text-stone-50">
            <Link to="/press">Press</Link>
          </li>
          <li className="tracking-wider text-stone-300 hover:text-stone-50">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
