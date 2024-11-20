import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { CloseButton } from "../../../UI/Icons";
export default function NavListMobile({
  siteLinks,
  activeIndex,
  setActiveIndex,
  menuOpen,
  setMenuOpen,
}) {
  return (
    <ul
      className={`lg:hidden fixed z-10 flex flex-col justify-center gap-8 h-lvh top-0 right-0 w-4/6 sm:w-3/6 text-white bg-solid p-6 sm:p-20 sm:text-lg transition-all  ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <CloseButton
        setMenuOpen={setMenuOpen}
        menuOpen={!menuOpen}
        size={40}
        color={"white"}
      />

      {siteLinks.map((link, index) => (
        <li key={index} className="relative flex flex-col w-full">
          <div className="flex items-center gap-5 mb-4 sm:mb-6">
            <Link
              href={link.url}
              className="flex items-center hover:bg-solid transition hover:text-white rounded-xl  gap-6 uppercase"
              onClick={() => setMenuOpen(!menuOpen)} // for leave the menu open after click
            >
              {link.title}
            </Link>
            {link.subLinks && (
              <button onClick={() => setActiveIndex(index)}>
                <IoArrowForward // for open the sublinks
                  className="text-xl"
                />
              </button>
            )}
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
  );
}
