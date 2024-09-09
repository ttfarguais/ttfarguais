export default function TrainingList({category}) {
  return (
    <li className="mb-6">
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
  )
}