import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import FSHLogo from "../../../../public/FSH.jpg";
import GirondeLogo from "../../../../public/Gironde.jpg";
import TtfLogo from "../../../../public/TTFargues-logo-Plein.svg";
const FshSponsor = ({ width, height }) => {
  return (
    <Image
      src={FSHLogo}
      width={width}
      height={height}
      className="w-auto"
      alt="Logo de la commune de Fargues st hilaire"
    />
  );
};

const GirondeSponsor = ({ width, height }) => {
  return (
    <Image
      src={GirondeLogo}
      width={width}
      height={height}
      className="w-auto"
      alt="Logo de la Gironde, le département"
    />
  );
};

const FacebookLink = () => {
  return (
    <Link
      href="https://www.facebook.com/profile.php?id=100086238966585"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebook className="w-full h-full" />
    </Link>
  );
};
const InstagramLink = () => {
  return (
    <Link
      href="https://www.instagram.com/tt_farguais/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram className="w-full h-full" />
    </Link>
  );
};

const CloseButton = ({setMenuOpen, menuOpen, size, color}) => {
  return (
    <button
      className="fixed top-8 right-8"
      onClick={() => setMenuOpen(menuOpen)}
    >
      <IoClose size={size} color={color}/>
    </button>
  );
};

const BurgerMenu = ({size, color, setMenuOpen, menuOpen}) => {
  return (
    <button
    onClick={() => setMenuOpen(menuOpen)}
    className="lg:hidden p-2 rounded-m transition-all"
  >
    <IoMenu size={size} color={color} />
  </button>
  )
}

const TTFLogo = ({width, height}) => {
  return (
    <Link href="/" className="w-16 md:w-20">
    <Image
      src={TtfLogo}
      alt="Logo de The House Of Art"
      width={width}
      height={height}
      className="w-auto"
    />
  </Link>
  )
}
export { BurgerMenu, CloseButton, FacebookLink, FshSponsor, GirondeSponsor, InstagramLink, TTFLogo };

