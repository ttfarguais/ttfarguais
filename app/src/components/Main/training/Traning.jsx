export default function Training() {

  const categories = [
    {
      name: "Adultes",
      schedules: [
        { day: "Lundi", time: "18h00 - 20h00", who: "Loisirs et tous compétiteurs", trainingType: "entraînement libre" },
        { day: "Mercredi", time: "19h00 - 20h30", who: "Loisirs et compétiteurs débutants", trainingType: "entraînement libre" },
      ]
    },
    {
      name: "Jeunes",
      schedules: [
        { day: "Lundi", time: "18h00 - 20h00", who: "Compétiteurs 'élite jeunes' avec adultes compétiteurs", trainingType: "entraînement libre" },
        { day: "Mercredi", time: "15h00 - 17h00", who: "Jeunes des écoles primaires", trainingType: "entraînement dirigé - initiation" },
        { day: "Mercredi", time: "17h00 - 19h00", who: "Jeunes des collèges/lycées", trainingType: "entraînement dirigé" },
      ]
    }
  ];

  return (
   <section>
    <h1>Entrainement</h1>

    <div>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <h2>Horraires entrainements {category.name}</h2>
            <ul>
              {category.schedules.map((schedule, index) => (
                <li key={index}>
                  <p>{schedule.day} : {schedule.time}</p>
                  <p>{schedule.who}</p>
                  <p>{schedule.trainingType}</p>
                </li>
              ))}
            </ul  >
          </li>
        ))}
      </ul>

    </div>
   </section>
  );
}