const times = [
  {day: "Lundi", time: "18h00 - 20h30"},
  {day: "Mercredi", time: "14h00 - 20h30"},
]

const documents = [
   { name: "Parcours de Prévention Santé (PPS)", pdf: "https://malicence.fftt.com",
      tutorial: "https://www.youtube.com/watch?v=JuIKNZKWKG8"},  
  { name: "Questionnaire de Santé pour Majeur", pdf: "/pdf/autoquestionnaire-medical-majeur.pdf" },
  { name: "Questionnaire de Santé pour Mineur", pdf: "/pdf/autoquestionnaire-medical-mineur.pdf" },
  { name: "Certificat Médical",
    important: false,
    pdf: "/pdf/certificat-medical.pdf",},
  { name: "Bordereau de Licence", pdf: "/pdf/licence.pdf" },
  { name: "Fiche de renseignements Jeunes", pdf: "/pdf/TTF-Fiche-renseignements-jeunes.pdf" },

];

const inscriptionFile = {
  name: "Contacts - Horaires - Tarifs",
  pdf: "/pdf/infos-rentree.pdf",
}

export { documents, inscriptionFile, times };
