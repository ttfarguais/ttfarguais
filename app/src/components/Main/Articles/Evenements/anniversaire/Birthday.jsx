import GroupPicture from "../../../../../../../public/imgClub/birthday.jpg";
import GroupPicture2 from "../../../../../../../public/imgClub/birthday2.jpg";
import ImageAndClick from "../../../../UI/ImageAndClick";
export default function Birthday() {
  return (
    <section className="mb-16 md:w-4/6 m-auto 2xl:w-3/6">
      <div className="p-6">
        <h1 className="text-xl text-center font-bold p-4 mb-8">
          Wouah ! 30 ans déjà !
        </h1>

        <div className="flex flex-col justify-between mb-8 gap-6 text-justify">
          <p>
            2022, le <strong className="inline-block">T.T. Farguais</strong>, notre cher club de tennis de
            table de
            <strong> Fargues Saint-Hilaire</strong>, célèbre son
            30ᵉ anniversaire et quel événement mémorable ce fut ! Cette
            journée spéciale restera gravée dans les mémoires de tous les
            participants, tant par les moments de convivialité que par les
            affrontements sportifs passionnés.
          </p>

          <div className="flex justify-around ">
          <ImageAndClick
            src={GroupPicture2}
            alt="Photo de groupe du T.T. Farguais"
            href={GroupPicture2.src} // L'URL de l'image pour l'ouvrir dans un nouvel onglet
            actionTitle={"Afficher l'image en grand"}
          />
          </div>

          <h2 className="font-bold text-lg">Un repas convivial</h2>
          <p>
            Pour marquer ces trois décennies d&lsquo;existence, nous nous sommes
            retrouvés autour d&lsquo;un repas chaleureux. Les tables étaient
            garnies de délicieux plats et l&lsquo;atmosphère était à la fois
            festive et nostalgique. Anciens et actuels membres du club, familles
            et amis se sont réunis pour échanger des souvenirs, raconter des
            anecdotes et célébrer ensemble l&lsquo;histoire riche et vibrante du{" "}
            <strong className="inline-block">T.T. Farguais</strong>. Les éclats de rires, les
            discussions animées et les sourires étaient omniprésents.
          </p>
          <h2 className="font-bold text-lg">Des affrontements endiablés</h2>
          <p>
            Après le repas, les choses sérieuses ont commencé avec des matchs endiablés. Les tables étaient en permanence occupées
            par des joueurs allant des jeunes talents prometteurs aux vétérans
            du club. Chaque match était une démonstration d&lsquo;adresse, de
            stratégie et surtout de passion pour ce sport. Les applaudissements,
            les encouragements et les acclamations ont résonné tout au long de
            l&lsquo;après-midi, créant une ambiance électrisante.
          </p>
          <h2 className="font-bold text-lg">Fun et bonne humeur</h2>
          <p>
            En plus des matchs, de nombreuses activités et surprises ont rythmé
            cette journée. Des jeux, des défis et des démonstrations ont apporté
            une touche de fun supplémentaire à l&lsquo;événement en partie grâce à la présence de Didier MOMMESSIN (numéroté Français). Petits et
            grands ont pu participer, s&lsquo;amuser et partager des moments de
            franche rigolade. L&lsquo;esprit de camaraderie et de bonne humeur
            qui fait la force de notre club était palpable. Cette célébration
            des 30 ans du {" "}
            <strong className="inline-block">T.T. Farguais</strong> a été un véritable succès. Elle
            nous a permis de renforcer les liens, de célébrer notre histoire et
            de regarder vers l&lsquo;avenir avec optimisme et enthousiasme.
            Merci à tous ceux qui ont participé à cet événement inoubliable.
            Nous avons hâte de continuer à écrire ensemble les prochaines pages
            de l&lsquo;histoire du <strong className="inline-block">T.T. Farguais</strong>.
          </p>
        </div>
        <div className="flex justify-around ">
        
        <ImageAndClick
            src={GroupPicture}
            alt="Photo de groupe du T.T. Farguais"
            href={GroupPicture.src} // L'URL de l'image pour l'ouvrir dans un nouvel onglet
            actionTitle={"Afficher l'image en grand"}
          />
        </div>
      </div>
    </section>
  );
}
