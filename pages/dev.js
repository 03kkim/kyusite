import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import kyusiteThumb from "../resources/kyusite.png";
import encapsulateThumb from "../resources/encapsulate.png";
import polyrthmThumb from "../resources/polyrthm.png";
import rustseagullThumb from "../resources/rustseagull.jpg";

import Header from "../components/Header";

export default function Dev() {
  return (
    <div className="bg">
      <Header />
      <main className="main">
        <div className="text-[40px] text-center ">Coding Projects</div>
        <div className="text-[24px] text-center px-44">
          Although my classes have required me to learn C++, Kotlin, and Rust,
          I've mostly stuck with using JS in my passion projects.
        </div>
        <div className="py-10 text-[32px]">Works in Progress</div>
        <div className="grid grid-rows-1 grid-cols-2 justify-items-center">
          <Image
            className="drop-shadow-lg"
            src={encapsulateThumb}
            width={565}
            alt="encapsulate thumbnail"
            style={{ border: "2px solid #999999", borderRadius: "2px" }}
          />
          <Image
            className="drop-shadow-lg"
            src={kyusiteThumb}
            width={565}
            alt="kyusite thumbnail"
            style={{ border: "2px solid #999999", borderRadius: "2px" }}
          />
        </div>
        <div className="grid grid-rows-1 grid-cols-2 justify-items-center">
          <div className="text-[24px] w-[565px]">
            <b>03kkim/spotify-capsule</b> - A Spotify time capsule generator I'm
            making with Micah Casey-Fusco. Spotify actually released something
            similar (albeit not as cool 😎) after we started on the project!
            <br />
            <i className="text-[18px]">
              NextJS, NextAuth, MaterialUI, Spotify API
            </i>
          </div>
          <div className="text-[24px] w-[565px]">
            <b>03kkim/kyusite</b> - This website. I made it a goal to use Figma
            for mockups, and it definitely helped make it look neater than my
            usual apps.
            <br />
            <i className="text-[18px]">NextJS, TailwindCSS, Framer Motion</i>
          </div>
        </div>
        <div className="py-10 text-[32px]">2022</div>
        <div className="grid grid-rows-1 grid-cols-2 justify-items-center">
          <Image
            className="drop-shadow-lg"
            src={polyrthmThumb}
            width={565}
            alt="polyrthm thumbnail"
            style={{ border: "2px solid #999999", borderRadius: "2px" }}
          />
          <Image
            className="drop-shadow-lg"
            src={rustseagullThumb}
            width={565}
            // height={353}
            alt="rustseagull thumbnail"
            style={{ border: "2px solid #999999", borderRadius: "2px" }}
          />
        </div>
        <div className="grid grid-rows-1 grid-cols-2 justify-items-center">
          <div className="text-[24px] w-[565px]">
            <b>03kkim/polyrthm</b> - A polyrhythm generator. Polyrhythms are two
            or more rhythms being played at the same time with different
            frequencies. While they sound cool, they're notoriously difficult to
            play, so I made this to help myself (and others) practice! <br />
            <i className="text-[18px]">ReactJS, BulmaCSS, Tone.js</i>
          </div>
          <div className="text-[24px] w-[565px]">
            <b>03kkim/rustseagull </b> - A Conway’s Game of Life implementation
            in Rust, which also generates sounds based on the board state! A
            collaboration project with Lily Zhang and Abena Laast.
            <br />
            <i className="text-[18px]">Winit, Pixels, Rodio </i>
          </div>
        </div>
        <div className="py-10 text-[32px]">2021</div>
      </main>
    </div>
  );
}
