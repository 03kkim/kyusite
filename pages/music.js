import Header from "../components/Header";
export default function Music() {
  return (
    <div className="bg">
      <Header />
      <main className="main">
        <div className="text-[40px] text-center ">Music Projects</div>
        <div className="text-[32px] text-center">
          I dedicate a lot of my free time to making music, both live and
          produced!
        </div>
        <div className="pt-10 text-[32px]">HIDEOUT</div>
        <div className="pl-10 pb-10 text-[24px]">
          HIDEOUT is a student music group at UIUC focused on creating hip hop
          music and pushing a positive narrative about hip hop culture. As a
          vice president, I help to plan the direction of our weekly
          get-togethers, social events 24-hour lock-ins, album releases, and
          performances! I also produce instrumentals for our songs and provide
          piano recordings for other producers. Check out our projects:
          <div className="grid grid-cols-2 place-items-center pt-5">
            <iframe
              className="h-[380px] w-full px-4"
              src="https://open.spotify.com/embed/album/0IaYzjqphpIvDHuls1nrjn?utm_source=generator&theme=0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              className="h-[380px] w-full px-4"
              src="https://open.spotify.com/embed/album/1TQjZkUy8CYTlgd5U9ZM2h?utm_source=generator&theme=0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="pt-10 text-[32px]">Improvisers Exchange</div>
        <div className="pl-10 pb-10 text-[24px]">
          The one drawback with music production is that there’s typically
          little interaction between the musician and audience. As part of
          Improvisers Exchange, an ensemble centered around improvised music,
          I’m able to keep my spirit of live music making alive!
        </div>
        <div className="pt-10 text-[32px]">@kvu.sic (Instagram)</div>
        <div className="pl-10 pb-10 text-[24px]">
          What started as an outlet to show my friends my random piano ideas and
          improvs ended up turning into a fulfilling way for me to start
          releasing more serious projects and recordings. Here’s the work I’m
          most proud of:
        </div>
      </main>
    </div>
  );
}
