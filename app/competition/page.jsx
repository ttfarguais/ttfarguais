
import CompComponent from "../src/components/Main/Competition/CompComponent";
export const metadata = {
  title: "T.T. Farguais - Compétition",
  description:
    "Retrouvez toutes les informations relatives aux compétitions du club de tennis de table de Fargues Saint Hilaire.",
};


export default function competitionPage (){

  return (
    <>
    <head>
    <link rel="canonical" href="https://www.ttfarguais.fr/competition" />
    </head>
    <CompComponent/>
    </>
  )
}
