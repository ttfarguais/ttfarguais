const trainingTimes = [
  {
    name: "Adultes",
    schedules: [
      { day: "Lundi :", time: "18h00 - 20h30 -> Jeux Libre", who: "Pour Tous" },
      { day: "Mercredi :", time: "19h00 - 21h00 -> Jeux Libre" },
      { day: "Mercredi :", time: "19h00 - 20h00", trainingType: "Entraînement dirigé : 12 joueurs", coach: "Maxime TOURNAUX" },
 
    ]
},
  {
    name: "Jeunes",
    schedules: [

      { coach: "Maxime TOURNAUX", who: "Mercredi : Entraînement dirigé" },
      { time: "14h00 - 15h30", who: "Initiation Écoles Primaires : Groupe 1*" },
      { time: "15h30 - 17h00", who: "Débutants Collèges-Lycées : Groupe 2*" },
      { time: "17h00 - 19h00", who: "Confirmés Collèges-Lycées : Groupe 3*" },
    ]
  }
];

export default trainingTimes;
