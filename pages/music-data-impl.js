import Header from "../components/Header";
import { InstagramEmbed } from "react-social-media-embed";
import PhoneWarning from "../components/PhoneWarning";
import { musicData } from "../data/music-data";
import MusicProject from "../components/MusicProject";

export default function Music() {
  return (
    <div className="bg h-full">
      <Header />
      <main className="main">
        <div className="text-[40px] text-center ">Music</div>
        <PhoneWarning />
        <div className="text-[24px] text-center 2xl:px-44">Take a listen!</div>
        {musicData.map((project, index) => (
          <MusicProject key={index} title={project.title} description={project.description} embeds={project.embeds} />
        ))}
      </main>
    </div>
  );
}
