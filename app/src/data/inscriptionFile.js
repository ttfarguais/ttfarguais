const times = [
  {day: "Lundi", time: "18h00 - 20h30"},
  {day: "Mercredi", time: "19h30 - 21h00"},
]

const documents = [
  { name: "Bordereau de demande de licence", pdf: "/pdf/licence.pdf" },
  { name: "Fiche de renseignements jeune", pdf: "/pdf/TTF-Fiche-renseignements-jeunes.pdf" },
  {
    name: "Certificat médical pour la pratique du tennis de table (si plus de 5 ans)",
    important: false,
    pdf: "/pdf/certificat-medical.pdf",
  },
  { name: "Questionnaire de Santé pour personne Majeure (2 années consécutives sur 3)", pdf: "/pdf/autoquestionnaire-medical-majeur.pdf" },
  { name: "Questionnaire de Santé pour personne Mineure (2 années consécutives sur 3)", pdf: "/pdf/autoquestionnaire-medical-mineur.pdf" },
];

const inscriptionFile = {
  name: "Contacts - Horaires - Tarifs",
  pdf: "/pdf/infos-rentree.pdf",
}

export { documents, inscriptionFile, times };
