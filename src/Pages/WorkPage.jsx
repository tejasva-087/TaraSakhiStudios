import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { projectData } from "../data/data";

import ProjectDisplay from "../components/ProjectDisplay";
import SectionHeader from "../components/sectionHeader";

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

function WorkPage() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="">
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:grid gap-4 md:px-8 md:py-4 sm:px-6 sm:py-3 p-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projectData.map((project) => {
          return (
            <motion.div variants={itemVariants}>
              <ProjectDisplay
                image={project.images[0]}
                title={project.name}
                className="inline-block"
                id={project.id}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default WorkPage;
