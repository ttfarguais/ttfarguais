"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoArrowDown, IoClose } from "react-icons/io5";
import TTFLogo from "../../../../public/TTFargues-logo-Plein.svg";
const urls = [
  { name: "Accueil", path: "/" },
  {
    name: "Le club",
    path: "/leclub",
    subLinks: [{ name: "Entrainement", path: "/entrainement" }],
  },
  { name: "Inscription", path: "/inscription" },
  { name: "Compétition", path: "/competition" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  const handleMouseEnter = () => {
    setSubMenu(true);
  };

  const handleMouseLeave = () => {
    setSubMenu(false);
  };

  function IcoMenu() {
    return (
      <GiHamburgerMenu
        className="md:hidden absolute right-5 w-10 h-10 text-contrast-3"
        onClick={() => setBurgerMenu(!burgerMenu)}
      />
    );
  }

  function CloseIcoMenu() {
    return (
      <IoClose
        className="md:hidden fixed right-5 z-50 w-10 h-10 text-contrast-1"
        onClick={() => setBurgerMenu(!burgerMenu)}
      />
    );
  }

  return (
    <section
      className={`relative md:flex md:justify-between border-b md:px-10 text-contrast-3`}
    >
      <div className="flex justify-between items-center p-6">
        <Link href="/" className="w-16 sm:w-24">
          <Image
            src={TTFLogo}
            width={500}
            height={500}
            alt="logo TTfarguais"
            className="w-auto"
          />
        </Link>

        {!burgerMenu ? IcoMenu() : CloseIcoMenu()}
      </div>

      {/* mobile */}
      <div
        className={`md:hidden fixed z-20 top-0 flex flex-col justify-center items-center bg-solid text-contrast-1 h-lvh w-full transition-all ${
          burgerMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-10 text-xl">
          {urls.map((url, index) => (
            <li key={index}
            className="relative flex items-center gap-8">
              <Link
                onClick={() => setBurgerMenu(!burgerMenu)}
                href={url.path}
                className="px-2 py-4 font-bold"
              >
                {url.name}
              </Link>
              {url.subLinks && (
                <IoArrowDown
                  className="w-7 h-7 text-contrast-1"
                  onClick={handleMouseEnter}
                />)}
                
              {url.subLinks && subMenu ? (
                <ul className="absolute ">
                  {url.subLinks.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subLink.path}
                        className="px-2 py-4 font-bold hover:text-solid"
                      >
                        {subLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
{/* desktop */}
      <div className="hidden md:flex">
        <ul className="flex items-center gap-5 lg:gap-10 p-4">
          {urls.map((url, index) => (
            <li
              key={index}
              onMouseEnter={url.subLinks ? handleMouseEnter : null}
              onMouseLeave={url.subLinks ? handleMouseLeave : null}
            >
              <Link
                href={url.path}
                className="px-2 py-4 font-bold hover:text-solid"
              >
                {url.name}
              </Link>

              {/* sous menu */}
              {url.subLinks && subMenu ? (
                <ul className="absolute mt-4">
                  {url.subLinks.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subLink.path}
                        className="px-2 py-4 font-bold hover:text-solid"
                      >
                        {subLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
