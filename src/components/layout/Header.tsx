"use client";

import Image from "next/image";

// UI
import LogoImage from "/public/logo.svg";
import Link from "next/link";
import Container from "./Container";

const nav = [
  {
    href: "/services",
    text: "Services",
  },
  {
    href: "/case-studies",
    text: "Case Studies",
  },
  {
    href: "/blog",
    text: "Blog",
  },
  {
    href: "/hiring",
    text: "We're hiring",
  },
  {
    href: "/contacts",
    text: "Contacts",
  },
];

const Header = () => {
  return (
    <header className="bg-accent relative items-center before:pointer-events-none before:absolute before:top-0 before:block before:h-4 before:w-full before:select-none before:bg-[linear-gradient(to_bottom,#00000077,#00000000)]">
      <Container>
        <div className="flex h-[87px] w-full items-center justify-between gap-8">
          <Image src={LogoImage} alt="" width={51} height={78.67} />

          <nav>
            <ul className="hidden items-center justify-between gap-8 lg:flex">
              {nav.map(({ href, text }, index) => (
                <li key={text}>
                  <Link
                    href={href}
                    className={`text-[22px] leading-none text-black ${index === 2 ? "mr-40" : ""}`}
                    prefetch={false}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <ul></ul>
          </nav>

          <button className="text-accent inline-flex w-[330px] items-center justify-end bg-black px-4 py-3 text-[22px] leading-none">
            <Image
              src="/arrow-right.svg"
              width={20}
              height={20}
              alt=""
              className="mr-16 object-contain"
            />
            Book a call
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
