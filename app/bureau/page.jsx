import MemberCard from "../src/components/Main/Bureau/MemberCard";
export const metadata = {
  title: "T.T. Farguais - Le bureau",
  description:
    "Découvrez les membres du bureau du club de tennis de table de Fargues Saint Hilaire.",
}

import membres from "../src/data/membres";
export default function BureauPage(){

  return (
    <>
    <head>
    <link rel="canonical" href="https://www.ttfarguais.fr/bureau" />
    </head>
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