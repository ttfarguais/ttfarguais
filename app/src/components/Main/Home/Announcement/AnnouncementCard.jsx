import Image from "next/image";
import ButtonGreen from "../../../UI/ButtonGreen";

export default function AnnouncementCard({ src, alt, title, description, url, isLast }) {
  // Condition pour déterminer s'il s'agit du dernier élément
  const borderClass = isLast ? "" : "border-b";

  return (
    <article className={`flex p-4 w-full ${borderClass} sm:min-h-56 md:w-4/6`}>
      <div className="hidden sm:block w-2/4 relative">
        <Image
          className="absolute top-0 left-0 h-full w-full object-cover"
          src={src}
          alt={alt}
          width={500}
          height={500}
        />
      </div>
      <div className="p-4 sm:w-2/4">
        <h3 className="font-bold uppercase mb-4">{title}</h3>
        <p className="text-sm mb-4 text-justify">{description}</p>
        <ButtonGreen title="En savoir plus" url={url}></ButtonGreen>
      </div>
    </article>
  );
}