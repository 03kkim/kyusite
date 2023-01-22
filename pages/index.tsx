import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import profilePic from "../resources/pfp.jpeg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg flex flex-col justify-between h-screen">
      <Header />
      <div className="m-auto">
        <div className="grid grid-cols-1 grid-rows-2 gap-4 justify-items-center">
          <Image
            className="drop-shadow-lg clip-circle justify-center"
            src={profilePic}
            // width={565}
            height={300}
            alt="kyusite thumbnail"
          />
          <div className="text-[32px] w-[750px] text-center">
            Hi, I’m Kyu! I’m a web developer, music producer, and student at
            UIUC majoring in CS + Music. Feel free to check out my work using
            the links above!
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
