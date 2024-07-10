import MemberCard from "../src/components/Main/Bureau/MemberCard";

export const metadata = {
  title: "T.T. Farguais - Le bureau",
  description:
    "Découvrez les membres du bureau du club de tennis de table de Fargues Saint Hilaire.",
}

export default function BureauPage(){

  const membres = [
    {firstname:"Jeremy", lastname:"THEVENET", job:"Président", img:"/imgClub/istockphoto-1464243593-1024x1024.jpg", alt: "Photo de Jeremy Thevenet"},
    {firstname:"Hugues", lastname:"CHAN-NG-YOK", job:"Vice-Président", img:"/imgClub/istockphoto-1464243593-1024x1024.jpg", alt: "Photo de Jeremy Thevenet"},
    {firstname:"Patrick", lastname:"MARTINEAU", job:"Trésorier", img:"/imgClub/adult-1851571_640.jpg", alt: "Photo de Patrick Martineau"},
    {firstname:"Stéphane", lastname:"AIMEE", job:"Secrétaire", img:"/imgClub/adult-1851571_640.jpg", alt: "Photo de Stéphane Aimee"},
    {firstname:"Agostinho José", lastname:"DUARTE", job:"Secrétaire-adjoint", img:"/imgClub/adult-1851571_640.jpg", alt: "Photo de Stéphane Aimee"},
    {firstname:"Maxime", lastname:"TOURNEAUX", job:"Entaineur", img:"/imgClub/adult-1851571_640.jpg", alt: "Photo de Maxime Tourneaux"},
    {firstname:"Emmanuel", lastname:"BOS", job:"Media", img:"/imgClub/adult-1851571_640.jpg", alt: "Photo de Emmanuel Bos"},
  ]

  return (
    <>
    <section className="p-6 md:w-4/6 m-auto 2xl:w-3/6 mb-10">
      <h1 className="text-xl text-center font-bold p-4 mb-8">Membres du bureau</h1>
      <div className="flex gap-6 md:gap-10 justify-center flex-wrap">
      {membres.map((membre, index) =>(
      <MemberCard membre={membre} key={index}></MemberCard>
      ))}
      </div>
    </section>
    </>
  )
}