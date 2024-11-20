import Link from "next/link"
export default function AnnouceBar({text, link}) {
  return (
    <div className="w-full bg-solid">
      <p className="w-full p-2 text-contrast-1 text-center">{text} {link ? <Link href={link} className="underline underline-offset-4">Cliquez ici</Link> : null}</p>
    </div>
  )
}