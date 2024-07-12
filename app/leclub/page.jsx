import ClubMain from "../src/components/Main/Club/ClubMain";
import Cover from "../src/components/Main/Club/Cover";

export const metadata = {
  title: "T.T. Farguais - Le Club",
  description:
    "Club de tennis de table de Fargues Saint Hilaire depuis 1992. Retrouvez toute notre histoire depuis la création du club.",
};

export default function leClubPage (){
 
  return (
    <>
    <Cover />
    <ClubMain></ClubMain>
    </>
  )
}
