import Link from "next/link"
export default function ButtonGreen({title, url}){
  return(
    <button className=" text-contrast-1 py-1 px-4 rounded-xl bg-solid text-sm hover:text-contrast-3 transition-all">
    <Link href={url} className="font-bold">{title}</Link>
    </button>
  )
}