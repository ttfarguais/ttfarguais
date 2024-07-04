export default function Inscription({times, prices, documents}) {
  return (
    <section className="p-6 md:w-4/6 m-auto 2xl:w-3/6">

      <h1 className="text-xl text-center font-bold p-4 mb-8">Inscrivez-vous à n&apos;importe quelle période de l&apos;année !</h1>

      <div className="flex flex-col md:flex-row justify-between mb-8 ">
        <div className="mb-4 md:mb-0">
        <p>
          <strong>TT Farguais</strong>
        </p>
        <p>Carré des Forges</p>
        <p>3 av. de la Laurence</p>
        <p>33370 Fargues Saint Hilaire</p>
        </div>
        <div>
          {times.map((time, index) => (
            <p key={index}>
              <span className="font-bold">{time.day}:</span> {time.time}
            </p>
          ))}
        </div>
      </div>

      <section className="flex flex-col gap-4 mb-8 ">
        <h3 className="font-bold mb-2">Adhésion pour la saison 2022/2024</h3>
        <ul className="">
          {prices.map((price, index) => (
            <li key={index}>
              <p>
                <span className="font-bold">- {price.price}</span>: {price.category}{" "}
                {price.time ? `(${price.time})` : null}.
              </p>
            </li>
          ))}
        </ul>
        <p className="font-bold text-solid">
          L&apos;adhésion comprend la cotisation au TT Farguais et la licence F.F.T.T. pour toute la saison.
        </p>
        <p className="font-bold text-solid">Réduction de 10€ à partir de la 2e licence dans la même famille</p>
      </section>
      <section className="flex flex-col gap-4 mb-8 ">
        <p className="font-bold">
          - Certificat médical obligatoire (si daté de plus de 3 ans) pour les adultes.
        </p>
        <p  className="font-bold mb-4">- Certificat médical fortement conseillé pour les jeunes.</p>

        <div>
          <h2 className="mb-8">
            Documents à fournir (<span>* À fournir obligatoirement</span>)
          </h2>
          <ul className="flex flex-col gap-6">
            {documents.map((document, index) => (
              <li key={index} className="flex items-center justify-between hover:bg-contrast-2">
                <p className="text-sm mr-4">{document.name}:</p>
                <div>
                  <a
                    href={document.pdf}
                    download={`${document.pdf}.pdf`}
                    className="text-contrast-1 py-1 px-4 rounded-xl bg-solid text-sm hover:bg-contrast-3 transition-all"
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
  )
}