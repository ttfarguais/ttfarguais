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
  const borderClass = isLast ? "" : "border-b";

  return (
    <article
      className={`w-full max-w-full flex flex-col sm:flex-row items-center p-4 ${borderClass} md:w-4/6`}
    >
      <div className="w-full sm:w-2/4 h-48 flex items-center justify-center mb-4">
        <Image
          className="max-w-full max-h-full rounded-xl object-contain"
          src={src}
          alt={alt}
          width={500}
          height={500}
        />
      </div>

      <div className="w-full sm:w-2/4 sm:p-4">
        <h3 className="font-bold uppercase mb-4">
          {title}
        </h3>

        <p className="text-sm mb-4 text-justify">
          {description}
        </p>

        <div className="mt-6">
          <ButtonGreen title="En savoir plus" url={url} />
        </div>
      </div>
    </article>
  );
}
