import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import SectionHeader from "../../components/sectionHeader";
import CollabsLink from "../../components/CollabsLink";
import craftsMen from "../../assets/images/collabs/craftsmen.jpg";
import gallerists from "../../assets/images/collabs/gallerists.jpg";
import director from "../../assets/images/collabs/directors.jpg";
import musicians from "../../assets/images/collabs/musicians.jpg";
import performers from "../../assets/images/collabs/performers.jpg";
import photographers from "../../assets/images/collabs/photographers.jpg";
import fashionDesigners from "../../assets/images/collabs/fashionDesigners.jpg";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
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

function CollabsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section ref={ref} className="md:pt-24 pt-12">
      <SectionHeader
        lines={["Crafted with precision,", "built with trust"]}
        description="We design enduring buildings that blend simplicity, proportion, and
        natural materials, creating spaces both functional."
        linkPlaceHolder="View collaborations"
        linkTo="/collabs"
      />

      <motion.ul
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mb-4 border-b border-zinc-500"
      >
        <motion.li variants={item}>
          <CollabsLink
            image={craftsMen}
            to="/collabs#craftsmen"
            title="Craftsmen"
            description="The craftsmanship emphasizes various cultural heritage; a correlation between the Oriental and Occidental traditions combined into one harmonious and complementary entity, clearly identifying their similarities but also highlighting their differences."
          />
        </motion.li>
        <motion.li variants={item}>
          <CollabsLink
            image={gallerists}
            to="/collabs#gallerists"
            title="gallerists"
            description="The exhibitions enrich the diverse works showcased locally and internationally in cultural institutions such as galleries, platforms, fairs and non-profit organizations related to architecture, design, art, film and fashion."
          />
        </motion.li>
        <motion.li variants={item}>
          <CollabsLink
            image={director}
            to="/collabs#directors"
            title="directors"
            description="Tangents is a series of short-films produced by the studio in collaboration with different directors to immerse the viewer into their projects. It is born from the two sister's eagerness to revisit each space they designed through a fantasy, intersecting architecture with film, fashion and music."
          />
        </motion.li>
        <motion.li variants={item}>
          <CollabsLink
            image={musicians}
            to="/collabs#musicians"
            title="Musicians"
            description="Tangents is a series of short-films produced by the studio in collaboration with different musicians to transport the viewer into their projects. It is born from the two sister's eagerness to revisit each space they designed through a fantasy, intersecting architecture with film, music and fashion. Each musician translates his/her own perception of the film into a musical journey."
          />
        </motion.li>
        <motion.li variants={item}>
          <CollabsLink
            image={performers}
            to="/collabs#performers"
            title="performers"
            description="The studio collaborates with performing artists to revisit each space they designed and translate his/her own perception of the work into an extension of their body, movements and emotions."
          />
        </motion.li>
        <motion.li variants={item}>
          <CollabsLink
            image={fashionDesigners}
            to="/collabs#fashion-designer"
            title="fashion designers"
            description="Tangents is a series of short-films produced by the studio in collaboration with different fashion designers to immerse the viewer into their projects. It is born from the two sister's eagerness to revisit each space they designed through a fantasy, intersecting architecture with film, fashion and music. Each fashion designer translates his/her own perception of the film into a statement garment."
          />
        </motion.li>
        <motion.li variants={item}>
          <CollabsLink
            image={photographers}
            to="/collabs#photographers"
            title="Photographer"
            description="Each photographer translates his/her own perception of the projects into stills and memories."
          />
        </motion.li>
      </motion.ul>
      <p className="text-zinc-400 text-center w-full"></p>
    </section>
  );
}

export default CollabsSection;
