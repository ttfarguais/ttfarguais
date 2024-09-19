import trainingTimes from '../../../data/trainingTimes';
import Maps from '../../UI/Maps';
import TrainingList from './Training-list';
export default function Training() {
  return (
    <>
   <section className="p-6 md:w-4/6 m-auto 2xl:w-3/6">
    <h1 className="text-xl text-center font-bold p-4 mb-8">Entraînements</h1>

    <div className="flex flex-col justify-between mb-8 gap-6">
      <ul>
        {trainingTimes.map((category, index) => (
     
          <TrainingList key={index} category={category} />
        ))}
      </ul>

      <p>* Les groupes sont définis en fonction des effectifs dans chaque catégorie</p>
      <p className="font-bold text-solid">Les entraînements dirigés sont encadrés par un entraîneur du Comité de Gironde.</p>

    </div>
   </section>
   <section>
       <Maps></Maps>
   </section>
    </>
  );
}