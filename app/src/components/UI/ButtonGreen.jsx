import Link from "next/link";

export default function ButtonInverse({ title, url }) {
  return (
    <Link 
      href={url}
      className="px-4 py-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300 rounded-md font-medium"
    >
      {title}
    </Link>
  );
}
