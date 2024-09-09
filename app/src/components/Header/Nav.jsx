"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoArrowDown, IoArrowForward, IoClose, IoMenu } from "react-icons/io5";
import TTFLogo from "../../../../public/TTFargues-logo-Plein.svg";

export default function Nav() {
  const navLinks = [
    { title: "Accueil", url: "/" },
    {
      title: "Le club",
      url: "/leclub",
      subLinks: [
        { title: "Le bureau", url: "/bureau" },
        { title: "Tournois", url: "/tournois" },
        { title: "Palmarès", url: "/palmares" },
      ],
    },
    { title: "Entraînements", url: "/entrainements" },
    { title: "Inscription", url: "/inscription" },
    {
      title: "Compétition",
      url: "/competition",
      subLinks: [{ title: "Compétiteurs", url: "/competiteurs" }],
    },
    ,
    { title: "Contact", url: "/contact" },
  ];

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
      <ul
        className={`lg:hidden fixed z-10 flex flex-col justify-center gap-8 h-lvh top-0 right-0 w-4/6 sm:w-3/6 text-white bg-solid p-6 sm:p-20 sm:text-lg transition-all  ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="fixed top-8 right-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoClose className="h-10 w-10 text-white" />
        </button>

        {navLinks.map((link, index) => (
          <li
            key={index}
            className="relative flex flex-col w-full"
            onClick={() => setActiveIndex(index)}
          >
            <div className="flex items-center gap-5 mb-4 sm:mb-6">
              <Link
                href={link.url}
                className="flex items-center hover:bg-solid transition hover:text-white rounded-xl  gap-6 uppercase"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {link.title}
              </Link>
              {link.subLinks ? (
                <a>
                  <IoArrowForward className="text-xl" />
                </a>
              ) : null}
            </div>

            {link.subLinks && activeIndex === index && (
              <ul className="flex flex-col gap-4 ml-4 sm:ml-10">
                {link.subLinks.map((subLink, subIndex) => (
                  <li className="flex flex-col " key={subIndex}>
                    <Link
                      href={subLink.url}
                      onClick={() => setMenuOpen(!menuOpen)}
                      className="uppercase"
                    >
                      {subLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <ul className="hidden lg:flex gap-2">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <Link
              href={link.url}
              className="flex items-center py-2 px-6 gap-4 hover:bg-solid transition hover:text-white rounded-xl uppercase"
            >
              {link.title}{" "}
              {link.subLinks ? <IoArrowDown className="inline" /> : null}
            </Link>
            {link.subLinks && activeIndex === index && (
              <ul className="absolute top-10 flex flex-col">
                {link.subLinks.map((subLink, subIndex) => (
                  <li className="flex flex-col " key={subIndex}>
                    <Link
                      href={subLink.url}
                      className="curved-underline py-2 px-6 hover:bg-solid transition hover:text-white bg-white rounded-xl text-center uppercase"
                    >
                      {subLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
