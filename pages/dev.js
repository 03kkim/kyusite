// import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";

import kyusiteThumb from "../resources/kyusite.png";
import microThumb from "../resources/micro.png";
import polyrthmThumb from "../resources/polyrthm.png";
import rustseagullThumb from "../resources/rustseagull.jpg";

import Header from "../components/Header";
import DevProject from "../components/DevProject";

import { projectData } from "../data/project-data";

export default function Dev() {
  return (
    <div className="bg h-full">
      <Header />
      <main className="main">
        <div className="text-[28px] sm:text-[32px] md:text-[40px] text-center ">Coding Projects</div>
        <div className="text-[28px] text-red-600 sm:h-0 visible sm:invisible text-center">
          <b>Please turn your phone to landscape to view this page</b>
        </div>
        <div className="text-[20px] sm:text-[22px] md:text-[24px] text-center 2xl:px-44">
          Check out my software projects!
        </div>

        {projectData.map((project, index) => (
          <>
            {project.heading && <div className="py-10 text-[32px] text-center">{project.heading}</div>}

            <div key={index} className="grid grid-rows-1 grid-cols-1 justify-items-center">
              <DevProject
                title={project.title}
                link={project.link}
                description={project.description}
                technologies={project.technologies}
                thumbnail={project.thumbnail}
              />
            </div>
          </>
        ))}
        {/* 
        <div className="py-10 text-[32px] text-center">Works in Progress</div>
        <div className="grid grid-rows-1 grid-cols-1 justify-items-center">
          <DevProject
            title="kyusite"
            link="https://www.kyuhong.kim/dev"
            description="This website. I made it a goal to use Figma for mockups, and it definitely helped make it look neater than my usual apps."
            technologies="NextJS, TailwindCSS"
            thumbnail={kyusiteThumb}
          />
        </div>
        <div className="py-10 text-[32px] text-center">2023</div>
        <div className="grid grid-rows-1 grid-cols-1 justify-items-center">
          <DevProject
            title="micro"
            link="https://github.com/03kkim/micro"
            description="A microrhythm practice tool. Similar to a metronome but different in that the top number
              represents the number of subdivisions in a constant beat, rather than the number of beats."
            technologies="Svelte, TailwindCSS, p5.js, ToneJS"
            thumbnail={microThumb}
          />
        </div>
        <div className="py-10 text-[32px] text-center">2022</div>
        <div className="grid grid-rows-2 grid-cols-1 justify-items-center">
          <DevProject
            title="polyrhythm"
            link="https://github.com/03kkim/polyrthm"
            description="A polyrhythm generator. Polyrhythms are two or more rhythms being played at the same
              time with different frequencies. While they sound cool, they're notoriously difficult to play, so I
              made this to help myself (and others) practice!"
            technologies="ReactJS, BulmaCSS, Tone.js"
            thumbnail={polyrthmThumb}
          />

          <DevProject
            title="rustseagull"
            link="https://github.com/03kkim/rustseagull"
            description="A Conway's Game of Life implementation in Rust, which also generates sounds
              based on the board state! A collaboration project with Lily Zhang and Abena Laast."
            technologies="Winit, Pixels, Rodio"
            thumbnail={rustseagullThumb}
          />
        </div> */}
      </main>
    </div>
  );
}
