'use client'
import ClubMain from "../src/components/Main/Club/ClubMain"
import Cover from "../src/components/Main/Club/Cover"
export default function leClubPage (){
 
  const membres = [
    {firstname:"Jeremy", lastname:"THEVENET", job:"President", img:"/istockphoto-1464243593-1024x1024.jpg"},
    {firstname:"Patrick", lastname:"MARTINEAU", job:"Trésorier", img:"/adult-1851571_640.jpg"},
    {firstname:"Stéphane", lastname:"AIMEE", job:"Secrétaire", img:"/adult-1851571_640.jpg"},
    {firstname:"Mathis", lastname:"HUMBERT", job:"Entaineur", img:"/adult-1851571_640.jpg"},
    {firstname:"Emmanuel", lastname:"BOS", job:"Media", img:"/adult-1851571_640.jpg"}
  ]

  return (
    <>
    <Cover />
    <ClubMain membres={membres}></ClubMain>
    </>
  )
}
