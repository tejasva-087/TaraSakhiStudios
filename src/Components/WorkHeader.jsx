import React from "react";

function WorkHeader({ tagline, title }) {
  return (
    <section className="p-4 mt-4">
      <h1 className="text-4xl tracking-wider text-stone-50 mb-2 font-semibold">
        {tagline}
      </h1>
      <h2 className="text-xl tracking-wider text-stone-400">{title}</h2>
    </section>
  );
}

export default WorkHeader;
