import FooterAdress from "./Footer-Adress";
import FooterMoreInformation from "./Footer-MoreInformation";
import FooterSocialLinks from "./Footer-SocialLinks";
import FooterSponsorDesktop from "./Footer-SponsorDesktop";
import FooterSponsorMobile from "./Footer-SponsorMobile";
export default function Footer() {
  return (
    <>
      <div className="flex flex-col bg-solid text-contrast-1 px-8 pb-6 pt-10 ">
        <div className="flex flex-col lg:flex-row justify-center items-center mb-10 w-full">
          <div className="flex flex-row-reverse justify-center items-center gap-16 mb-10 lg:flex-row lg:mb-0 w-full">
            <div className="flex flex-col gap-2 text-xs sm:text-sm ">
             <FooterAdress />
            </div>

            <FooterSocialLinks />

            <FooterSponsorDesktop />
          </div>
          <FooterSponsorMobile />

        </div>

        <FooterMoreInformation />
      </div>
    </>
  );
}
