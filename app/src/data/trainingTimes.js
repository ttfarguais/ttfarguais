const trainingTimes = [
  {
    name: "Adultes",
    schedules: [
      { day: "Lundi", time: "18h00 - 20h30", who: "Loisirs et compétiteurs", trainingType: "Entraînement libre" },
      { day: "Mercredi", time: "19h30 - 21h00", trainingType: "Entraînement libre et dirigé", coach: "Stéphane AIMÉE" },
    ]
  },
  {
    name: "Jeunes",
    schedules: [

      { day: "Mercredi", time: "14h00 - 15h30", who: "Initiation jeunes des écoles primaires : 1ᵉʳ groupe *", trainingType: "Entraînement dirigé - Initiation", coach: "Maxime TOURNAUX" },
      { day: "Mercredi", time: "15h30 - 17h00", who: "Initiation jeunes des collèges-lycées : 2ᵉ groupe *", trainingType: "Entraînement dirigé - Débutants", coach: "Maxime TOURNAUX" },
      { day: "Mercredi", time: "17h00 - 19h00", who: "Initiation jeunes des collèges-lycées : 3ᵉ groupe *", trainingType: "Entraînement dirigé - Confirmés", coach: "Maxime TOURNAUX" },
    ]
  }
];

export default trainingTimes;
