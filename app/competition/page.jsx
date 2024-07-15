
import CompComponent from "../src/components/Main/Competition/CompComponent";

export const metadata = {
  title: "T.T. Farguais - Compétition",
  description:
    "Retrouvez toutes les informations relatives aux compétitions du club de tennis de table de Fargues Saint Hilaire.",
};

export default function competitionPage (){

  const D2 = "/competition/D2.jpg";
  const D4 = "/competition/D4.jpg";
  const R3 = "/competition/R3.jpg";
  const PR = "/competition/PR.jpg";
  const CritGironde = "/competition/CRIT.jpg";

  const classements = [
    {
      name: "Régional",
      class: {
        R3: {
          name: "Régionale 3",
          image: R3,
          alt: "fiche de compétition régionale 3",
        },
      },
    },
  
    {
      name: "Départemental",
      class: {
        PR: {
          name: "Pré-Régionale",
          image: PR ,
          alt: "fiche de compétition pré-régionale",
        },
        D2: {
          name: "Départementale 2",
          image: D2,
          alt: "fiche de compétition départementale 2",
        },
        D4: {
          name: "Départementale 4",
          image: D4,
          alt: "fiche de compétition départementale 4",
        },
      },
    },
    {
      name: "Critérium de Gironde",
      class: {
        CRIT: {
          name: "Honneur",
          image: CritGironde,
          alt: "fiche de compétition critérium",
        },
      },
    },
  ];

  return (
    <>
    <CompComponent classements={classements}></CompComponent>
    </>
  )
}
