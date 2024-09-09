import ClassementList from "../src/components/Main/Classement/ClassementList-Container";

export const metadata = {
  title: "T.T. Farguais - Classement et progression",
  description: "Retrouvez les classements et progressions des joueurs du club de tennis de table de Fargues Saint Hilaire.",
}

export default function ClassementPage() {

  return (
    <>
    <head>
    <link rel="canonical" href="https://www.ttfarguais.fr/classement" />
    </head>
   <ClassementList />
    </>
  );
}