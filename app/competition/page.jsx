'use client'
import CompComponent from "../src/components/Main/Competition/CompComponent"
export default function competitionPage (){
  
 const imageCompet = ["/competition/compet-1.jpg","/competition/compet-2.jpg","/competition/compet-3.jpg","/competition/compet-4.jpg","/competition/compet-5.jpg"]

 const imageCompetiteur = ["/competition/competiteur-1.jpg","/competition/competiteur-2.jpg","/competition/competiteur-3.jpg"]

  return (
    <>
    <h1 className="text-center font-bold p-6 text-lg">Competition</h1>
    <CompComponent images={imageCompet} titre={"Fiche de  competitions"}/>
    <CompComponent images={imageCompetiteur} titre={'Fiches Competiteur'}/>
    </>
  )
}
