const trainingTimes = [
  {
    name: "Adultes",
    schedules: [
      { day: "Lundi", time: "18h00 - 20h30", who: "Loisirs et compétiteurs", trainingType: "Entraînement libre" },
      { day: "Mercredi", time: "19h00 - 20h00", trainingType: "Entraînement dirigé", coach: "Maxime TOURNAUX" },
      { day: "Mercredi", time: "19h00 - 21h00", trainingType: "Entraînement libre" },
    ]
},
  {
    name: "Jeunes",
    schedules: [

      { day: "Mercredi", time: "14h00 - 15h30", who: "Initiation écoles primaires : Groupe 1*", trainingType: "Entraînement dirigé - Initiation", coach: "Maxime TOURNAUX" },
      { day: "Mercredi", time: "15h30 - 17h00", who: "Initiation collèges-lycées : Groupe 2*", trainingType: "Entraînement dirigé - Débutants", coach: "Maxime TOURNAUX" },
      { day: "Mercredi", time: "17h00 - 19h00", who: "Initiation collèges-lycées : Groupe 3*", trainingType: "Entraînement dirigé - Confirmés", coach: "Maxime TOURNAUX" },
    ]
  }
];

export default trainingTimes;
