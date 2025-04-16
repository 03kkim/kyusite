import Header from "../components/Header";
import { InstagramEmbed } from "react-social-media-embed";
import PhoneWarning from "../components/PhoneWarning";

export default function Music() {
  return (
    <div className="bg h-full">
      <Header />
      <main className="main">
        <div className="text-[40px] text-center ">Music</div>
        <PhoneWarning />
        <div className="text-[24px] text-center 2xl:px-44">Take a listen!</div>
        <div className="pt-10 text-[32px]">Knomada</div>
        <div className="pl-10 pb-10 text-[24px]">
          My solo electronic project - I produce, mix, and master all of my own music. I also upload videos on socials
          for fun! Check out my latest release with Nayu, as well as my winning submission for Kilohearts&apos; Phase
          Plant Fifth Year Anniversary Giveaway!
          <div className="grid grid-cols-2 place-items-center pt-5">
            <iframe
              className="h-[352px] w-full px-4"
              src="https://open.spotify.com/embed/track/5LvSZl3MRaAPXuvO1N0FOh?utm_source=generator"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              className="h-[352px] w-full px-4"
              src="https://kilohearts.com/blog/phase_plant_fifth_anniversary_giveaway_winners#:~:text=WINNER%3A%20Knomada%20(%40itsknomada%20on%20X)%20also%20tickled%20us%20with%20their%20entry%2C%20which%20not%20only%20showcased%20Phase%20Plant%20but%20also%20made%20us%20hungry%20for%20pizza."
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="pt-10 text-[32px]">HIDEOUT</div>
        <div className="pl-10 pb-10 text-[24px]">
          HIDEOUT is a music student organization at UIUC focused on building community and releasing a diverse range of
          collaborative hip hop. As secretary, I organized weekly 24-hour sleepaway events, album releases, and
          performances! I&apos;ve also produced instrumentals for our songs and provided piano tracks for other
          producers. Check out our most recent albums:
          <div className="grid grid-cols-2 place-items-center pt-5">
            <iframe
              className="h-[352px] w-full px-4"
              src="https://open.spotify.com/embed/album/0lL6i3CFHkugqNAcR36zr3?utm_source=generator"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              className="h-[352px] w-full px-4"
              src="https://open.spotify.com/embed/album/2Fqi6plmJWEhKatMju1XSw?utm_source=generator"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="pt-10 text-[32px]">Apoqhix</div>
        <div className="pl-10 pb-10 text-[24px]">
          Experimental Electronic Rap - A joint project with EL!JAH
          <div className="grid grid-cols-1 place-items-center pt-5">
            <iframe
              className="h-[380px] w-full px-4"
              src="https://open.spotify.com/embed/album/6RN46jakjtGTyMTMnrS49U?utm_source=generator&theme=0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
