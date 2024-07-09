import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Gironde from "../../../../public/Gironde.jpg";
export default function Footer() {
  return (
    <>
      <div className="flex flex-col bg-solid text-contrast-1 px-8 pb-6 pt-10 ">
        <div className="flex flex-col md:flex-row justify-center items-center mb-10 w-full">
          
        <div className="flex flex-row-reverse justify-center items-center gap-16 mb-10 md:flex-row md:mb-0 w-full">
          <div className="flex flex-col gap-2 text-xs sm:text-sm ">
            <div>
              <p>Carré des Forges</p>
              <p>3. av. de la Laurence</p>
              <p>
                33370 <span className="uppercase">Fargues Saint Hilaire</span>
              </p>
            </div>
          </div>

          <div>
            <ul className="flex gap-8 justify-center">
              <li className="w-8 h-8">
                <a
                  href="https://www.facebook.com/profile.php?id=100086238966585"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-full h-full" />
                </a>
              </li>
              <li className="w-8 h-8">
                <a
                  href="https://www.instagram.com/tt_farguais/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-full h-full" />
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex">
            <Image
              src={Gironde}
              width={150}
              height={150}
              className="w-auto"
              alt="Logo Gironde, le département"
            ></Image>
          </div>
        </div>
        <div className="md:hidden">
            <Image
              src={Gironde}
              width={150}
              height={150}
              className="w-auto"
              alt="Logo Gironde, le département"
            ></Image>
          </div>

        </div>

        <div className="flex flex-col items-center gap-2 text-xs sm:text-sm">
          <p>
            &copy; 2024 <strong>TTFarguais</strong>
          </p>
          <p>
            Site réalisé par{" "}
            <a
              href="https://romain-hernandez.com/"
              className=""
              target="_blank"
            >
              Roms
            </a>{" "}
            &{" "}
            <a href="/" target="_blank">
              Barenko
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
