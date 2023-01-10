import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="font-open-sans font-light bg-gradient-to-b from-background to-white h-screen">
      <div className="flow-root">
        <div className="p-10 float-left">
          <h1 className="text-6xl">Kyu Hong Kim</h1>
        </div>
        <div className="p-10 space-x-10 text-4xl float-right">
          <h2 className="inline-block hover:text-white cursor-pointer">
            About
          </h2>
          <h2 className="inline-block hover:text-white cursor-pointer">Dev</h2>
          <h2 className="inline-block hover:text-white cursor-pointer">
            Music
          </h2>
          <h2 className="inline-block hover:text-white cursor-pointer">
            Contact
          </h2>
        </div>
      </div>
    </div>
  );
}
