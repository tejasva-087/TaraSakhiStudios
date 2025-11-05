import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const infoBlockVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const formBlockVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const detailItemVariants = {
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

function ContactSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="md:pt-24 pt-12 sm:px-8" id="contact-us">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="text-xl sm:text-3xl font-normal uppercase text-center mb-4 md:mb-8"
      >
        contact us
      </motion.h2>

      <motion.div
        className="md:grid lg:grid-cols-[0.5fr_1fr] grid-cols-[1fr_1fr] lg:gap-4 gap-2 content-center"
        variants={contentContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="mb-6 space-y-4 p-6 self-center"
          variants={infoBlockVariants}
        >
          <motion.p
            variants={detailItemVariants}
            className="text-base mb-2 text-zinc-300"
          >
            We'd love to hear about your project. Please get in touch to discuss
            how we can help transform your space.
          </motion.p>

          <motion.div variants={detailItemVariants}>
            <p className="text-zinc-400">Email</p>
            <a href="mailto:info@tsakhi.com" className="text-zinc-50">
              info@tsakhi.com
            </a>
          </motion.div>

          <motion.div variants={detailItemVariants}>
            <p className="text-zinc-400">Instagram</p>
            <a
              href="https://www.instagram.com/tsakhistudio/"
              target="_blank"
              className="text-zinc-50"
            >
              @tsakhistudio
            </a>
          </motion.div>

          <motion.div variants={detailItemVariants}>
            <p className="text-zinc-400">Studio</p>
            <p className="text-zinc-50">
              123 Design Street
              <br /> New York, NY 10001
              <br /> United States
            </p>
          </motion.div>
        </motion.div>

        <motion.form
          className="bg-zinc-800 p-8 rounded-3xl"
          variants={formBlockVariants}
        >
          <div className="space-y-3 mb-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-zinc-400 text-sm">
                Full name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name..."
                className="border border-zinc-400 px-4 py-2 rounded-xl focus:outline-0 focus:bg-zinc-900 bg-zinc-800 placeholder:text-sm "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-zinc-400 text-sm">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email address..."
                className="border border-zinc-400 px-4 py-2 rounded-xl focus:outline-0 focus:bg-zinc-900 bg-zinc-800 placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-zinc-400 text-sm">
                Message
              </label>

              <textarea
                id="message"
                className="border border-zinc-400 px-4 py-2 rounded-xl focus:outline-0 focus:bg-zinc-900 bg-zinc-800 placeholder:text-sm"
                placeholder="Enter your message..."
                rows={4}
              ></textarea>
            </div>
          </div>
          <motion.button
            // Animate button independently for a slight final pop
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.0 }}
            type="submit"
            className="bg-zinc-50 text-zinc-800 px-4 py-2 rounded-full font-normal"
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default ContactSection;
