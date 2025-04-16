import Header from "../components/Header";

function Contact() {
  return (
    <div className="bg">
      <Header />
      <main className="main">
        <div className="text-[28px] sm:text-[32px] md:text-[40px] text-center">Contact</div>
        <div className="text-[20px] sm:text-[22px] md:text-[24px] text-center 2xl:px-44">
          <p>Feel free to reach out or view my profiles:</p>
        </div>
        <br />
        <div className="grid gap-4 grid-cols-3 grid-rows-1 pb-5 pt-10 justify-items-center">
          <div
            onClick={() => {
              navigator.clipboard.writeText("03kkim@gmail.com");
            }}
            className="text-[24px] cursor-pointer hover:scale-95 transition hover:text-neutral-500 transform duration-100 ease-in-out text-shadow"
          >
            Email (Click to Copy)
          </div>
          <a
            className="text-[24px] cursor-pointer hover:scale-95 transition hover:text-neutral-500 transform duration-100 ease-in-out text-shadow"
            target="_blank"
            href="https://www.linkedin.com/in/kyu-hong-kim/"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-[24px] cursor-pointer hover:scale-95 transition hover:text-neutral-500 transform duration-100 ease-in-out text-shadow"
            target="_blank"
            href="https://github.com/03kkim"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </main>
    </div>
  );
}

export default Contact;
