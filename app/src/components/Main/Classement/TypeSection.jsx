import Image from "next/image"
export default function TypeSection({type, sectionTitle, modification}){
  return (
    <section className='flex flex-col gap-3 border-b mb-10'>
        <h2 className="font-bold text-lg mb-4 underline underline-offset-8">{sectionTitle} :</h2>
        <p>{modification}</p>
        <div className="flex gap-4 flex-wrap justify-around">

        {type.map((obj, index) => (
          <div key={index} className="flex flex-col mb-6 max-w-60 ">
            <h3 className="mb-2 font-bold text-lg">{obj.name} :</h3>
            <div className="flex gap-5 m-auto justify-center">
            <a
                    href={obj.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shadow-2xl relative"
                  >
                    <Image
                      src={obj.image}
                      width={500}
                      height={500}
                      alt={obj.alt}
                      className="w-auto"
                    ></Image>

                    <div className="absolute flex items-center justify-center bg-black top-0 left-0 z-10 h-full w-full uppercase font-bold text-contrast-1 bg-opacity-80 opacity-0 hover:opacity-80 transition-all">
                      Voir la fiche
                    </div>
                  </a>
            </div>
          </div>
        ))}
        </div>
      </section>
  )
}