import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

function ProjectDisplay({ image, id, title, className }) {
  return (
    <Link
      to={`/work/${id}`}
      className={` relative w-full h-full rounded-3xl overflow-hidden ${className} max-h-[45vw] sm:max-h-[25vw] md:max-h-[20vw] group`}
    >
      <img
        src={image}
        alt={title}
        className="object-cover group-hover:scale-125 transition-all duration-600"
      />
      <div className="absolute inset-0 bottom-0 left-0 w-full h-full  px-8 py-6 flex items-end bg-linear-to-t from-black/60 to-black/60">
        <div className="flex items-center justify-between w-full">
          <p className="uppercase text-lg font-normal">{title}</p>
          <span className="inline-block bg-zinc-50 text-zinc-800 rounded-full p-0.5 text-xl">
            <ArrowUpRightIcon />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProjectDisplay;
