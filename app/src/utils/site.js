const siteLinks = [
  { title: "Accueil", url: "/" },
  {
    title: "Le club",
    url: "/leclub",
    subLinks: [
      { title: "Entrainements", url: "/entrainements" },
      { title: "Le bureau", url: "/bureau" },
      { title: "Palmarès", url: "/palmares" },
    ],
  },
  { title: "Inscription", url: "/inscription" },
  {
    title: "Compétition",
    url: "/competition",
    subLinks: [{ title: "Joueurs", url: "/classement" }],
  },
  { title: "Tournois", url: "/tournois" },
  { title: "Contact", url: "/contact" },
];

export default siteLinks;