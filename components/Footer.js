function Footer() {
  return (
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
        href="https://www.linkedin.com/in/kyu-hong-kim-8b5991218/" rel="noreferrer"
      >
        LinkedIn
      </a>
      <a className="text-lg" target="_blank" href="https://github.com/03kkim" rel="noreferrer">
        Github
      </a>
    </div>
  );
}

export default Footer;
