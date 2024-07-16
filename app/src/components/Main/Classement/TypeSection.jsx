import ImageAndClick from "../ImageAndClick";
export default function TypeSection({ type, sectionTitle }) {
  return (
    <section className="flex flex-col gap-3 border-b mb-10">
      <h2 className="font-bold text-lg mb-4 underline underline-offset-8">
        {sectionTitle} :
      </h2>
      {/* <p>{modification}</p> */}
      <div className="flex gap-4 flex-wrap justify-around">
        {type.map((obj, index) => (
          <div key={index} className="flex flex-col mb-6 max-w-60 ">
            <h3 className="mb-2 font-bold text-lg">{obj.name} :</h3>
            <div className="flex gap-5 m-auto justify-center">

              <ImageAndClick
                src={obj.image}
                alt={obj.alt}
                href={obj.image} // L'URL de l'image pour l'ouvrir dans un nouvel onglet
                actionTitle={"Afficher la fiche"}
              />
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
