export default function InscriptionFilesList({ document }) {
  return (
    <div className="flex items-center justify-between hover:bg-contrast-2 p-2 rounded-xl">
      <p className="mr-4">
        {document.name === "Questionnaire de Santé pour Majeur" ? (
          <>
            Questionnaire de Santé <br className="sm:hidden" />
            pour Majeur
          </>
        ) : document.name === "Questionnaire de Santé pour Mineur" ? (
          <>
            Questionnaire de Santé <br className="sm:hidden" />
            pour Mineur
          </>
        ) : (
          <>
            {document.name}
          </>
        )}
      </p>

      <div className="flex gap-2">
        {document.tutorial && (
          <a
            href={document.tutorial}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-solid text-contrast-1 py-1 px-4 border border-solid rounded-xl hover:bg-white hover:text-solid text-sm transition-all"
            aria-label={`Voir le tutoriel ${document.name}`}
          >
            Tuto
          </a>
        )}

        <a
  href={document.pdf}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-red-600 text-white py-1 px-4 border border-red-600 rounded-xl hover:bg-red-700 text-sm transition-all animate-pulse"
  aria-label={`Ouvrir ${document.name} - obligatoire`}
>
  Ouvrir — Obligatoire
</a>
      </div>
    </div>
  );
}
