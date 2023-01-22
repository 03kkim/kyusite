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
      <div className="md:float-left text-center">
        {/* <motion.div
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
        > */}
        <Link href="/">
          <h1 className="text-[64px] hover:scale-95 cursor-pointer transition transform duration-200 ease-in-out text-shadow">
            <div className="transition hover:text-neutral-500 transform duration-200 ease-in-out">
              Kyu Hong Kim
            </div>
          </h1>
        </Link>
        {/* </motion.div> */}
      </div>
      <div className="space-x-10 text-[40px] md:float-right text-center">
        <Link href="/dev">
          <h2 className="inline-block hover:scale-95 cursor-pointer transition transform duration-100 ease-in-out text-shadow">
            <div className="transition hover:text-neutral-500 transform duration-100 ease-in-out">
              Dev
            </div>
          </h2>
        </Link>
        <Link href="/music">
          <h2 className="inline-block hover:scale-95 cursor-pointer transition transform duration-100 ease-in-out text-shadow">
            <div className="transition hover:text-neutral-500 transform duration-100 ease-in-out">
              Music
            </div>
          </h2>
        </Link>
        <Link href="/about">
          <h2 className="inline-block hover:scale-95 cursor-pointer transition transform duration-100 ease-in-out text-shadow">
            <div className="transition hover:text-neutral-500 transform duration-100 ease-in-out">
              About
            </div>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
