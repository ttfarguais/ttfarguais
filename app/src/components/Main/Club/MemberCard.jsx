import Image from "next/image"
export default function MemberCard({membre}){
  return (
    <article className="flex flex-col gap-2">
    <h2 className="text-center font-bold text-lg">{membre.job}</h2>
    <Image src={membre.img}
    width={100}
    height={100}
    alt="photo des membres du bureau"
    className="m-auto w-32 h-32 object-cover object-top rounded-xl"/>
    <strong className="text-center">{membre.lastname} {membre.firstname}</strong>
  </article>
  )
}