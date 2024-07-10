import AnnouncementCard from "./AnnouncementCard";

const announcements = [
  {url: "/article/actu", alt: "Actualité club de tennis de table Farguais", title: "T.T.Farguais, la refonte graphique", description: "Le club des T.T.Farguais se met à jour ! Un changement important au sein de notre club trentenaire.", src:"/imgClub/raquette.jpg"},
  {url: "/inscription", alt: "Club de tennis de table Farguais", title: "Nouvelle Saison 2024/2025", description: "Inscrivez-vous dés maintenant et rejoignez les T.T.Farguais !", src:"/imgClub/club.jpg"},
  // {url: "/article/test3", alt: "Club de tennis de table Farguais", title: "Tournoi Amical", description: "Participez à notre tournoi amical et gagnez des prix !", src:"/imgClub/club.jpg"},
]


export default function Announcement() {
  return (
    <section className="bg-contrast-2 border-t flex flex-col items-center py-6">
      {announcements.map((announcement, index) => (
        <AnnouncementCard 
          src={announcement.src}
          key={index}
          url={announcement.url}
          alt={announcement.alt}
          title={announcement.title}
          description={announcement.description}
          isLast={index === announcements.length - 1}
        />
      ))}
    </section>
  );
}

