import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/video.css";

const Video = () => {
  
  const rightVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 1, opacity: 1, transition: { duration: 1, delay: 0.5 } },
    exit: { x: -10, opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={rightVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/c-ptvXgUfdg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Video;
