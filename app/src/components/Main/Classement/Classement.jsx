import TypeSection from './TypeSection';
export default function Classement({ stageClassements, monthlyProgression, SeasonProgression }) {

  const stageClassementsTitle = "Phases";
  const monthlyProgressionTitle = "Mensuelles";
  const seasonProgressionTitle = "Saisons";

  // const stageClassementsModificationDate = "Les fiches de classements des joueurs sont supprimées a chaque début de saison.";
  // const monthlyProgressionModificationDate = "Chaque mois, une fiche de progression mensuelle est ajoutée jusqu'à la fin de la saison, puis elles sont toutes supprimées avant de recommencer.";
  // const seasonProgressioModificationDate = "Les fiches de progression sont ajoutées chaque année pendant 3 ans. Ensuite, la plus ancienne est supprimée pour faire place à la nouvelle.";

  return (
    <section className="p-6 md:w-4/6 m-auto 2xl:w-3/6 flex flex-col gap-4">
      <h1 className="text-xl text-center font-bold p-4 mb-8">Classement et progression des joueurs</h1>
      
    {stageClassements ? <TypeSection type={stageClassements} sectionTitle={stageClassementsTitle} /> : null}
    {monthlyProgression ? <TypeSection type={monthlyProgression} sectionTitle={monthlyProgressionTitle}/> : null}
    {SeasonProgression ? <TypeSection type={SeasonProgression} sectionTitle={seasonProgressionTitle}/> : null}


    </section>
  );
}
