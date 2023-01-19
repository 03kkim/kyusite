import { motion } from "framer-motion";

function TopbarComponent({ children }) {
  return (
    <motion.div
    //   initial={{ x: x, y: y, opacity: 1 }}
    // animate={{ x: 0, opacity: 1 }}
    // exit={{ x: 300, opacity: 0 }}
    // transition={{
    //   type: "spring",
    //   stiffness: 260,
    //   damping: 20,
    // }}
    >
      {children}
    </motion.div>
  );
}

export default TopbarComponent;
