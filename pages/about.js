import Header from "../components/Header";

function About() {
  return (
    <div className="bg">
      <Header />
      <main className="main">
        <div className="text-[28px] sm:text-[32px] md:text-[40px] text-center">
          About Me
        </div>
        <div className="text-[20px] sm:text-[22px] md:text-[24px] text-center 2xl:px-44">
          <p>
            Hi, I&apos;m Kyu. I&apos;m a web developer, music producer, and
            student at UIUC studying CS + Music. Here are some links for
            contact/info:
          </p>
        </div>
        <br />
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
        <div className="pt-10 text-[32px]">Computers</div>
        <p className="pl-10 pb-10 text-[24px]">
          The first major project I ever made back in high school used JQuery
          and PHP, but I&pos;ve since moved onto technologies like ReactJS
          TailwindCSS, and Node.js for my personal projects instead for the
          simplicity and accessibility they offer. In school and in work,
          I&apos;ve also had notable experience using C++, SQL, Typescript,
          MaterialUI, and Kotlin.
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
          I first started playing music at 7, with the classical piano. When I
          was 13, I started playing jazz and started composing my own music
          through improvisation. Entering college, I decided to start pursuing
          electronic music production in order to be able to record and release
          my own music. While it was difficult to start as a beginner for the
          3rd time, it&apos;s been a rewarding experience.
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
