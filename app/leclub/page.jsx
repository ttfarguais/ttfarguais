import ClubBanner from "../src/components/Main/Club/ClubBanner";
import ClubStory from "../src/components/Main/Club/ClubStory";

export const metadata = {
  title: "T.T. Farguais - Le Club",
  description:
    "Club de tennis de table de Fargues Saint Hilaire depuis 1992. Retrouvez toute notre histoire depuis la création du club.",
};

export default function leClubPage (){
 
  return (
    <>
    <head>
    <link rel="canonical" href="https://www.ttfarguais.fr/leclub" />
    </head>
    <ClubBanner />
    <ClubStory />
    </>
  )
}
