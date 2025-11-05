import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

function CollabsLink({ image, to, title, description }) {
  return (
    <Link
      to={to}
      className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-12 border-b border-t border-zinc-500 px-6 py-4 group hover:bg-zinc-800 transition-all duration-300"
    >
      <img
        src={image}
        alt="Craftsmen working on a pot"
        className="w-full rounded-3xl max-h-48 object-cover md:w-64 md:h-auto"
      />
      <div className="grid grid-cols-[auto_auto] lg:grid-cols-[150px_1fr_auto] sm:grid-cols-[1fr_auto] md:gap-6 lg:gap-12 w-full">
        <h3 className="text-xl uppercase">{title}</h3>
        <p className="sm:row-2 lg:row-1 lg:col-2 w-full text-zinc-300 group-hover:text-zinc-50 transition-all duration-300 hidden md:block">
          {description}
        </p>
        <span className="text-xl bg-zinc-50 text-zinc-800 h-fit p-1 rounded-full transition-all duration-300 w-fit justify-self-end">
          <ArrowUpRightIcon />
        </span>
      </div>
    </Link>
  );
}

export default CollabsLink;
