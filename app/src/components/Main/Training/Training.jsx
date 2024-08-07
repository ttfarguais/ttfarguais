import Maps from '../Maps';
export default function Training() {

  const categories = [
    {
      name: "Adultes",
      schedules: [
        { day: "Lundi", time: "18h00 - 20h30", who: "Loisirs et tous compétiteurs", trainingType: "Entraînement libre et dirigé", coach: "AIMÉE Stéphane" },
        { day: "Mercredi", time: "19h30 - 20h30", who: "Loisirs et tous compétiteurs", trainingType: "Entraînement libre" },
      ]
    },
    {
      name: "Jeunes",
      schedules: [
        { day: "Mercredi", time: "14h00 - 15h30", who: "Initiation jeunes des écoles primaires-1ᵉʳ groupe *", trainingType: "Entraînement dirigé - Initiation", coach: "TOURNEAUX Maxime" },
        { day: "Mercredi", time: "15h30 - 17h30", who: "Initiation jeunes des collèges-Lycées 2ᵉ groupe *", trainingType: "Entraînement dirigé - Débutant", coach: "TOURNEAUX Maxime" },
        { day: "Mercredi", time: "17h30 - 19h30", who: "Initiation jeunes des collèges-lycées 3ᵉ groupe *", trainingType: "Entraînement dirigé", coach: "TOURNEAUX Maxime" },
      ]
    }
  ];

  
  return (
    <>
   <section className="p-6 md:w-4/6 m-auto 2xl:w-3/6">
    <h1 className="text-xl text-center font-bold p-4 mb-8">Entraînements</h1>

    <div className="flex flex-col justify-between mb-8 gap-6">
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-6">
            <h2 className="mb-8 text-xl font-extrabold text-solid mt-4">Horaires d&apos;entraînements {category.name}</h2>
            <ul className="flex flex-col w-full gap-6">
              {category.schedules.map((schedule, index) => (
                <li key={index}>
                  <p className="font-bold text-lg mb-2">{schedule.who}</p>
                  <p><span className='font-bold'>{schedule.day}</span> : {schedule.time}</p>
                  <p><span className="font-bold">Type :</span> {schedule.trainingType}</p>
                  {schedule.coach && <p><span className="font-bold">Entraîneur :</span> {schedule.coach}</p>}
                </li>
              ))}
            </ul  >
          </li>
        ))}
      </ul>

      <p>* Les groupes sont définis en fonction des effectifs dans chaque catégorie</p>
      <p className="font-bold text-solid">Les entraînements dirigés sont encadrés par un entraineur du Comité de Gironde, éducateur diplômé d’état.</p>

    </div>
   </section>
   <section>
       <Maps></Maps>
   </section>
    </>
  );
}