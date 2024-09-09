import Link from "next/link"
export default function ButtonGreen({title, url}){
  return(
    <button className=" text-contrast-3 py-1 px-4 rounded-xl border border-contrast-3 text-sm hover:bg-solid border-solid hover:text-contrast-1 transition-all">
    <Link href={url} className="font-bold" aria-label="lire l'article">{title}</Link>
    </button>
  )
}