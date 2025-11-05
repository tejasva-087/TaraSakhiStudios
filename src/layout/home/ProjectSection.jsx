import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import ProjectDisplay from "../../components/ProjectDisplay";

import project1 from "../../assets/images/WorkImages/sax/sax6.jpg";
import project2 from "../../assets/images/WorkImages/adar/adar3.jpg";
import project3 from "../../assets/images/WorkImages/decks/decks3.jpg";
import project4 from "../../assets/images/WorkImages/jurat/jurat9.jpg";
import project5 from "../../assets/images/WorkImages/o1ne/o1ne3.jpg";
import project6 from "../../assets/images/WorkImages/skybar/skybar1.jpg";
import SectionHeader from "../../components/sectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function ProjectSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="md:pt-24 pt-12">
      <SectionHeader
        lines={["CURATED PORTFOLIO OF", "DISTINCTIVE DESIGN PROJECTS"]}
        description="Showcasing our most distinguished projects, a testament to precision,
          creativity, and lasting value."
        linkPlaceHolder="View all"
        linkTo="/work"
      />

      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:grid gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <ProjectDisplay
            image={project1}
            title="Saxx"
            className="inline-block"
            id="sax-jazz-restaurant-&-lounge"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ProjectDisplay
            image={project2}
            title="Adar"
            className="inline-block"
            id="adar-restaurant-&-epicerie-fine"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ProjectDisplay
            image={project3}
            title="Decks"
            className="hidden sm:inline-block"
            id="decks-on-the-beach-transportable-disco-bar"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ProjectDisplay
            image={project4}
            title="murano"
            className="hidden sm:inline-block"
            id="murano-sculptural-vessels"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ProjectDisplay
            image={project5}
            title="O1ne"
            className="hidden md:inline-block"
            id="o1ne-nightclub-&-venue"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ProjectDisplay
            image={project6}
            title="Skybar"
            className="hidden md:inline-block"
            id="skybar-nightclub-&-bar-rooftop"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ProjectSection;
