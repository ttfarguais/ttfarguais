import Image from "next/image";
import ButtonGreen from "../../../UI/ButtonGreen";

export default function AnnouncementCard({
  src,
  alt,
  title,
  description,
  url,
  isLast,
}) {
  // Condition pour déterminer s'il s'agit du dernier élément
  const borderClass = isLast ? "" : "border-b";

  return (
    <article
      className={`w-full max-w-full flex flex-col sm:flex-row p-4 ${borderClass} md:w-4/6`}
    >
      {/* Image */}
      <div className="w-full sm:w-2/4 flex justify-center mb-4 sm:mb-0">
        <Image
          src={src}
          width={200}
          height={200}
          alt={alt}
          className="rounded-xl object-contain"
        />
      </div>

      {/* Contenu */}
      <div className="sm:w-2/4">
        <h2 className="font-bold">
          {title}
        </h2>

        <p>
          {description}
        </p>

        <ButtonGreen title="Lire l'article" url={url} />
      </div>
    </article>
  );
}
