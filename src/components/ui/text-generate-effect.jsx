import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const TextGenerateEffect = ({ words, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  const wordsArray = words.split(" ");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {wordsArray.map((word, idx) => (
        <motion.span key={idx} variants={child} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
