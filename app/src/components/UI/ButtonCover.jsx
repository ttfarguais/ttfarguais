import Link from "next/link"
export default function ButtonCover({title, url}){
  return(
    <button className=" text-contrast-1 py-1 px-4 border rounded-xl border-contrast-1 text-sm hover:bg-contrast-1 hover:text-contrast-3 transition-all">
    <Link href={url} className="font-bold">{title}</Link>
    </button>
  )
}