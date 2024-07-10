import AnnouncementCard from "./AnnouncementCard";

const announcements = [
  {url: "/article/actu", alt: "Actualité club de tennis de table Farguais", title: "T.T. Farguais, la refonte graphique", description: "Le club T.T. Farguais se met à jour ! Un changement important au sein de notre club trentenaire.", src:"/imgClub/raquette.jpg"},
  {url: "/inscription", alt: "Club de tennis de table Farguais", title: "Nouvelle Saison 2024/2025", description: "Inscrivez-vous dés maintenant et rejoignez le T.T. Farguais !", src:"/imgClub/club.jpg"},
  {url: "/article/evenements/anniversaire", alt: "30 ans d'histoire", title: "30 ans d'histoire", description: "Déjà 30 ans que le T.T Farguais existe, alors nous nous devons de fêter ça autour de quelques ping et deux, trois pong.", src:"/imgClub/birthday.jpg"},
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

