import Inscription from "../src/components/Main/Inscription/Inscription";

export const metadata = {
  title: "T.T.Farguais - Inscription",
  description:
    "Rejoignez le club de tennis de table de Fargues Saint Hilaire. Retrouvez toutes les informations relatives à l'inscription.",
};


export default function inscriptionPage() {

  const prices = [
    { price: 120, category: "Adultes - Compétiteurs" },
    { price: 80, category: "Adultes - Loisirs" },
    {
      price: 160,
      category: "Jeunes - Compétiteurs",
      time: "2h/semaine - 50h/saison",
    },
    { price: 145, category: "Jeunes - Loisirs", time: "2h/semaine - 50h/saison" },
  ];
  
  const times = [
    {day: "Lundi", time: "18h00 - 20h00"},
    {day: "Mercredi", time: "15h00 - 20h30"},
  ]
  
  const documents = [
    { name: "Bordereau de demande de licence", pdf: "/pdf/licence.pdf" },
    { name: "Fiche de renseignement jeune *", pdf: "/pdf/TTF-Fiche-renseignements-jeunes.pdf" },
    {
      name: "Certificat pour médical pour la pratique du tennis de table",
      pdf: "/pdf/certificat-medical.pdf",
    },
    { name: "Questionnaire de Santé pour personne Majeur *", pdf: "/pdf/autoquestionnaire-medical-majeur.pdf" },
    { name: "Questionnaire de Santé pour personne Mineur *", pdf: "/pdf/autoquestionnaire-medical-mineur.pdf" },
  ];

  return (
   <Inscription times={times} prices={prices} documents={documents}></Inscription>
  );
}
