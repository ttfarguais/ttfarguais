import AnnouncementCard from "./AnnouncementCard";

const announcements = [
  {url: "/test", alt: "Club de tennis de table Farguais", title: "Championnats Régionaux", description: "Rejoignez-nous pour les championnats régionaux ce samedi !", src:"/champion.jpg"},
  {url: "/inscription", alt: "Club de tennis de table Farguais", title: "Nouvelle Saison", description: "Inscrivez-vous pour la nouvelle saison dès maintenant !", src:"/raquette.jpg"},
  {url: "/test3", alt: "Club de tennis de table Farguais", title: "Tournoi Amical", description: "Participez à notre tournoi amical et gagnez des prix !", src:"/club.jpg"},
]


export default function Announcement() {
  return (
    <section className="bg-contrast-2 border-t flex flex-col items-center ">
      {announcements.map((announcement, index) => (
        <AnnouncementCard 
          src={announcement.src}
          key={index}
          url={announcement.url}
          alt={announcement.alt}
          title={announcement.title}
          description={announcement.description}
        />
      ))}
    </section>
  );
}