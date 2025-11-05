import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import founder from "../../assets/images/founder.jpg";

const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const imageVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const textContainerVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const paragraphVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function AboutSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="md:pt-24 pt-12" id="about">
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="text-xl sm:text-3xl font-normal uppercase mb-6 md:mb-12 text-center"
      >
        Founder & Principal Designer
      </motion.h3>

      <motion.div
        className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center"
        variants={sectionContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.img
          src={founder}
          alt="Tara Sakhi's photo"
          className="w-full h-full md:w-1/2 lg:w-3/8 object-cover rounded-3xl mb-4"
          variants={imageVariants}
        />

        <motion.div
          className="space-y-2 w-full lg:w-1/3"
          variants={textContainerVariants}
        >
          <motion.h2
            variants={paragraphVariants}
            className="text-2xl uppercase"
          >
            Tara sakhi
          </motion.h2>
          <motion.p
            variants={paragraphVariants}
            className="text-base text-zinc-300"
          >
            With over fifteen years of experience in interior design, I founded
            Tara Sakhi Studio with a vision to create spaces that tell stories,
            evoke emotions, and enhance the way we live.
          </motion.p>
          <motion.p
            variants={paragraphVariants}
            className="text-base text-zinc-300"
          >
            My approach combines a deep respect for architectural integrity with
            a passion for unexpected details. Each project is a unique
            collaboration between client, space, and context.
          </motion.p>
          <motion.p
            variants={paragraphVariants}
            className="text-base text-zinc-300"
          >
            Whether reimagining a historic residence or crafting a contemporary
            commercial space, my team and I bring a thoughtful, detail-oriented
            approach to every project we undertake.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
