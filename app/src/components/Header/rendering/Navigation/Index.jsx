"use client";
import { useState } from "react";
import siteLinks from "../../../../data/site";
import { BurgerMenu, TTFLogo } from "../../../UI/Icons";
import NavListDesktop from "./Nav-ListDesktop";
import NavListMobile from "./Nav-ListMobile";
export default function Nav() {

  const [activeIndex, setActiveIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky z-50 flex lg:flex-col px-8 sm:px-8 py-6 lg:py-12 items-center justify-between gap-10 border-b bg-white ">
      <TTFLogo width={100} heigth={100} />

      <BurgerMenu
        size={40}
        color={"black"}
        setMenuOpen={setMenuOpen}
        menuOpen={!menuOpen}
      />
      <NavListMobile
        siteLinks={siteLinks}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <NavListDesktop
        siteLinks={siteLinks}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      
    </nav>
  );
}
