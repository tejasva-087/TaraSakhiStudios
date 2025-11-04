import { Link } from "react-router-dom";

function NavLinks({ handleClick }) {
  return (
    <ul
      className={`flex flex-col items-start pl-12 pr-28 lg:p-0 justify-center gap-4 h-full lg:flex-row lg:gap-12`}
    >
      <li className="">
        <Link
          to="/about"
          className="border-b-2 border-transparent  hover:border-zinc-50 transition-all duration-300 text-zinc-100 hover:text-zinc-50 uppercase text-2xl lg:text-sm tracking-wider font-light pb-1"
          onClick={handleClick}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/Work"
          className="border-b-2 border-transparent  hover:border-zinc-50 transition-all duration-300 text-zinc-100 hover:text-zinc-50 uppercase text-2xl lg:text-sm tracking-wider font-light pb-1"
          onClick={handleClick}
        >
          Work
        </Link>
      </li>

      <li>
        <Link
          to="/collabs"
          className="border-b-2 border-transparent  hover:border-zinc-50 transition-all duration-300 text-zinc-100 hover:text-zinc-50 uppercase text-2xl lg:text-sm tracking-wider font-light pb-1"
          onClick={handleClick}
        >
          Collabs
        </Link>
      </li>

      <li>
        <Link
          to="/#contact-us"
          className="border-b-2 border-transparent  hover:border-zinc-50 transition-all duration-300 text-zinc-100 hover:text-zinc-50 uppercase text-2xl lg:text-sm tracking-wider font-light pb-1"
          onClick={handleClick}
        >
          Contact us
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks;
