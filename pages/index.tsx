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

      <div className="grid grid-cols-1 grid-rows-2 gap-0 place-content-center justify-items-center h-screen">
        {/* <div className="drop-shadow-2xl"> */}
        {/* <Image
          className="invisible xs:visible justify-center mt-10 px-5 clip-circle"
          src={profilePic}
          // width={565}
          height={380}
          alt="kyusite thumbnail"
        /> */}
        <Image
          className="visible xs:invisible  justify-content-center mt-10 px-5 clip-circle"
          src={profilePic}
          // width={565}
          height={360}
          alt="kyusite thumbnail"
        />
        {/* </div> */}
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

      {/* <Footer /> */}
    </div>
  );
}
