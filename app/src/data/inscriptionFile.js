const times = [
  {day: "Lundi", time: "18h00 - 20h30"},
  {day: "Mercredi", time: "14h00 - 21h00"},
]

const documents = [
  { name: "Bordereau de demande de licence", pdf: "/pdf/licence.pdf" },
  { name: "Fiche de renseignements jeune", pdf: "/pdf/TTF-Fiche-renseignements-jeunes.pdf" },
  {
    name: "Certificat médical pour la pratique du Tennis de Table",
    important: false,
    pdf: "/pdf/certificat-medical.pdf",
  },
  { name: "Questionnaire de Santé pour personne Majeure", pdf: "/pdf/autoquestionnaire-medical-majeur.pdf" },
  { name: "Questionnaire de Santé pour personne Mineure", pdf: "/pdf/autoquestionnaire-medical-mineur.pdf" },
];

const inscriptionFile = {
  name: "Contacts - Horaires - Tarifs",
  pdf: "/pdf/infos-rentree.pdf",
}

export { documents, inscriptionFile, times };
