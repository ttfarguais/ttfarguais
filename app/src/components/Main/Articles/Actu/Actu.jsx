import Image from "next/image";
import Link from "next/link";
import TTFLogoContour from "../../../../../../public/TTFargues-logo-Contour.svg";
import TTFLogoPlein from "../../../../../../public/TTFargues-logo-Plein.svg";
export default function Actu() {
  const roms = "https://romain-hernandez.com/";
  const barenko = "https://www.linkedin.com/in/ugo-matassa/";

  return (
    <section className="mb-16 md:w-4/6 m-auto 2xl:w-3/6">
      <div className="p-6">
        <h1 className="text-xl text-center font-bold p-4 mb-8">
          Les T.T. Farguais plus beaux que jamais !
        </h1>

        <div className="flex flex-col justify-between mb-8 gap-6 text-justify">
          <p>
            Après plus de 30 ans d&apos;existence, le club s&apos;octroie une
            refonte graphique et une nouvelle identité visuelle.
          </p>
          <p>
            La généreuse proposition de{" "}
            <Link
              href={roms}
              target="_blank"
              className="font-bold text-solid underline"
            >
              Romain Hernandez
            </Link>
            , membre investi de notre club,
            de retravailler notre identité visuelle avec{" "}
            <Link href={barenko} className="font-bold text-solid underline">
              Barenko
            </Link>{" "}
            (un ami de Romain) a été saisie à la suite de nombreuses réunions au
            sein du bureau. Nous avons donc pris la décision de lui faire
            confiance.
          </p>
          <p>
            Un nouveau logo ainsi qu&apos;un nouveau site web voient ainsi le
            jour pour la rentrée 2025.
          </p>
          <p>
            Cette refonte ne se limite pas seulement à l&apos;apparence, mais
            inclut également une amélioration de nos communications et de notre
            présence en ligne. Notre objectif est de refléter l&apos;énergie et
            l&apos;enthousiasme de notre communauté tout en attirant de nouveaux
            adhérents.
          </p>
          <p>
            Nous invitons tous nos membres à visiter le nouveau site web et à
            découvrir ses nouvelles fonctionnalités. Vous y trouverez des
            informations détaillées sur nos évènements à venir, les horaires
            d&apos;entraînements et bien plus encore.
          </p>
          <p>
            Un grand merci à tous ceux qui ont contribué à ce projet. Votre
            dévouement et votre passion pour le club sont la clé de notre succès
            continu. Continuons à faire du{" "}
            <strong className="inline-block">T.T. Farguais</strong> un endroit
            où le sport et l&apos;amitié se rencontrent.
          </p>
          <p className="text-solid font-bold">
            Rendez-vous en 2024 pour découvrir toutes ces nouveautés et célébrer
            ensemble cette nouvelle étape de notre histoire !
          </p>
        </div>
      </div>

      <div className="flex justify-around">
        <Image
          src={TTFLogoPlein}
          width={200}
          height={200}
          alt="Logo des TT Farguais"
          className="w-1/4 md:w-1/5"
        ></Image>
        <Image
          src={TTFLogoContour}
          width={200}
          height={200}
          alt="Logo des TT Farguais"
          className="w-1/4 md:w-1/5"
        ></Image>
      </div>
    </section>
  );
}
