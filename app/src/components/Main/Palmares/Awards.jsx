export default function Awards({awards}) {
  return (
    <section class="p-6 md:w-4/6 m-auto 2xl:w-3/6">
    <h1 class="text-xl text-center font-bold p-4 mb-8">Palmarès du T.T. Farguais</h1>
    <div class="border-l-2 mt-10">

      {awards.map((award, index) => (
      <article key={index} class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-contrast-2 text-contrast-3 rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
        <div class="w-5 h-5 bg-solid absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

        <div class="w-10 h-1 bg-contrast-2 absolute -left-10 z-0"></div>

        <div class="flex-auto">
          <h1 class="text-lg md:text-xl">{award.date}</h1>
          <h2 class="font-bold md:text-lg">{award.title}</h2>
        </div>
      </article>

      ))}
    </div>
  </section>

  )
}