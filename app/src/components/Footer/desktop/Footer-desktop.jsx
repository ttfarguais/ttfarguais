import FooterAdress from "../Footer-Adress";
import FooterMoreInformation from "../Footer-MoreInformation";
import FooterSocialLinks from "../Footer-SocialLinks";
import FooterSponsorDesktop from "./Footer-SponsorDesktop";

export default function FooterDesktop() {
  return (
    <div className="hidden lg:flex flex-col bg-solid text-contrast-1 px-8 pb-6 pt-10 gap-10">
      <div className="flex justify-center items-center gap-16 w-full">

        <FooterAdress />

        <FooterSocialLinks />

        <FooterSponsorDesktop />
      </div>

      <FooterMoreInformation />
    </div>
  );
}
