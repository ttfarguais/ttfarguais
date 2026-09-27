const newsArticles = [
  {url: "https://www.fftt.com/actualites/federation/2eme-edition-de-la-semaine-de-lethique/", alt: "Club de tennis de table Farguais", title: "2e ÉDITION", description: "DE LA SEMAINE DE L'ÉTHIQUE", src:"/imgClub/ETHIQUE26.jpg"},
  {url: "/inscription", alt: "Club de tennis de table Farguais", title: "Saison sportive de Septembre à Mai", description: "Rejoignez le T.T. Farguais !", src:"/imgClub/club.jpg"},
  {url: "/article/evenements/anniversaire", alt: "30 ans d'histoire", title: "2022 l'anniversaire", description: "Déjà 30 ans que le T.T. Farguais existait, alors nous nous devions de fêter ça autour de quelques ping et deux, trois pong.", src:"/imgClub/birthday.jpg"},
  {  url: "/article/actu",
  alt: "Actualité club de tennis de table Farguais",
  title: "la refonte graphique",
  description: (
    <>
      Le T.T. Farguais mis à jour !
      <br className="sm:hidden" />
      {" "}Un changement important au sein de notre club.
    </>
  ),
  src: "/imgClub/raquette.jpg",
},
]

export default newsArticles;
