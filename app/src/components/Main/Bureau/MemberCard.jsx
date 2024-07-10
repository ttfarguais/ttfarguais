import Image from "next/image"
export default function MemberCard({membre}){
  return (
    <article className="flex flex-col gap-4 bg-contrast-2 rounded-xl shadow p-10 w-50">
    <Image src={membre.img}
    width={100}
    height={100}
    alt={membre.alt}
    className="m-auto w-40 h-40 object-cover object-top rounded-full"/>
    <strong className="text-center text-lg text-solid font-extrabold">{membre.lastname} {membre.firstname}</strong>
    <p className="text-center text-sm">{membre.job}</p>
  </article>
  )
}