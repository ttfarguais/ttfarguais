import Awards from '../src/components/Main/Palmares/Awards';
import dataAwards from '../src/data/awards';
export const metadata = {
  title: "T.T. Farguais - Palmarès",
  description:
    "Retrouvez ici le palmarès du T.T. Farguais. Les titres remportés par les joueurs du club de tennis de table de Fargues-Saint-Hilaire.",
};

export default function AwardsPage() {

  return (
    <>
    <head>
    <link rel="canonical" href="https://www.ttfarguais.fr/palmares" />
    </head>
   <Awards awards={dataAwards}></Awards>
    </>
  );
}
