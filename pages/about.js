import Header from "../components/Header";

function About() {
  return (
    <div className="bg">
      <Header />
      <main className="main">
        <div className="text-[40px] text-center">About Me</div>
        <div className="text-[24px] pb-10">
          <p className="text-center">
            Hi, I`&apos;`m Kyu! I`&apos;`m a web developer, music producer, and student at
            UIUC majoring in CS + Music.
          </p>
        </div>
        <div className="text-[32px]">Computers</div>
        <p className="pl-10 pb-10 text-[24px]">
          I particularly enjoy JS and web dev because I like the flexibility and
          accessibility it offers compared to standalone programs. I also find
          the process that goes into software development interesting. I
          received my laptop in 4th grade, and downloaded my first bloatware on
          it soon after. I remember not only the frustration from how slowly my
          computer had started to run, but also how oddly captivating it was to
          research and learn about what could be causing it. Since then, I`&apos;`ve
          been attached to computers at the hip. Weird origin story, right?
        </p>
        <div className="text-[32px]">Music</div>
        <p className="pl-10 pb-10 text-[24px]">
          I`&apos;`ve been playing piano since I was 7, but it wasn`&apos;`t until I was 13,
          when I started playing jazz, that I started making music the way I
          wanted. Entering college, I decided to give electronic music
          production a shot in order to broaden my sonic palette and to be able
          to record and release my own music. While it was frustrating to have
          to start as a beginner for the 3rd time, seeing where my curiosity`&apos;`s
          brought me today, I don`&apos;`t regret my journey one bit.
        </p>
        {/* Make this a blog post or smth idk */}
        {/* <div className="text-[32px]">Computers and Music</div>
        <p className="pl-10 pb-10 text-[24px]">
          The more I learn about both things, the more I discover are similar:
          mixing in the studio is like debugging in an IDE, creating a sample
          pack is analagous to developing a library, the way we name and
          recognize chords and scales is similar to binary-to-text encoding, the
          list could go on and on... even the term "production" is used to
          describe similar things in both fields. These similarities mean I
          enjoy creating software for a lot of the same reasons I love making
          music (and vice versa!). I hope my passion for creating reaches you
          through my work, and thanks for checking out my site!
        </p> */}
        <div className="text-[40px] text-center">Contact</div>
        <div className="grid gap-4 grid-cols-3 grid-rows-1 py-5 justify-items-center">
          <div
            onClick={() => {
              navigator.clipboard.writeText("03kkim@gmail.com");
            }}
            className="text-[24px] cursor-pointer"
          >
            Email
          </div>
          <a
            className="text-[24px]"
            target="_blank"
            href="https://www.linkedin.com/in/kyu-hong-kim-8b5991218/" rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-[24px]"
            target="_blank"
            href="https://github.com/03kkim" rel="noreferrer"
          >
            Github
          </a>
        </div>
      </main>
    </div>
  );
}

export default About;
