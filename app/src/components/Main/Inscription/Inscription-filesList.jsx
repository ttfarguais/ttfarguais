
export default function InscriptionilesList({document}) {
  return (
    <li className="flex items-center justify-between hover:bg-contrast-2 p-2 rounded-xl">
    <p className="mr-4">{document.name} :</p>
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
  )
}
