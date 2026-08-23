import Link from "next/link";
import { FacebookLink, InstagramLink } from "../UI/Icons";
import { MdAlternateEmail } from "react-icons/md";

export default function FooterSocialLinks() {
  return (
    <div>
      <ul className="flex gap-8 justify-center">
        <li className="w-8 h-8">
          <FacebookLink />
        </li>

        <li className="w-8 h-8">
          <InstagramLink />
        </li>

        <li className="w-8 h-8">
          <Link href="/contact" aria-label="Nous contacter">
           <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
  className="w-8 h-8"
>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <path d="m3 7 9 6 9-6" />
  <text
    x="12"
    y="16"
    textAnchor="middle"
    fontSize="6"
    fontWeight="bold"
    fill="currentColor"
    stroke="none"
  >
    @
  </text>
</svg>
          </Link>
        </li>
      </ul>
    </div>
  );
}
