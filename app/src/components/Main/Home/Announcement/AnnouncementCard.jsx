import Image from "next/image";
import ButtonGreen from "../../../UI/ButtonGreen";

export default function AnnouncementCard({ src, alt, title, description, url, isLast }) {
  const borderClass = isLast ? "" : "border-b";

  return (
  <article
    className={`w-full max-w-full flex flex-col sm:flex-row p-4 ${borderClass} md:w-4/6`}
  >

    <div className="block w-full h-48 sm:h-auto sm:w-2/4 relative mb-4 sm:mb-0 flex justify-center">
      <div className="rounded-xl overflow-hidden">
        <Image
          src={src}
          width={200}
          height={200}
          alt={alt}
          className="object-contain rounded-xl"
        />
      </div>
    </div>

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
