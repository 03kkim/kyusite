// import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";

import kyusiteThumb from "../resources/kyusite.png";
import microThumb from "../resources/micro.png";
import polyrthmThumb from "../resources/polyrthm.png";
import rustseagullThumb from "../resources/rustseagull.jpg";

import Header from "../components/Header";

export default function Dev() {
  return (
    <div className="bg h-full">
      <Header />
      <main className="main">
        <div className="text-[28px] sm:text-[32px] md:text-[40px] text-center ">
          Coding Projects
        </div>
        <div className="text-[28px] text-red-600 sm:h-0 visible sm:invisible text-center">
          <b>Please turn your phone to landscape to view this page</b>
        </div>
        <div className="text-[20px] sm:text-[22px] md:text-[24px] text-center 2xl:px-44">
          I&apos;ve learned C++, Kotlin, and Rust for classes, but my personal
          favorite is JS/TS!
        </div>
        <div className="py-10 text-[32px] text-center devbreak:text-left">
          Works in Progress
        </div>
        <div className="grid grid-rows-1 grid-cols-1 devbreak:grid-rows-1 devbreak:grid-cols-2 justify-items-center">
          <div>
            <a
              target="_blank"
              href="https://github.com/03kkim/spotify-capsule"
              rel="noreferrer"
            >
              <Image
                className="drop-shadow-lg hover:drop-shadow-2xl cursor-pointer transition duration-100"
                src={kyusiteThumb}
                width={565}
                alt="kyusite thumbnail"
                style={{ border: "2px solid #999999", borderRadius: "2px" }}
              />
            </a>
            <div className="text-[24px] w-[565px]">
              <b>03kkim/kyusite</b> - This website. I made it a goal to use
              Figma for mockups, and it definitely helped make it look neater
              than my usual apps.
              <br />
              <i className="text-[18px]">NextJS, TailwindCSS</i>
            </div>
          </div>
        </div>
        <div className="py-10 text-[32px] text-center devbreak:text-left">
          2023
        </div>
        <div className="grid grid-rows-1 grid-cols-1 devbreak:grid-rows-1 devbreak:grid-cols-2 justify-items-center">
          <div className="pb-10 devbreak:p-0">
            <a
              target="_blank"
              href="https://github.com/03kkim/micro"
              rel="noreferrer"
            >
              <Image
                className="drop-shadow-lg hover:drop-shadow-2xl cursor-pointer transition duration-100"
                src={microThumb}
                width={565}
                alt="encapsulate thumbnail"
                style={{ border: "2px solid #999999", borderRadius: "2px" }}
              />
            </a>
            <div className="text-[24px] w-[565px]">
              <b>03kkim/micro</b> - A microrhythm practice tool. Similar to a
              metronome but different in that the top number represents the
              number of subdivisions in a constant beat, rather than the number
              of beats.
              <br />
              <i className="text-[18px]">Svelte, TailwindCSS, p5.js, ToneJS</i>
            </div>
          </div>
        </div>
        <div className="py-10 text-[32px] text-center devbreak:text-left">
          2022
        </div>
        <div className="grid grid-rows-2 grid-cols-1 devbreak:grid-rows-1 devbreak:grid-cols-2 justify-items-center">
          <div className="pb-10 devbreak:p-0">
            <a
              target="_blank"
              href="https://github.com/03kkim/polyrthm"
              rel="noreferrer"
            >
              <Image
                className="drop-shadow-lg hover:drop-shadow-2xl cursor-pointer transition duration-100"
                src={polyrthmThumb}
                width={565}
                alt="polyrthm thumbnail"
                style={{ border: "2px solid #999999", borderRadius: "2px" }}
              />
            </a>
            <div className="text-[24px] w-[565px]">
              <b>03kkim/polyrthm</b> - A polyrhythm generator. Polyrhythms are
              two or more rhythms being played at the same time with different
              frequencies. While they sound cool, they&apos;re notoriously
              difficult to play, so I made this to help myself (and others)
              practice! <br />
              <i className="text-[18px]">ReactJS, BulmaCSS, Tone.js</i>
            </div>
          </div>

          <div>
            <a
              target="_blank"
              href="https://github.com/03kkim/rustseagull"
              rel="noreferrer"
            >
              <Image
                className="drop-shadow-lg hover:drop-shadow-2xl cursor-pointer transition duration-100"
                src={rustseagullThumb}
                width={565}
                // height={353}
                alt="rustseagull thumbnail"
                style={{ border: "2px solid #999999", borderRadius: "2px" }}
              />
            </a>
            <div className="text-[24px] w-[565px]">
              <b>03kkim/rustseagull </b> - A Conway&apos;s Game of Life
              implementation in Rust, which also generates sounds based on the
              board state! A collaboration project with Lily Zhang and Abena
              Laast.
              <br />
              <i className="text-[18px]">Winit, Pixels, Rodio </i>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
