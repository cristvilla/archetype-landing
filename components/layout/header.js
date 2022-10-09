import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../public/images/logo.svg";
import ButtonPrimary from "../shared/ButtonPrimary";
import MobileNav from "./mobile-nav";

const navLinks = [
  {
    name: 'Docs',
    to: 'docs'
  },
  {
    name: 'Blogs',
    to: 'blog'
  },
  {
    name: 'Case Studies',
    to: 'case-studies'
  }
]

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="container grid grid-flow-col py-3 sm:py-4">
          <div className="flex items-center">
            <Logo />
          </div>

          <ul className="hidden lg:flex  items-center">
            {
              navLinks.map((item, idx) =>
                <Link
                  key={idx}
                  href={`/${item.to}`}
                >
                  <a className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-gray"
                  }>
                    {item.name}
                  </a>
                </Link>
              )
            }
          </ul>

          <div className="hidden  md:flex justify-end items-center">
            <Link href="/">
              <a className="sm:mr-9 capitalize tracking-wide text-purple hover:text-purple transition-all">
                Sign In
              </a>
            </Link>
            <ButtonPrimary>Request a demo</ButtonPrimary>
          </div>

          <MobileNav links={navLinks} />
        </nav>
      </header>
    </>
  );
};

export default Header;
