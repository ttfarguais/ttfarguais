const siteLinks = [
  { title: "Accueil", url: "/" },
  {
    title: "Le club",
    url: "/leclub",
    subLinks: [
      
      { title: "Le bureau", url: "/bureau" },
      { title: "Tournois", url: "/tournois" },
      { title: "Palmarès", url: "/palmares" },
    ],
  },
  { title: "Entrainements", url: "/entrainements" },
  { title: "Inscription", url: "/inscription" },
  {
    title: "Compétition",
    url: "/competition",
    subLinks: [{ title: "Compétiteurs", url: "/competiteurs" }],
  },
  { title: "Contact", url: "/contact" },
];

export default siteLinks;