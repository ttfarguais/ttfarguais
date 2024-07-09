import MemberCard from "../src/components/Main/Club/MemberCard";
export default function Bureau(){

  const membres = [
    {firstname:"Jeremy", lastname:"THEVENET", job:"President", img:"/imgClub/istockphoto-1464243593-1024x1024.jpg"},
    {firstname:"Patrick", lastname:"MARTINEAU", job:"Trésorier", img:"/imgClub/adult-1851571_640.jpg"},
    {firstname:"Stéphane", lastname:"AIMEE", job:"Secrétaire", img:"/imgClub/adult-1851571_640.jpg"},
    {firstname:"Mathis", lastname:"HUMBERT", job:"Entaineur", img:"/imgClub/adult-1851571_640.jpg"},
    {firstname:"Emmanuel", lastname:"BOS", job:"Media", img:"/imgClub/adult-1851571_640.jpg"}
  ]

  return (
    <>
    <section className="bg-contrast-2 px-4 py-10">
      <h1 className="text-center text-lg font-bold uppercase mb-10">Membres du bureau</h1>
      <div className="flex gap-6 md:gap-16  justify-center flex-wrap">
      {membres.map((membre, index) =>(
      <MemberCard membre={membres} key={index}></MemberCard>
      ))}
      </div>
    </section>
    </>
  )
}