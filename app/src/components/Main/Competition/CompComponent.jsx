import Image from "next/image";

export default function compComponent({ images, titre }) {

  // const openFile = () => {
  //   return (
  //     <div className={`absolute flex items-center justify-center bg-black top-0 left-0 z-10 h-full w-full uppercase font-bold text-contrast-1 bg-opacity-80`}>Voir la fiche</div>
  //   )
  // }

  return (
    <>
      <section className="p-5 mb-8">
        <div>
          <h2 className="font-bold text-center mb-4 ">{titre} :</h2>
        </div>
        <div className="flex flex-wrap gap-5 m-auto justify-center">
        {Array.isArray(images) ? images.map((img, index) => (
          
          <a key={index} href={img} target="_blank" rel="noopener noreferrer" className="shadow-2xl relative">
          <Image src={img} width={300} height={300} alt="test" />
          <div className="absolute flex items-center justify-center bg-black top-0 left-0 z-10 h-full w-full uppercase font-bold text-contrast-1 bg-opacity-80 opacity-0 hover:opacity-80 transition-all">Voir la fiche</div>
        </a>
        )) : null}
        </div>
      
      </section>
    </>
  )
}