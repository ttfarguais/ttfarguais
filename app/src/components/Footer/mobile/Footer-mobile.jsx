import FooterAdress from "../Footer-Adress";
import FooterMoreInformation from "../Footer-MoreInformation";
import FooterSocialLinks from "../Footer-SocialLinks";
import FooterSponsorMobile from "./Footer-SponsorMobile";

export default function FooterMobile() {
  return (
    <div className="flex lg:hidden flex-col items-center gap-10 justify-center bg-solid text-contrast-1 px-8 pb-6 pt-10">
   <div className="flex flex-col items-center gap-6 w-full">
         <FooterAdress />
       </div>
      <div className="flex-1 flex justify-center">
        <FooterSocialLinks />
      </div>
  </div>
      <FooterSponsorMobile />

      <FooterMoreInformation />
    </div>
  );
}
