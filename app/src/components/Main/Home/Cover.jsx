import ButtonCover from "../ButtonCover"
export default function Cover(){
  return (
   <section>

<section className="mb-16">
      <div className={`relative flex w-full h-56 sm:h-68 md:h-72 lg:h-96  bg-ttfarguais bg-cover bg-bottom items-center px-8 py-6 sm:p-10 md:p-16 md:justify-center`}>
        <div aria-hidden="true" className="absolute z-0 inset-0 w-full bg-black opacity-60 h-56 sm:h-68 md:h-72 lg:h-96" ></div>
        <div className="relative text-contrast-1 xl:w-4/6">
        <h1 className="text-3xl md:text-5xl uppercase mb-2 md:mb-4 font-bold flex flex-col">Tennis de table <span>Farguais</span></h1>
        <p className=" mb-2 md:mb-4 md:text-2xl"> Plaisir, Passion et Champions !</p>
        <ButtonCover url='/leclub' title='En savoir plus'></ButtonCover>
        </div>
      </div>
    </section>
   </section>
  )
}