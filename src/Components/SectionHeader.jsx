import { ArrowUpRightIcon } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

function SectionHeader({ lines, description, linkPlaceHolder, linkTo }) {
  return (
    <div className="sm:flex justify-between items mb-6">
      <h2 className="text-xl sm:text-3xl font-normal uppercase mb-4 sm:flex sm:flex-col">
        {lines.map((line, i) => (
          <span key={i}>{line}</span>
        ))}
      </h2>
      <div className="mb-6 sm:w-[40vw] md:w-[25vw]">
        <p className="text-sm mb-2 text-zinc-300">{description}</p>
        <Link
          to={linkTo}
          className="inline-flex items-center gap-1 uppercase text-sm border-b border-zinc-300 text-zinc-300 hover:text-zinc-50 transition-all duration-300"
        >
          {linkPlaceHolder}
          <ArrowUpRightIcon />
        </Link>
      </div>
    </div>
  );
}

export default SectionHeader;
