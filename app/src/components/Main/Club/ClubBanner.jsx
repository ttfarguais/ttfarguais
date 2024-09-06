export default function Cover() {
  return (
 
      <section>
        <div
          className={`relative flex w-full h-56 sm:h-68 md:h-72 lg:h-96  bg-ttfCreate bg-cover bg-center items-center justify-center px-8 py-6 `}
        >
          <div
            aria-hidden="true"
            className="absolute z-0 inset-0 w-full bg-black opacity-50 h-56 sm:h-68 md:h-72 lg:h-96"
          ></div>
          <div className="relative text-contrast-1  flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-5xl uppercase mb-2 font-bold">
              Notre Histoire
            </h1>
            <p className=" mb-2 md:text-2xl text-center">Alain MOTILLON</p>
          </div>
        </div>
      </section>
    
  );
}
