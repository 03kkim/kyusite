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
import PhoneWarning from "../components/PhoneWarning";

export default function Dev() {
  return (
    <div className="bg h-full">
      <Header />
      <main className="main">
        <div className="text-[28px] sm:text-[32px] md:text-[40px] text-center ">Software Dev</div>
        <PhoneWarning />
        <div className="text-[20px] sm:text-[22px] md:text-[24px] text-center 2xl:px-44">
          Check out my coding projects!
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
      </main>
    </div>
  );
}
