import Maps from "../../UI/Maps";
import InscriptionFilesList from "./Inscription-filesList";
export default function Inscription({ times, documents, inscriptionFile }) {
  return (
    <>
      <section className="p-6 md:w-4/6 m-auto 2xl:w-3/6">
        <h1 className="text-xl text-center font-bold p-4 mb-8">
          Inscriptions possibles tout au long de la saison
        </h1>

        <div className="flex flex-col md:flex-row justify-between mb-8 ">
          <div className="mb-4 md:mb-0">
            <p>
              <strong>T.T. FARGUAIS</strong>
            </p>
            <p>Carré des Forges</p>
            <p>3, av. de La Laurence</p>
            <p>
              33370 <span className="uppercase">Fargues Saint-Hilaire</span>
            </p>
          </div>
          <div>
            {times.map((time, index) => (
              <p key={index}>
                <span className="font-bold">{time.day} :</span> {time.time}
              </p>
            ))}
          </div>
        </div>

        <section className="flex flex-col mb-8 ">
          <h2 className="mb-8 text-xl font-extrabold text-solid mt-4">
            Informations tarifs et horaires :
          </h2>
          <div className="flex items-center justify-between hover:bg-contrast-2 p-2 rounded-xl">
            <p className="mr-4">{inscriptionFile.name} :</p>

            <a
              href={inscriptionFile.pdf}
              download={`${inscriptionFile.pdf}.pdf`}
              className="text-solid py-1 px-4 border border-solid rounded-xl hover:text-contrast-1 hover:bg-solid text-sm transition-all"
              aria-label={`Télécharger ${inscriptionFile.name}`}
            >
              Télécharger
            </a>
          </div>
        </section>
        <section className="flex flex-col gap-4 mb-8 ">
          <div>
            <h2 className="mb-8 text-xl font-extrabold text-solid mt-4">
              Documents à fournir obligatoirement :
            </h2>
            <ul className="flex flex-col gap-6">
              {documents.map((document, index) => (
                <InscriptionFilesList key={index} document={document} />
              ))}
            </ul>
          </div>
        </section>
      </section>
      <section className="w-full">
        <Maps />
      </section>
    </>
  );
}
