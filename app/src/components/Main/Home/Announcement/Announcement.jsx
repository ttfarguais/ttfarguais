import AnnouncementCard from "./AnnouncementCard";

import newsArticles from "../../../../data/newsArticles";


export default function Announcement() {
  return (
    <section className="bg-contrast-2 border-t flex flex-col items-center py-6">
      {newsArticles.map((announcement, index) => (
        <AnnouncementCard 
          src={announcement.src}
          key={index}
          url={announcement.url}
          alt={announcement.alt}
          title={announcement.title}
          description={announcement.description}
          isLast={index === announcement.length - 1}
        />
      ))}
    </section>
  );
}

