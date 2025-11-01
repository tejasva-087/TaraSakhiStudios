import { ArrowUpRightIcon } from "@phosphor-icons/react";
import data from "../data/work.json";
import { useNavigate } from "react-router-dom";

function WorksPage() {
  const navigate = useNavigate();
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {data.map((work) => (
        <section
          key={work.id}
          className="relative border rounded-2xl overflow-hidden border-zinc-500 hover:cursor-pointer w-full h-[25vh] lg:h-[30vh]"
          onClick={() => navigate(`/work/${work.id}`)}
        >
          <img
            src={work.images[0]}
            alt={`${work.title}`}
            className="w-full h-full object-cover"
          />
          <div className="bg-linear-to-b from-zinc-900/20 to-zinc-900/90 absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4">
            <h3 className="text-xl text-zinc-50 font-semibold  ">
              {work.title}
            </h3>
            <p className="text-sm text-zinc-300  ">{work.tagline}</p>
            <ArrowUpRightIcon className="absolute top-5 right-5 text-2xl text-zinc-50 " />
          </div>
        </section>
      ))}
    </main>
  );
}

export default WorksPage;
