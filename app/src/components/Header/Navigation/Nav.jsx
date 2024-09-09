"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import TTFLogo from "../../../../../public/TTFargues-logo-Plein.svg";
import siteLinks from "../../../data/site";
import NavListDesktop from "./Nav-ListDesktop";
import NavListMobile from "./Nav-ListMobile";
export default function Nav() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky z-50 flex lg:flex-col px-8 sm:px-8 py-6 lg:py-12 items-center justify-between gap-10 border-b bg-white ">
      <Link href="/" className="w-16 md:w-20">
        <Image
          src={TTFLogo}
          alt="Logo de The House Of Art"
          width={100}
          height={100}
          className="w-auto"
        />
      </Link>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden p-2 rounded-m transition-all"
      >
        <IoMenu className="h-10 w-10" />
      </button>
      <NavListMobile siteLinks={siteLinks} activeIndex={activeIndex} setActiveIndex={setActiveIndex} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <NavListDesktop siteLinks={siteLinks} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </nav>
  );
}
