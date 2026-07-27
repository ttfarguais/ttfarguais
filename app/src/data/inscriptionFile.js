const times = [
  {day: "Lundi", time: "18h00 - 20h30"},
  {day: "Mercredi", time: "14h00 - 21h00"},
]

const documents = [
  { name: "Parcours de Prévention Santé : https://malicence.fftt.com"},
  { name: "Bordereau de demande de Licence", pdf: "/pdf/licence.pdf" },
  { name: "Fiche de renseignements Jeunes", pdf: "/pdf/TTF-Fiche-renseignements-jeunes.pdf" },
  {
    name: "Certificat Médical pour la pratique du Tennis de Table",
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
