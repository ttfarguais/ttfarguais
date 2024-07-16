import ImageAndClick from "../ImageAndClick";
export default function AticleTournaments({ trophy }) {
  return (
  <section className="flex flex-col">
      <div className="flex flex-col gap-4 m-auto">
        <ImageAndClick
          src={trophy.image}
          href={trophy.image}
          alt={trophy.alt}
          actionTitle={"Afficher le trophé"}
        ></ImageAndClick>
        <h2 className="font-bold text-lg text-center">{trophy.titleTrophy}</h2>
      </div>
      <div class="flex flex-col mt-10 flex-wrap border-l-2">
        {trophy.bio.map((winner, index) => (
          <article
            key={index}
            class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex px-6 py-4 bg-contrast-2 text-contrast-3 rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0"
          >
            <div class="w-5 h-5 bg-solid absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            <div class="w-10 h-1 bg-contrast-2 absolute -left-10 z-0"></div>

            <div class="flex-auto">
              <p class="text-lg md:text-xl">{winner.year}</p>
              <div className="flex flex-col md:flex-row justify-between">
                <p class="font-bold md:text-lg">Vainceur : {winner.name}</p>
                {winner.vs && (
                  <p class="font-bold md:text-lg">Adversaire : {winner.vs}</p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
  </section>
    
  );
}
