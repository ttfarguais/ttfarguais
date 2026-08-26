import Link from "next/link";
import { FacebookLink, InstagramLink } from "../../UI/Icons";
import { MdAlternateEmail } from "react-icons/md";

export default function FooterSocialLinks() {
  return (
    <div>
      <ul className="flex gap-3 justify-center">
        <li className="w-8 h-8">
          <FacebookLink />
        </li>

        <li className="w-8 h-8">
          <InstagramLink />
        </li>

        <li className="w-8 h-8">
          <Link href="/contact" aria-label="Nous contacter">
            <MdAlternateEmail className="w-8 h-8" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
