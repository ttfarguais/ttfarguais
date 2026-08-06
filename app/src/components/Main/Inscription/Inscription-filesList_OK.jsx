
export default function InscriptionilesList({document}) {
  return (
    <li className="flex items-center justify-between hover:bg-contrast-2 p-2 rounded-xl">
    <p className="mr-4">{document.name} :</p>
    <div>
      
        <a
          href={document.pdf}
          target="_blank"
          rel="noopener noreferrer"
           className="bg-solid text-contrast-1 py-1 px-4 border border-solid rounded-xl hover:bg-white hover:text-solid text-sm transition-all"
          aria-label={`Ouvrir ${document.name}`}
        >
          Ouvrir
        </a>

    </div>
  </li>
  )
}

      
