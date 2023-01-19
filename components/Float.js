import { motion } from "framer-motion";
function Float({ children, offset }) {
  let animate = {
    scale: [1, 1.2, 1],
  };
  let transition = {
    delay: offset,
    duration: 3.5,
    ease: "easeInOut",
    // times: [0, 1],
    repeat: Infinity,
    repeatDelay: 0,
  };
  return (
    <motion.div animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
}

export default Float;
