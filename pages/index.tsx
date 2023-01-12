import { motion } from "framer-motion";
import Float from "../components/Float";
import TopbarComponent from "../components/TopbarComponent";
import useWindowSize from "../hooks/useWindowSize";
import { useEffect } from "react";

export default function Home() {
  const size = useWindowSize();
  let size2 = `absolute right-[${size.width - 900}px] top-[200px]`;

  useEffect(() => {
    size2 = `absolute right-[${size.width - 900}px] top-[200px]`;
  }, [size]);

  console.log(size);

  return (
    <div className="relative font-open-sans font-light bg-gradient-to-b from-background to-white h-screen">
      <div className="absolute m-auto left-0 right-0 flex justify-center items-center h-full">
        <h1 className="text-6xl">Kyu Hong Kim</h1>
      </div>
      <div className="absolute left-[-600px] top-[200px]">
        <Float offset={0}>
          <h2 className="hover:text-white cursor-pointer text-4xl">About</h2>
        </Float>
      </div>
      <div className={size2}>
        <Float offset={1}>
          <h2 className="hover:text-white cursor-pointer text-4xl">Dev</h2>
        </Float>
      </div>
      <div className="absolute left-[700px] top-[200px]">
        <Float offset={2}>
          <h2 className="hover:text-white cursor-pointer text-4xl">Music</h2>
        </Float>
      </div>
      <div className="absolute left-[600px] top-[200px]">
        <Float offset={3}>
          <h2 className="hover:text-white cursor-pointer text-4xl">Contact</h2>
        </Float>
      </div>
    </div>
  );
}
