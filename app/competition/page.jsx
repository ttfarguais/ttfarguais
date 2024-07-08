import CompComponent from "../src/components/Main/Competition/CompComponent";

export const metadata = {
  title: "TTFarguais - Compétition",
  description:
    "Retrouvez toutes les informations relatives aux compétitions du club de tennis de table de Fargues Saint Hilaire.",
};

export default function competitionPage (){
  
 const imageCompet = ["/competition/compet-1.jpg","/competition/compet-2.jpg","/competition/compet-3.jpg","/competition/compet-4.jpg","/competition/compet-5.jpg"]

 const imageCompetiteur = ["/competition/competiteur-1.jpg","/competition/competiteur-2.jpg","/competition/competiteur-3.jpg"]

  return (
    <>
    <h1 className="text-center font-bold p-6 text-xl">Competition</h1>
    <CompComponent images={imageCompet} title={"Fiche de  competitions"}/>
    <CompComponent images={imageCompetiteur} title={'Fiches Competiteur'}/>
    </>
  )
}
