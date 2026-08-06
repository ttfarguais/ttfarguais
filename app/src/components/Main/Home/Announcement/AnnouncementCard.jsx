import Image from "next/image";
import ButtonGreen from "../../../UI/ButtonGreen";

export default function AnnouncementCard({ src, alt, title, description, url, isLast }) {
  const borderClass = isLast ? "" : "border-b";

  return (
    <article
      className={`w-full max-w-full flex flex-col sm:flex-row p-4 ${borderClass} md:w-4/6`}
    >
      {/* Image */}
      <div className="block w-full h-48 sm:h-auto sm:w-2/4 relative mb-4 sm:mb-0 flex justify-center">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={src}
            width={300}
            height={200}
            alt={alt}
            className="rounded-xl object-contain"
          />
        </div>
      </div>

      {/* Contenu */}
      <div className="flex flex-col sm:w-2/4 sm:pl-6">
        <h2 className="font-bold text-lg">
          {title}
        </h2>

        <p className="mt-2">
          {description}
        </p>

        <div className="mt-4">
          <ButtonGreen title="Lire l'article" url={url} />
        </div>
      </div>
    </article>
  );
}
