import Header from "../components/Header";
import { InstagramEmbed } from "react-social-media-embed";

export default function Music() {
  return (
    <div className="bg h-full">
      <Header />
      <main className="main">
        <div className="text-[40px] text-center ">Music Projects</div>
        <div className="text-[28px] text-red-600 sm:h-0 visible sm:invisible text-center">
          <b>Please turn your phone to landscape to view this page</b>
        </div>
        <div className="text-[24px] text-center 2xl:px-44">
          I dedicate a lot of my free time to making music, both live and
          produced!
        </div>
        <div className="pt-10 text-[32px]">HIDEOUT</div>
        <div className="pl-10 pb-10 text-[24px]">
          HIDEOUT is a student music group at UIUC focused on creating hip hop
          music and pushing a positive narrative about hip hop culture. As the
          secretary, I organize our weekly admin meetings and help plan social
          events, 24-hour lock-ins, album releases, and performances! I also
          produce instrumentals for our songs and provide piano tracks for other
          producers. Check out our projects:
          <div className="grid grid-cols-2 place-items-center pt-5">
            <iframe
              className="h-[380px] w-full px-4"
              src="https://open.spotify.com/embed/album/0IaYzjqphpIvDHuls1nrjn?utm_source=generator&theme=0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              className="h-[380px] w-full px-4"
              src="https://open.spotify.com/embed/album/1TQjZkUy8CYTlgd5U9ZM2h?utm_source=generator&theme=0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="pt-10 text-[32px]">Improvisers Exchange</div>
        <div className="pl-10 pb-10 text-[24px]">
          The one drawback with music production is the lack of live interaction
          between the musician and audience. As part of Improvisers Exchange
          I&apos;m able to enjoy making music together with others in a realtime
          improvised setting.
        </div>
        {/* <div className="pt-10 text-[32px]">@kvu.sic (Instagram)</div>
        <div className="pl-10 pb-10 text-[24px]">
          What started as an outlet to show my friends my random piano ideas and
          improvs ended up turning into a fulfilling way for me to start
          releasing more serious projects. Here are some of my favorites!
          <div className="grid devbreak:grid-cols-3 cols-1 place-items-center pt-5">
            <InstagramEmbed url="https://www.instagram.com/p/ChST0VKFMZe/" />
            <InstagramEmbed url="https://www.instagram.com/p/Cg1_HWSl9hK/" />
            <InstagramEmbed url="https://www.instagram.com/p/CivHPEVsHxY/" />
          </div>
        </div> */}
      </main>
    </div>
  );
}
