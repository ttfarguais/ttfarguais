import Classement from "../src/components/Main/Classement/Classement";

export const metadata = {
  title: "T.T. Farguais - Classement et progression",
  description: "Retrouvez les classements et progressions des joueurs du club de tennis de table de Fargues Saint Hilaire.",
}

export default function ClassementPage() {
  const stageFile = {
    stage2: "/competition/classementJoueurs/classement.jpg",
  };

  const monthlyProgressionFile = {
    Mai: "/competition/progressionMensuelle/progressionMensuelle.jpg",
  };

  const seasonProgressionFile = {
    2024: "/competition/progressionSaison/progressionSaison.jpg",
  };

  const stageClassements = [
    {
      name: "Phase 2",
      image: stageFile.stage2,
      alt: "fiche de classement phase 1",
    },
  ];

  const monthlyProgression = [
    {
      name: "Mai",
      image: monthlyProgressionFile.Mai,
      alt: "fiche de progression mensuelle du mois de mai",
    },
  ];

  const SeasonProgression = [
    {
      name: "Saison 2024",
      image: seasonProgressionFile[2024],
      alt: "fiche de progression mensuelle du mois de mai",
    },
  ];

  return (
    <Classement
      stageClassements={stageClassements}
      monthlyProgression={monthlyProgression}
      SeasonProgression={SeasonProgression}
    ></Classement>
  );
}