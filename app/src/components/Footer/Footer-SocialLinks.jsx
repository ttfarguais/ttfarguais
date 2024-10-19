import { FacebookLink, InstagramLink } from "../UI/Icons";
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
      </ul>
    </div>
  );
}
