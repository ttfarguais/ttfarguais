
import CompComponent from "../src/components/Main/Competition/CompComponent";

export const metadata = {
  title: "T.T. Farguais - Compétition",
  description:
    "Retrouvez toutes les informations relatives aux compétitions du club de tennis de table de Fargues Saint Hilaire.",
};

export default function competitionPage (){

  const D1E1 = "/competition/D1_EQUIP1.jpg";
  const D2E1 = "/competition/D2_EQUIP1.jpg";
  const D4E1 = "/competition/D4_EQUIP1.jpg";
  const R3E1 = "/competition/R3_EQUIP1.jpg";
  const PRE1 = "/competition/PR_EQUIP1.jpg";
  const CritE1 = "/competition/CRIT_EQUIP1.jpg";
  const CritE2 = "/competition/CRIT_EQUIP2.jpg";

  const classements = [
    {
      name: "Championnat de France régional",
      class: {
        R3: {
          name: "Régionale 3",
          image: R3E1,
          alt: "fiche de compétition régionale 3",
        },
      },
    },
  
    {
      name: "Championnat de France départemental",
      class: {
        PR: {
          name: "Pré-Régionale",
          image: PRE1 ,
          alt: "fiche de compétition pré-régionale",
        },
        D1: {
          name: "Départementale 1",
          image: D1E1,
          alt: "fiche de compétition départementale 1",
        },
        D2: {
          name: "Départementale 2",
          image: D2E1,
          alt: "fiche de compétition départementale 2",
        },
        D4: {
          name: "Départementale 4",
          image: D4E1,
          alt: "fiche de compétition départementale 4",
        },
      },
    },
    {
      name: "Critérium de Gironde",
      class: {
        CRIT1: {
          name: "Equipe 1",
          image: CritE1,
          alt: "fiche de compétition critérium",
        },
        CRIT2: {
          name: "Equipe 2",
          image: CritE2,
          alt: "fiche de compétition critérium",
        },
      },
    },
  ];

  return (
    <>
    <head>
    <link rel="canonical" href="https://www.ttfarguais.fr/competition" />
    </head>
    <section className="p-6 md:w-4/6 m-auto 2xl:w-3/6 flex flex-col gap-4">
    <CompComponent classements={classements}></CompComponent>
    
    </section>
    </>
  )
}
