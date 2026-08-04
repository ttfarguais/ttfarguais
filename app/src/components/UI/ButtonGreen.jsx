import Link from "next/link";

export default function ButtonGreen({ title, url, className = "" }) {
  return (
    <Link 
      href={url}
      // On fusionne les classes par défaut avec les classes optionnelles (pour les marges/alignements)
      className={`px-4 py-2 bg-[#166534] text-white font-bold rounded-xl transition-colors duration-300 hover:bg-white hover:text-black hover:border-2 hover:border-[#0E2B1A] active:bg-white active:text-black ${className}`}
    >
      {title}
    </Link>
  );
}
