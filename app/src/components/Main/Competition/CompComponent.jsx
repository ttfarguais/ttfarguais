import Image from "next/image";

export default function compComponent({ images, titre }) {
  return (
    <>
     
      <section className="p-5">
        <div>
          <h2 className="font-bold text-center p-5 ">{titre}</h2>
        </div>
        <div className="flex flex-wrap gap-5 m-auto justify-center">
        {Array.isArray(images) ? images.map((img, index) => (
          <a key={index} href={img} target="_blank" rel="noopener noreferrer" className="shadow-xl">
            <Image src={img} width={300} height={300} alt="test" />
          </a>
        )) : null}
        </div>
      
      </section>
    </>
  )
}