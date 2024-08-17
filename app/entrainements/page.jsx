import Training from "../src/components/Main/Training/Training";

export const metadata = {
  title: "T.T. Farguais - Entrainements",
  description:
    "Rejoignez le club de tennis de table de Fargues Saint Hilaire. Retrouvez toutes les informations relatives aux entrainements.",
};

export default function TrainingPage() {

  return (
    <>
    <head>
    <link rel="canonical" href="https://www.ttfarguais.fr/entrainements" />
    </head>
   <Training></Training>
    </>
  );
}
