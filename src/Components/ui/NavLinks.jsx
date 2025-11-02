import { Link } from "react-router-dom";

function NavLinks({ handleClick }) {
  return (
    <ul
      className={`flex flex-col items-center justify-center gap-8 h-full lg:flex-row lg:gap-12`}
    >
      <li className="">
        <Link
          to="/about"
          className="font-medium border-b-2 border-transparent text-zinc-700 hover:border-zinc-800 transition-all duration-300 lg:text-zinc-50"
          onClick={handleClick}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/Work"
          className="font-medium border-b-2 border-transparent text-zinc-700 hover:border-zinc-800 transition-all duration-300 lg:text-zinc-50"
          onClick={handleClick}
        >
          Work
        </Link>
      </li>

      <li>
        <Link
          to="/collabs"
          className="font-medium border-b-2 border-transparent text-zinc-700 hover:border-zinc-800 transition-all duration-300 lg:text-zinc-50"
          onClick={handleClick}
        >
          Collabs
        </Link>
      </li>

      <li>
        <Link
          to="/News"
          className="font-medium border-b-2 border-transparent text-zinc-700 hover:border-zinc-800 transition-all duration-300 lg:text-zinc-50"
          onClick={handleClick}
        >
          News
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks;
