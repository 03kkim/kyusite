import React from "react";
import Link from "next/link";

function Header() {
  const pages = ["Dev", "Music", "Contact"];
  return (
    <div className="flow-root">
      <div className="md:float-left text-center">
        <Link href="/">
          <h1 className=" text-[32px] sm:text-[64px] hover:scale-95 cursor-pointer transition transform duration-200 ease-in-out text-shadow">
            <div className="transition hover:text-neutral-500 transform duration-200 ease-in-out">Kyu Hong Kim</div>
          </h1>
        </Link>
      </div>

      <div className="space-x-10 text-[26px] sm:text-[40px] md:float-right text-center">
        {pages.map((page, idx) => (
          <Link key={idx} href={`/${page.toLowerCase()}`}>
            <h2 className="inline-block hover:scale-95 cursor-pointer transition transform duration-100 ease-in-out text-shadow">
              <div className="transition hover:text-neutral-500 transform duration-100 ease-in-out">{page}</div>
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
