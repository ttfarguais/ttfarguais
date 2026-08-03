import Link from "next/link";

export default function ButtonGreen({ title, url }) {
  return (
    <Link 
      href={url}8
      className="px-4 py-2 bg-green-800 text-white font-bold rounded-md transition-colors duration-300 hover:bg-white hover:text-black border-2 border-green-500 active:bg-white active:text-black"
    >
      {title}
    </Link>
  );
}
