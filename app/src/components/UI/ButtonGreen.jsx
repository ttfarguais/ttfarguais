import Link from "next/link";

export default function ButtonGreen({ title, url }) {
  return (
    <Link
      href={url}
      aria-label="lire l'article"
      className="
        inline-block
        py-1
        px-4
        rounded-xl
        border
        border-solid
        border-contrast-3
        text-contrast-3
        text-sm
        font-bold
        hover:bg-solid
        hover:text-contrast-1
        transition-all
      "
    >
      {title}
    </Link>
  );
}
