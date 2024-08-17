import Inscription from "../src/components/Main/Inscription/Inscription";

export const metadata = {
  title: "T.T. Farguais - Inscription",
  description:
    "Rejoignez le club de tennis de table de Fargues Saint Hilaire. Retrouvez toutes les informations relatives à l'inscription.",
};


export default function inscriptionPage() {

  const prices = [
    { price: 135, category: "Adultes - Compétiteurs + entrainements libres" },
    { price: 155, category: "Adultes - Compétiteurs + entrainements dirigés" },
    { price: 95, category: "Adultes - Loisir + entrainements libres" },
    { price: 115, category: "Adultes - Loisirs + entrainements dirigés" },
    {
      price: 175,
      category: "Jeunes - Compétiteurs",
      time: "2h/semaine - 34 semaines",
    },
    { price: 160, category: "Jeunes - Loisirs", time: "1h30 ou 2h00/semaine - 34 semaines" },
  ];
  
  const times = [
    {day: "Lundi", time: "18h00 - 20h30"},
    {day: "Mercredi", time: "14h00 - 20h30"},
  ]
  
  const documents = [
    { name: "Bordereau de demande de licence", pdf: "/pdf/licence.pdf" },
    { name: "Fiche de renseignements jeune", pdf: "/pdf/TTF-Fiche-renseignements-jeunes.pdf" },
    {
      name: "Certificat pour médical pour la pratique du tennis de table (si plus de 3 ans)",
      important: false,
      pdf: "/pdf/certificat-medical.pdf",
    },
    { name: "Questionnaire de Santé pour personne Majeure (2 années consécutives sur 3)", pdf: "/pdf/autoquestionnaire-medical-majeur.pdf" },
    { name: "Questionnaire de Santé pour personne Mineure (2 années consécutives sur 3)", pdf: "/pdf/autoquestionnaire-medical-mineur.pdf" },
  ];

  const trainingStartDate = [
    {date: "lundi 2 septembre 2024"},//Nom a modifier remove adultes.
    {name: "jeunes", date: "mercredi 11 septembre 2024"}
  ]

  return (
    <>
    <head>
    <link rel="canonical" href="https://www.ttfarguais.fr/inscription" />
    </head>
   <Inscription times={times} prices={prices} documents={documents} trainingStartDate={trainingStartDate}></Inscription>
    </>
  );
}
