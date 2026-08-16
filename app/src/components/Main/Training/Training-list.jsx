export default function TrainingList({category}) {
  return (
    <li className="mb-6">
    
      
      <h2
  className={`mb-8 text-xl font-extrabold text-solid ${
    category.name === "Jeunes" ? "mt-14" : "mt-4"
  }`}
>
  Créneaux {category.name}
</h2>

      

    <ul className="flex flex-col w-full gap-6">
      {category.schedules.map((schedule, index) => (
        <li key={index}>
          <p className="font-bold text-lg mb-2">{schedule.who}</p>
          <p><span className='font-bold'>{schedule.day}</span> {schedule.time}</p>
          <p><span className="font-bold"></span> {schedule.trainingType}</p>
          {schedule.coach && <p><span className="font-bold">Entraîneur :</span> {schedule.coach}</p>}
        </li>
      ))}
    </ul  >
  </li>
  )
}
