import ClubMain from "../src/components/Main/Club/ClubMain";
import Cover from "../src/components/Main/Club/Cover";

export const metadata = {
  title: "TTFarguais - Le Club",
  description:
    "Club de tennis de table de Fargues Saint Hilaire depuis 1992. Toutes notre histoire et nos membres.",
};

export default function leClubPage (){
 
  // const membres = [
  //   {firstname:"Jeremy", lastname:"THEVENET", job:"President", img:"/imgClub/istockphoto-1464243593-1024x1024.jpg"},
  //   {firstname:"Patrick", lastname:"MARTINEAU", job:"Trésorier", img:"/imgClub/adult-1851571_640.jpg"},
  //   {firstname:"Stéphane", lastname:"AIMEE", job:"Secrétaire", img:"/imgClub/adult-1851571_640.jpg"},
  //   {firstname:"Mathis", lastname:"HUMBERT", job:"Entaineur", img:"/imgClub/adult-1851571_640.jpg"},
  //   {firstname:"Emmanuel", lastname:"BOS", job:"Media", img:"/imgClub/adult-1851571_640.jpg"}
  // ]

  return (
    <>
    <Cover />
    <ClubMain></ClubMain>
    </>
  )
}
