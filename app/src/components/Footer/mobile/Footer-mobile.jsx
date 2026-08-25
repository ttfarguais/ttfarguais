import Link from "next/link";
import { FacebookLink, InstagramLink } from "../UI/Icons";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function FooterSocialLinks() {
  return (
    <div>
      <ul className="flex gap-3 justify-center items-center">
        <li className="w-8 h-8">
          <FacebookLink />
        </li>

        <li className="w-8 h-8">
          <InstagramLink />
        </li>

        <li className="w-8 h-8">
          <Link href="/contact" aria-label="Nous contacter">
            <HiOutlineEnvelope className="w-8 h-8 text-white hover:text-green-400 transition-colors duration-200" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
