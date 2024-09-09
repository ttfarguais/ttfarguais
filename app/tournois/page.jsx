import Tournaments from '../src/components/Main/Tournaments/Tournaments';
import trophys from '../src/data/trophysTournament';
export const metadata = {
  title: "T.T. Farguais - Tournois",
  description: "Découvrez l'historique des tournois internes du club de tennis de table de Fargues-Saint-Hilaire. Les vainqueurs, les finalistes et les photos des trophées.",
};

export default function TournoisPage() {

  

  return (
    <>
    <head>
    <link rel="canonical" href="https://www.ttfarguais.fr/tournois" />
    </head>
   <Tournaments trophys={trophys}></Tournaments>
    </>
  )
}