import Link from "next/link";
import { IoArrowDown } from "react-icons/io5";
export default function NavListDesktop({
  siteLinks,
  activeIndex,
  setActiveIndex,
}) {
  return (
    <ul className="hidden lg:flex gap-2">
      {siteLinks.map((link, index) => (
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
  );
}
