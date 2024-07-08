import AnnouncementCard from "./AnnouncementCard";

const announcements = [
  {id:1, url: "/article/test", alt: "Club de tennis de table Farguais", title: "Championnats Régionaux", description: "Rejoignez-nous pour les championnats régionaux ce samedi !", src:"/imgClub/champion.jpg"},
  {id:2, url: "/article/inscription", alt: "Club de tennis de table Farguais", title: "Nouvelle Saison", description: "Inscrivez-vous pour la nouvelle saison dès maintenant !", src:"/imgClub/raquette.jpg"},
  {id:3, url: "/article/test3", alt: "Club de tennis de table Farguais", title: "Tournoi Amical", description: "Participez à notre tournoi amical et gagnez des prix !", src:"/imgClub/club.jpg"},
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
          id={announcement.id}
        />
      ))}
    </section>
  );
}