import ClassementOrderBy from "../src/components/Main/Classement/ClassementOrderBy";

export const metadata = {
  title: "T.T. Farguais - Classement et progression",
  description: "Retrouvez les classements et progressions des joueurs du club de tennis de table de Fargues Saint Hilaire.",
}

import { monthlyProgression, SeasonProgression, stageClassements } from "../src/utils/classement";
export default function ClassementPage() {

  return (
    <>
    <head>
    <link rel="canonical" href="https://www.ttfarguais.fr/classement" />
    </head>
    <ClassementOrderBy
      stageClassements={stageClassements}
      monthlyProgression={monthlyProgression}
      SeasonProgression={SeasonProgression}
    ></ClassementOrderBy>
    </>
  );
}