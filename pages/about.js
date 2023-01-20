import Header from "../components/Header";

function About() {
  return (
    <div className="bg">
      <Header />
      <main className="main">
        <div className="text-[40px] ">About Me!</div>
        <div className="text-[24px] pb-10">
          Hi, I’m Kyu! I’m a web developer, music producer, and student at UIUC
          majoring in CS + Music. I think that not only are the two fields
          indeniably intertwined in application, but in theory as well: mixing
          in the studio is like debugging in an IDE, creating a sample pack is
          analagous to developing a library, the way we name and recognize
          chords and scales is similar to binary-to-text encoding, the list
          could go on and on... even the term "production" is used to describe
          similar things in both fields. Because of this, I enjoy creating
          software for a lot of the same reasons I love making music (and vice
          versa!). I hope my passion for creating reaches you through my work,
          and thanks for checking out my site!
        </div>
        <div className="text-[40px] text-center ">Contact</div>
        <div className="grid gap-4 grid-cols-3 grid-rows-1 place-items-center bg-slate-100 py-5">
          <div
            onClick={() => {
              navigator.clipboard.writeText("03kkim@gmail.com");
            }}
            className="text-lg cursor-pointer"
          >
            Email
          </div>
          <a
            className="text-lg"
            target="_blank"
            href="https://www.linkedin.com/in/kyu-hong-kim-8b5991218/"
          >
            LinkedIn
          </a>
          <a
            className="text-lg"
            target="_blank"
            href="https://github.com/03kkim"
          >
            Github
          </a>
        </div>
      </main>
    </div>
  );
}

export default About;
