import Maps from "../Maps"
export default function Inscription({times, prices, documents, trainingStartDate}) {
  return (
    <>
    <section className="p-6 md:w-4/6 m-auto 2xl:w-3/6">

      <h1 className="text-xl text-center font-bold p-4 mb-8">Inscriptions possibles tout au long de la saison</h1>

      <div className="flex flex-col md:flex-row justify-between mb-8 ">
        <div className="mb-4 md:mb-0">
        <p>
          <strong>T.T. Farguais</strong>
        </p>
        <p>Carré des Forges</p>
        <p>3, av. de La Laurence</p>
        <p>33370 <span className="uppercase">Fargues Saint-Hilaire</span></p>
        </div>
        <div>
          {times.map((time, index) => (
            <p key={index}>
              <span className="font-bold">{time.day} :</span> {time.time}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-10">
        {trainingStartDate.map((age, index) => (
          <p key={index} className="text-xl font-bold text-solid  px-4 py-2 bg-contrast-2 rounded-xl">Reprise des entrainements {age.name} le {age.date}</p>
        ))}
      </div>

      <section className="flex flex-col gap-4 mb-8 ">
        <h3 className="font-bold mb-2 text-lg">Adhésions pour la saison 2024/2025</h3>
        <ul>
          {prices.map((price, index) => (
            <li key={index}>
              <p>
                <span className="font-bold">- {price.price} € </span> : {price.category}
                {price.time ? `(${price.time})` : null}.
              </p>
            </li>
          ))}
        </ul>
        <p className="font-bold text-solid">
        Séances d’essai avant finalisation de l’inscription.
        </p>
        <p className="font-bold text-solid">
          L&apos;adhésion comprend la cotisation au <strong>T.T. Farguais</strong> et la licence F.F.T.T. pour toute la saison.
        </p>
        <p className="font-bold text-solid">Réduction de 15€ à partir de la 2e licence dans la même famille.</p>
      </section>
      <section className="flex flex-col gap-4 mb-8 ">
        <p className="font-bold">
          - Certificat médical obligatoire pour les adultes et les jeunes si daté de plus de 3 ans.
        </p>

        <div>
          <h2 className="mb-8 text-xl font-extrabold text-solid mt-4">
            Documents à fournir obligatoirement :
          </h2>
          <ul className="flex flex-col gap-6">
            {documents.map((document, index) => (
              <li key={index} className="flex items-center justify-between hover:bg-contrast-2 p-2 rounded-xl">
                <p className="text-sm mr-4">{document.name} :</p>
                <div>
                  <a
                    href={document.pdf}
                    download={`${document.pdf}.pdf`}
                    className="text-solid py-1 px-4 border border-solid rounded-xl hover:text-contrast-1 hover:bg-solid text-sm transition-all"
                    aria-label={`Télécharger ${document.name}`}
                  >
                    Télécharger
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
       
    </section>
       <section className="w-full">
       <Maps></Maps>
     </section>
    </>
  )
}