import React from "react";
import Image from "next/image";
import FSH from "../../../../public/FSH.jpg";
import Gironde from "../../../../public/Gironde.jpg";
export default function FooterSponsor() {
  return (
    <div className="flex gap-6 lg:hidden">
      <Image
        src={Gironde}
        width={80}
        height={80}
        className="w-auto"
        alt="Logo Gironde, le département"
      ></Image>
      <Image
        src={FSH}
        width={80}
        height={80}
        className="w-auto"
        alt="Logo Fargues saint hilaire, la commune"
      ></Image>
    </div>
  );
}
