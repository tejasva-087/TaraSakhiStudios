import { Link } from "react-router-dom";
import ProjectDisplay from "../../components/ProjectDisplay";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

import project1 from "../../assets/images/WorkImages/sax/sax6.jpg";
import project2 from "../../assets/images/WorkImages/adar/adar3.jpg";
import project3 from "../../assets/images/WorkImages/decks/decks3.jpg";
import project4 from "../../assets/images/WorkImages/jurat/jurat9.jpg";
import project5 from "../../assets/images/WorkImages/o1ne/o1ne3.jpg";
import project6 from "../../assets/images/WorkImages/skybar/skybar1.jpg";
import SectionHeader from "../../components/sectionHeader";

function ProjectSection() {
  return (
    <section className="md:mt-24 mt-12">
      <SectionHeader
        lines={["CURATED PORTFOLIO OF", "DISTINCTIVE DESIGN PROJECTS"]}
        description="Showcasing our most distinguished projects, a testament to precision,
          creativity, and lasting value."
        linkPlaceHolder="View all"
        linkTo="/work"
      />
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
    </section>
  );
}

export default ProjectSection;
