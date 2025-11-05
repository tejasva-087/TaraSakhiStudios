import { motion } from "framer-motion";

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function CollabsDetails({ collabDetails, image, imageAlt }) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src={image}
        alt={imageAlt}
        className="w-full h-full max-h-[80vh] object-cover rounded-3xl sm:col-span-2 md:row-span-2"
        variants={itemVariants}
      />

      {collabDetails.map((collab, i) => (
        <motion.div
          key={i}
          className="space-y-2 w-full"
          variants={itemVariants}
        >
          <h4 className="text-zinc-50 text-lg">{collab.title}</h4>
          <p className="text-zinc-400 text-lg">{collab.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default CollabsDetails;
