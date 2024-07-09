
import CompComponent from "../src/components/Main/Competition/CompComponent";

export const metadata = {
  title: "TTFarguais - Compétition",
  description:
    "Retrouvez toutes les informations relatives aux compétitions du club de tennis de table de Fargues Saint Hilaire.",
};

export default function competitionPage (){

  const D2 = "/competition/D2.jpg";
  const D4 = "/competition/D4.jpg";
  const R3 = "/competition/R3.jpg";
  const PR = "/competition/PR.jpg";
  const CRIT = "/competition/CRIT.jpg";

  const classements = [
    {
      name: "Départemental",
      class: {
        D4: {
          name: "Départemental 4",
          image: D4,
          alt: "fiche de compétition départemental 4",
          info:""
        },
        D2: {
          name: "Départemental 2",
          image: D2,
          alt: "fiche de compétition départemental 2",
          info:""
        },
      },
    },
    {
      name: "Régional",
      class: {
        R3: {
          name: "Régional 3",
          image: R3,
          alt: "fiche de compétition régional 3",
          info:""
        },
      },
    },
    {
      name: "Pré-Régional",
      class: {
        PR: {
          name: "Pré-Régional",
          image: PR ,
          alt: "fiche de compétition pré-régional",
          info:""
        },
      },
    },
    {
      name: "Critérium",
      class: {
        CRIT: {
          name: "Critérium 1",
          image: CRIT,
          alt: "fiche de compétition critérium",
          info:""
        },
      },
    },
  ];
  
//  const imageCompet = ["/competition/compet-1.jpg","/competition/compet-2.jpg","/competition/compet-3.jpg","/competition/compet-4.jpg","/competition/compet-5.jpg"]

//  const imageCompetiteur = ["/competition/competiteur-1.jpg","/competition/competiteur-2.jpg","/competition/competiteur-3.jpg"]

  return (
    <>
    {/* <h1 className="text-center font-bold p-6 text-xl">Competition</h1>
    <CompComponent images={imageCompet} title={"Fiche de  competitions"}/>
    <CompComponent images={imageCompetiteur} title={'Fiches Competiteur'}/> */}
    <CompComponent classements={classements}></CompComponent>
    </>
  )
}
