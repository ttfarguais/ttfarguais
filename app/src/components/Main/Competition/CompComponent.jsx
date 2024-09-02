import ImageAndClick from "../ImageAndClick";
export default function compComponent({ classements }) {
  return (
    <>
      <h1 className="text-xl text-center font-bold p-4 mb-8 ">
        Résultats Compétitions par équipes
      </h1>
      {/* <h2 className="text-lg font-bold text-center mb-8">Championnat de France</h2> */}
      {classements.map((classement, index) => (
        <section key={index} className="flex flex-col gap-3 border-b mb-10">
          <h2 className="font-bold text-lg mb-4 underline underline-offset-8">
            {classement.name}
          </h2>
          <div className="flex gap-4 flex-wrap justify-around">
            {Object.keys(classement.class).map((poule, index) => (
              <div key={index} className="flex flex-col mb-6 max-w-60 ">
                <h3 className="mb-2 font-bold">
                  {classement.class[poule].name} :
                </h3>
                <div className="flex gap-5 m-auto justify-center">
                  <ImageAndClick
                    src={classement.class[poule].image}
                    href={classement.class[poule].image}
                    alt={classement.class[poule].image}
                    actionTitle="Voir la fiche"
                  ></ImageAndClick>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
