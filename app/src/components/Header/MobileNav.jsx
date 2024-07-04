"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import TTFLogo from "../../../../public/TTFargues-logo-Plein.svg";
const urls = [
  { name: "Accueil", path: "/" },
  { name: "Le club", path: "/leclub" },
  { name: "Inscription", path: "/inscription" },
  { name: "Compétition", path: "/competition" },
  { name: "Contact", path: "/contact" },
];



export default function Navbar() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  function IcoMenu() {
    return (
      <GiHamburgerMenu
            className="md:hidden absolute right-5 w-10 h-10 text-contrast-3"
            onClick={() => setBurgerMenu(!burgerMenu)}
          />
    )
  }
  
  function CloseIcoMenu() {
    return (
      <IoClose
            className="md:hidden fixed right-5 z-50 w-10 h-10 text-contrast-1"
            onClick={() => setBurgerMenu(!burgerMenu)}
          />
    )
  }
  
  return (

    <section className={`relative md:flex md:justify-between border-b md:px-10 text-contrast-3`}>

      <div className="flex justify-between items-center p-6">
        <Link href="/" className="w-16 sm:w-24">
          <Image src={TTFLogo} width={500} height={500} alt="logo TTfarguais" />
        </Link>

        {!burgerMenu ? IcoMenu() : CloseIcoMenu()}

      </div>

      <div
        className={`md:hidden fixed z-10 top-0 flex flex-col justify-center bg-solid text-contrast-1 h-lvh w-full transition-all ${
          burgerMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center gap-10 text-xl">
          {urls.map((url, index) => (
            <li key={index}>
              <Link href={url.path} className="px-2 py-4 font-bold">{url.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex">
      <ul className="flex  items-center gap-5 lg:gap-10 p-4 " >
          {urls.map((url, index) => (
            <li key={index}>
              <Link href={url.path} className="px-2 py-4 font-bold hover:text-solid">{url.name}</Link>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
