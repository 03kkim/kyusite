import Header from "../components/Header";

function About() {
  return (
    <div className="bg">
      <Header />
      <main className="main">
        <div className="text-[28px] sm:text-[32px] md:text-[40px] text-center">About Me</div>
        <div className="text-[20px] sm:text-[22px] md:text-[24px] text-center 2xl:px-44">
          <p>
            Hi, I&apos;m Kyu. I&apos;m a software engineer, music producer, and student at UIUC studying CS + Music.
            Here are some links for contact/info:
          </p>
        </div>
        <br />
        <div className="grid gap-4 grid-cols-3 grid-rows-1 pb-5 pt-10 justify-items-center">
          <div
            onClick={() => {
              navigator.clipboard.writeText("03kkim@gmail.com");
            }}
            className="text-[24px] cursor-pointer"
          >
            Email
          </div>
          <a className="text-[24px]" target="_blank" href="https://www.linkedin.com/in/kyu-hong-kim/" rel="noreferrer">
            LinkedIn
          </a>
          <a className="text-[24px]" target="_blank" href="https://github.com/03kkim" rel="noreferrer">
            Github
          </a>
        </div>
        <div className="pt-10 text-[32px]">A bit of background...</div>
        <p className="pl-10 pb-10 text-[24px]">
          I know this is cliche, but there&apos;s something just so rewarding about trying new things. I first started
          making music when I was 7 with the classical piano. When I was 13, I started playing jazz and composing my own
          music. Entering college at 18, I started producing electronic music, and while it was a challenge being a
          beginner again it&apos;s definitely been worth the journey. Given that I only started making electronic after
          I chose to study CS + Music in college, I&apos;m very fortunate that my interests ended up aligning. Whatever
          I end up doing, just know I&apos;m excited to continue learning and creating!
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
