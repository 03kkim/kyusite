import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import profilePic from "../resources/pfp.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg justify-between">
      <Header />

      <div className="flex flex-col items-center">
        <Image
          className=" justify-content-center mt-10 mx-5 clip-circle 
                      w-[320px] h-[320px]
                      md:w-[360px] md:h-[360px]
                      xl:w-[400px] xl:h-[400px]"
          src={profilePic}
          alt="kyusite profile picture"
        />
        <div
          className="w-[400px] sm:w-[500px] md:w-[750px] 
                    text-[24px] md:text-[32px] lg:text-[38px] 
                    text-center"
        >
          Hi, I’m Kyu! I’m a web developer, music producer, and student at UIUC
          majoring in CS + Music. Feel free to check out my work using the links
          above!
        </div>
      </div>
    </div>
  );
}
