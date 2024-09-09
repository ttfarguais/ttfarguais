import Inscription from "../src/components/Main/Inscription/Inscription";
import { documents, inscriptionFile, times } from "../src/data/inscriptionFile";
export const metadata = {
  title: "T.T. Farguais - Inscription",
  description:
    "Rejoignez le club de tennis de table de Fargues Saint Hilaire. Retrouvez toutes les informations relatives à l'inscription.",
};


export default function inscriptionPage() {

  return (
    <>
    <head>
    <link rel="canonical" href="https://www.ttfarguais.fr/inscription" />
    </head>
   <Inscription times={times} documents={documents} inscriptionFile={inscriptionFile}></Inscription>

    </>
  );
}
