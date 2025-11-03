import { Link } from "react-router-dom";
import ProjectDisplay from "../../components/ProjectDisplay";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

import project1 from "../../assets/images/WorkImages/sax/sax6.jpg";
import project2 from "../../assets/images/WorkImages/adar/adar3.jpg";
import project3 from "../../assets/images/WorkImages/decks/decks3.jpg";
import project4 from "../../assets/images/WorkImages/jurat/jurat9.jpg";
import project5 from "../../assets/images/WorkImages/o1ne/o1ne3.jpg";
import project6 from "../../assets/images/WorkImages/skybar/skybar1.jpg";

function ProjectSection() {
  return (
    <div className="md:mt-24 mt-12">
      <div className="sm:flex justify-between items mb-6">
        <h2 className="text-xl sm:text-3xl font-normal uppercase mb-4 sm:flex sm:flex-col">
          <span>CURATED PORTFOLIO OF</span>
          <span>DISTINCTIVE DESIGN PROJECTS</span>
        </h2>
        <div className="mb-6 sm:w-[40vw] md:w-[25vw]">
          <p className="text-sm mb-2 text-zinc-300">
            Showcasing our most distinguished projects, a testament to
            precision, creativity, and lasting value.
          </p>
          <Link
            to="/work"
            className="inline-flex items-center gap-1 uppercase text-sm border-b border-zinc-300 text-zinc-300 hover:text-zinc-50 transition-all duration-300"
          >
            View all
            <ArrowUpRightIcon />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:grid gap-4">
        <ProjectDisplay
          image={project1}
          title="Saxx"
          className="inline-block"
        />
        <ProjectDisplay
          image={project2}
          title="Adar"
          className="inline-block"
        />
        <ProjectDisplay
          image={project3}
          title="Decks"
          className="hidden sm:inline-block"
        />
        <ProjectDisplay
          image={project4}
          title="Jurat"
          className="hidden sm:inline-block"
        />
        <ProjectDisplay
          image={project5}
          title="O1ne"
          className="hidden md:inline-block"
        />
        <ProjectDisplay
          image={project6}
          title="Skybar"
          className="hidden md:inline-block"
        />
      </div>
    </div>
  );
}

export default ProjectSection;
