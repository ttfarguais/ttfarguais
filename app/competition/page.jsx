
import CompComponent from "../src/components/Main/Competition/CompComponent";

export const metadata = {
  title: "T.T.Farguais - Compétition",
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

  return (
    <>
    <CompComponent classements={classements}></CompComponent>
    </>
  )
}
