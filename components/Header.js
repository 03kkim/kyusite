import React from "react";
// import { motion } from "framer-motion";
import Link from "next/link";

function Header() {
  let initial = { x: 300, opacity: 0 };
  let animate = { x: 0, opacity: 1 };
  let exit = { x: 300, opacity: 0 };
  let transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };
  return (
    <div className="flow-root">
      <div className="float-left">
        {/* <motion.div
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
        > */}
        <Link href="/">
          <h1 className="text-[64px] hover:text-white cursor-pointer">
            Kyu Hong Kim
          </h1>
        </Link>
        {/* </motion.div> */}
      </div>
      <div className="space-x-10 text-[40px] float-right">
        <Link href="/dev">
          <h2 className="inline-block hover:text-white cursor-pointer">Dev</h2>
        </Link>
        <Link href="/music">
          <h2 className="inline-block hover:text-white cursor-pointer">
            Music
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
