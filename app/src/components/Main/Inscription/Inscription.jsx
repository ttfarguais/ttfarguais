import Maps from "../../UI/Maps";
import InscriptionFilesList from "./Inscription-filesList";

export default function Inscription({ times, documents, inscriptionFile }) {
  return (
    <>
      <section className="flex flex-col items-center m-auto py-4 px-4">

        <h1 className="text-xl text-center font-bold p-4 mb-8">
          Inscriptions possibles tout au long de la Saison
        </h1>

        <div className="flex flex-col md:flex-row justify-between mb-8 w-full">
          <div className="mb-4 md:mb-0">
            <p>
              <strong>T.T. FARGUAIS</strong>
            </p>
            <p>Carré des Forges</p>
            <p>Derrière la Mairie</p>
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

        <section className="flex flex-col mb-8 w-full">
          <h2 className="mb-8 text-xl font-extrabold text-solid mt-4">
            Informations utiles :
          </h2>

          <div className="flex items-center justify-between gap-4 hover:bg-contrast-2 p-2 rounded-xl">
            <p className="mr-4">
              {inscriptionFile.name} :
            </p>

            <div className="flex gap-2">
              <a
                href={inscriptionFile.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-solid text-contrast-1 py-1 px-4 border border-solid rounded-xl hover:bg-white hover:text-solid text-sm transition-all"
                aria-label={`Ouvrir ${inscriptionFile.name}`}
              >
                Ouvrir
              </a>

              <a
                href="TON_LIEN_TUTO_ICI"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-solid text-contrast-1 py-1 px-4 border border-solid rounded-xl hover:bg-white hover:text-solid text-sm transition-all"
                aria-label="Voir le tutoriel PPS"
              >
                Tuto PPS
              </a>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4 mb-8 w-full">
          <div>
            <h2 className="mb-8 text-xl font-extrabold text-solid mt-4">
              Documents à fournir :
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
