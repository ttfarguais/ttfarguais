import Image from "next/image";
export default function compComponent({ classements }) {
  return (
    <>
      <section className="p-6 md:w-4/6 m-auto 2xl:w-3/6 flex flex-col gap-4">
        <h1 className="text-xl text-center font-bold p-4 mb-8 ">Résultats Compétitions</h1>

        {classements.map((classement, index) => (
          <section key={index} className="flex flex-col gap-3 border-b mb-10">
            <h2 className="font-bold text-xl mb-4 underline underline-offset-8">{classement.name}</h2>
            <div className="flex flex-col md:flex-row justify-around">

            {Object.keys(classement.class).map((poule, index) => (
              <div key={index} className="flex flex-col mb-6 md:w-2/5 ">
                <h3 className="mb-2 font-bold">Fiche {classement.class[poule].name} :</h3>
                <div className="flex flex-wrap gap-5 m-auto justify-center">
                  <a
                    href={classement.class[poule].image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shadow-2xl relative"
                  >
                    <Image
                      src={classement.class[poule].image}
                      width={500}
                      height={500}
                      alt={classement.class[poule].alt}
                      className="w-auto"
                    ></Image>

                    <div className="absolute flex items-center justify-center bg-black top-0 left-0 z-10 h-full w-full uppercase font-bold text-contrast-1 bg-opacity-80 opacity-0 hover:opacity-80 transition-all">
                      Voir la fiche
                    </div>
                  </a>
                </div>
              </div>
            ))}
            </div>
          </section>
        ))}
        {/* <div>
          <h2 className="font-bold text-center mb-4 ">{title} :</h2>
        </div>
        <div className="flex flex-wrap gap-5 m-auto justify-center">
          {Array.isArray(images)
            ? images.map((img, index) => (
                <a
                  key={index}
                  href={img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-2xl relative"
                >
                  <Image
                    src={img}
                    width={300}
                    height={300}
                    alt={`${title} ${index}`}
                    className="w-auto"
                    priority="false"
                  />
                  <div className="absolute flex items-center justify-center bg-black top-0 left-0 z-10 h-full w-full uppercase font-bold text-contrast-1 bg-opacity-80 opacity-0 hover:opacity-80 transition-all">
                    Voir la fiche
                  </div>
                </a>
              ))
            : null}
        </div> */}
      </section>
    </>
  );
}
