import kyusiteThumb from "../resources/kyusite.png";
import microThumb from "../resources/micro.png";
import polyrthmThumb from "../resources/polyrthm.png";
import rustseagullThumb from "../resources/rustseagull.png";
import modalShiftThumb from "../resources/modalshift.png";

export const projectData = [
  {
    title: "modalshift",
    heading: "Works in Progress",
    link: "https://github.com/03kkim/ModalShift",
    description:
      "An audio plugin that uses parallel bandpass filters and frequency shifters in order to achieve a unique pitch-shifting effect.",
    technologies: "C++, JUCE",
    thumbnail: modalShiftThumb,
  },
  {
    title: "kyusite",
    heading: null,
    link: "https://www.kyuhong.kim/dev",
    description:
      "This website. I made it a goal to use Figma for mockups and to separate data and logic for ease of maintenance.",
    technologies: "Figma, NextJS, TailwindCSS",
    thumbnail: kyusiteThumb,
  },
  {
    title: "micro",
    heading: "2023",
    link: "https://github.com/03kkim/micro",
    description:
      "A microrhythm practice tool. Similar to a metronome but different in that the top number represents the number of subdivisions in a constant beat, rather than the number of beats.",
    technologies: "Svelte, TailwindCSS, p5.js, ToneJS",
    thumbnail: microThumb,
  },
  {
    title: "polyrhythm",
    heading: "2022",
    link: "https://github.com/03kkim/polyrthm",
    description:
      "A polyrhythm generator. Polyrhythms are two or more rhythms being played at the same time with different frequencies. While they sound cool, they're notoriously difficult to play, so I made this to help myself (and others) practice!",
    technologies: "ReactJS, BulmaCSS, Tone.js",
    thumbnail: polyrthmThumb,
  },
  {
    title: "rustseagull",
    heading: null,
    link: "https://github.com/03kkim/rustseagull",
    description:
      "A Conway's Game of Life implementation in Rust, which also generates sounds based on the board state! A collaboration project with Lily Zhang and Abena Laast.",
    technologies: "Winit, Pixels, Rodio",
    thumbnail: rustseagullThumb,
  },
];
