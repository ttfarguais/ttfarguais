import Image from "next/image";

export default function ImageAndClick({ src, alt, href, actionTitle }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer relative w-full"
    >
      <div className="relative w-full">
        <Image
          src={src}
          width={500}
          height={500}
          alt={alt}
          className="object-contain w-full"
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-white text-lg">{actionTitle}</p>
        </div>
      </div>
    </a>
  );
}
