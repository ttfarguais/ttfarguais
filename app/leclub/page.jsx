'use client'
import { useEffect,useState } from "react"
import Image from "next/image"
import TTFLogoPlein from "../../public/TTFargues-logo-Plein.svg"
export default function leClubPage (){
  const membres = [
    {id:1, firstname:"Jeremy", lastname:"THEVENET", job:"President", img:"/istockphoto-1464243593-1024x1024.jpg"},
    {id:2, firstname:"Patrick", lastname:"MARTINEAU", job:"Tresorier", img:"/adult-1851571_640.jpg"},
    {id:3, firstname:"Stephane", lastname:"AIMEE", job:"Secretaire", img:"/adult-1851571_640.jpg"},
    {id:4, firstname:"Mathis", lastname:"HUMBERT", job:"Entaineur", img:"/adult-1851571_640.jpg"},
    {id:5, firstname:"Emmanuel", lastname:"BOS", job:"Media", img:"/adult-1851571_640.jpg"}
  ]

  return (
    <main >
      <section className="flex flex-col lg:flex-row gap-5 p-7 text-center lg:text-left">
      <article className="flex flex-col lg:flex-1  gap-5 text-xs font-bold ">
      <h1 className="text-lg "><strong>Tennis de table Farguais</strong></h1>
      <p>
          Créé à l’initiative d’Alain MOTILLON au cours de l’automne 1991, le <strong>TENNIS DE TABLE FARGUAIS</strong> obtient l’accord de la municipalité de <strong>FARGUES-St-HILAIRE</strong> afin d’utiliser la salle des fêtes pour ses entraînements et ses compétitions, puis dépose ses statuts en avril 1992, s’affilie à la FFTT et engage ainsi ses premières équipes en compétition pour la saison 1992/1993.
        </p> 
        <p>
        Les résultats ne se sont pas faits attendre puisque fort d’un recrutement de joueurs déjà aguerris, le premier titre de Champion de Gironde est acquis dès la première saison.
        </p>
        <p>
        A la rentrée 1993 la création d’une école de Tennis de Table s’est avérée évidente. Plusieurs titres sont remportés en jeunes ou en adultes.
        </p>
        <p>
        Cette école, encadrée par Stéphane AIMÉE, éducateur Diplômé d’État, va rapidement progresser tant par son effectif (de 20 à 35 jeunes selon les saisons) que par la qualité de leurs niveaux de jeu. Certains d’entre eux ont accédé aux compétitions régionales puis nationales et ont remporté plusieurs titres. Trois jeunes filles ont atteint les phases finales nationales par classement en 2003/2004 et un jeune garçon a fait un parcours exceptionnel depuis 2009. Certains jeunes ont été intégrés dans les équipes adultes et évoluent toujours avec elles.
        </p>
        <p>
        Notre éducateur organise des stages sportifs pendant les vacances scolaires ainsi que des initiations au sein de l’école primaire de FARGUES-St-HILAIRE et intervient plus récemment sur les TAPS (Temps d’Aménagement Péri- Scolaires) tous les vendredis après-midi depuis la rentrée 2014.
        </p>
        <p>
        A son apogée, à la fin des années 90, le club a atteint la centaine d’adhérents et continua à recruter pour faire monter l’équipe 1 en première division régionale.  Il entra dans le « Top 10 » des clubs aquitains, obtenant ainsi le Label Régional de la Ligue d’Aquitaine.
Depuis 2008, la nouvelle équipe municipale a accueilli de nouvelles associations entraînant des restrictions de créneaux d’entraînements pour le Tennis de  Table. Nous nous réservions alors à une cinquantaine de licenciés, nous limitant à l’accueil de 24 jeunes.
        </p>
        <p>
        En 2014, un nouveau changement de municipalité vote le projet de construction d’une salle polyvalente qui a vu le jour en 2017, le club l’utilise de façon régulière pour les entraînements en semaine et les WE pour les rencontres compétitives quand la disponibilité le permet.
        </p>
      </article>
      <div className="flex justify-center items-start lg:order-first flex-1 items-center">
        <Image src={TTFLogoPlein} width={150} height={150}  alt="Logo TTFarguais" className="lg:w-[300px] h-[300px]" />
      </div>
      </section>
      <section className="bg-contrast-1 pt-3 lg:p-5">
        <h1 className="text-center text-lg font-bold ">Membres du bureau</h1>
        <div className="flex flex gap-3 p-3  justify-between flex-wrap">
        {membres.map((membre) =>(
          <article key={membre.id} className="m-auto lg:m-0 p-3">
          <h2 className="text-center font-bold pb-3">{membre.job}</h2>
          <Image src={membre.img} width={100} height={100} alt="photo des membres du bureau" className="m-auto w-[100px] h-[100px] object-cover object-top"/>
          <h2 className="font-bold pt-3">{membre.lastname.toUpperCase()} {membre.firstname}</h2>
        </article>
        ))}
        </div>
      </section>
    </main>
  )
}
