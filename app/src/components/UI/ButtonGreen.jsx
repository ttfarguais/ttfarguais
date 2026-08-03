import Link from "next/link";

export default function ButtonGreen({ title, url }) {
  return (
    <Link 
      href={url}
      className="px-4 py-2 bg-[#15803d] text-white font-bold rounded-full transition-colors duration-300 hover:bg-white hover:text-black active:bg-white active:text-black"
    >
      {title}
    </Link>
  );
}
