const trainingTimes = [
  {
    name: "Adultes",
    schedules: [
      { day: "Lundi", time: "18h00 - 20h30", who: "Loisirs et compétiteurs"},
      { day: "Mercredi", time: "19h00 - 21h00", trainingType: "Jeux libre" },
      { day: "Mercredi", time: "19h00 - 20h00", trainingType: "Entraînement dirigé : 12 joueurs", coach: "Maxime TOURNAUX" },
 
    ]
},
  {
    name: "Spécifiques Jeunes le Mercredi",
    schedules: [

      { time: "14h00 - 15h30", who: "Initiation écoles primaires : Groupe 1*" },
      { time: "15h30 - 17h00", who: "Débutants collèges-lycées : Groupe 2*" },
      { time: "17h00 - 19h00", who: "Confirmés collèges-lycées : Groupe 3*", trainingType: "Entraînement dirigé", coach: "Maxime TOURNAUX" },
    ]
  }
];

export default trainingTimes;
