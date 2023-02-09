import Header from "../components/Header";

function About() {
  return (
    <div className="bg h-full">
      <Header />
      <main className="main">
        <div className="text-[40px] text-center">About Me</div>
        <div className="text-[24px] pb-5">
          <p className="text-center">
            Hi, I&apos;m Kyu! I&apos;m a web developer, music producer, and
            student at UIUC majoring in CS + Music.
            <br />
            Feel free to contact me using the following links:
          </p>
        </div>
        <div className="grid gap-4 grid-cols-3 grid-rows-1 pb-5 justify-items-center">
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
            href="https://www.linkedin.com/in/kyu-hong-kim-8b5991218/"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-[24px]"
            target="_blank"
            href="https://github.com/03kkim"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <div className="text-[32px]">Computers</div>
        <p className="pl-10 pb-10 text-[24px]">
          I enjoy creating frontend web apps using technologies like Next,
          React, and Tailwind for my personal projects for the flexibility and
          accessibility it offers compared to standalone programs, but I&apos;ve
          also used Django, PHP and SQL to handle backend and DBs. At my
          internship this spring, I get to work with large datasets and continue
          building on my data skills!
          {/* <br /> */}
          {/* <br />
          Fun story: I received my first laptop in 4th grade, and being a 4th
          grader, ended up with a ton of bloatware and adware. I started
          Googling what could be causing my computer to be acting up, and one
          question led to the next. Before I knew it, I&apos;d gotten to know
          way to much about computers. A bit of a weird origin story, I&apos;ll
          admit, but I think it&apos;s also poetically relatable to software
          development. */}
        </p>
        <div className="text-[32px]">Music</div>
        <p className="pl-10 pb-10 text-[24px]">
          I first started playing music at 7, with classical piano. However, it
          wasn&apos;t until I was 13, when I started playing jazz, that I
          started making my own music. Entering college, I decided to give
          electronic music production a shot in order to broaden my sonic
          palette and to be able to record and release my own music. While it
          was difficult to start as a beginner in music for the 3rd time,
          it&apos;s been a rewarding experience.
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
      </main>
    </div>
  );
}

export default About;
