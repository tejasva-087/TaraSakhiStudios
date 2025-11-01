import { Link } from "react-router-dom";
import Logo from "./ui/Logo";
import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";

function Navigation() {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <header
      className="p-4 flex items-center justify-between border-b border-stone-700 overflow-hidden"
      style={{ zIndex: 9999999 }}
    >
      <Link to="/" className="">
        <Logo />
      </Link>

      <nav
        className={`opacity-0 pointer-events-none h-svh w-[80%] absolute top-0 left-0 md:h-auto md:relative md:w-auto md:pointer-events-auto md:opacity-100 transition-all duration-300 bg-zinc-50/30 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none ${
          navOpen ? "opacity-100 pointer-events-auto" : ""
        }`}
        style={{ zIndex: 9999999 }}
      >
        <ul className="flex items-center justify-center h-full gap-12 flex-col md:flex-row">
          <li className="tracking-wider text-stone-300 hover:text-stone-50">
            <Link to="/work">Works</Link>
          </li>
          <li className="tracking-wider text-stone-300 hover:text-stone-50">
            <Link to="/about">About</Link>
          </li>
          <li className="tracking-wider text-stone-300 hover:text-stone-50">
            <Link to="/collabs">Collabs</Link>
          </li>
          <li className="tracking-wider text-stone-300 hover:text-stone-50">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <button
        className={`space-y-1 md:hidden block `}
        onClick={() => setNavOpen((val) => !val)}
        style={{ zIndex: 10000 }}
      >
        {navOpen ? (
          <XIcon className="text-3xl" />
        ) : (
          <ListIcon className="text-3xl" />
        )}
      </button>
    </header>
  );
}

export default Navigation;
