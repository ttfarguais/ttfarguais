import TypeSectionType from './ClassementOrderBy-Type';
export default function Classement({ stageClassements, monthlyProgression, SeasonProgression }) {

  const stageClassementsTitle = "Phases";
  const monthlyProgressionTitle = "Mensuelles";
  const seasonProgressionTitle = "Saisons";

  return (
    <section className="p-6 md:w-4/6 m-auto 2xl:w-3/6 flex flex-col gap-4">
      <h1 className="text-xl text-center font-bold p-4 mb-8">Classement et progression des joueurs</h1>
      
    {stageClassements ? <TypeSectionType type={stageClassements} sectionTitle={stageClassementsTitle} /> : null}
    {monthlyProgression ? <TypeSectionType type={monthlyProgression} sectionTitle={monthlyProgressionTitle}/> : null}
    {SeasonProgression ? <TypeSectionType type={SeasonProgression} sectionTitle={seasonProgressionTitle}/> : null}


    </section>
  );
}
