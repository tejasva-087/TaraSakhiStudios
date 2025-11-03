import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

function CollabsLink({ image, to, title, description }) {
  return (
    <Link
      to={to}
      className="flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-12 border-b border-t border-zinc-500 px-2 py-4 group"
    >
      <img
        src={image}
        alt="Craftsmen working on a pot"
        className="w-full rounded-3xl max-h-48 object-cover md:w-64 md:h-auto"
      />
      <div className="flex justify-between gap-2 md:gap-6 lg:gap-12">
        <h3 className="text-xl uppercase">{title}</h3>
        <p className="line-clamp-4 text-zinc-300 group-hover:text-zinc-50 transition-all duration-300 hidden md:block ">
          {description}
        </p>
        <span className="text-xl bg-zinc-50 text-zinc-800 h-fit p-1 rounded-full transition-all duration-300">
          <ArrowUpRightIcon />
        </span>
      </div>
    </Link>
  );
}

export default CollabsLink;
