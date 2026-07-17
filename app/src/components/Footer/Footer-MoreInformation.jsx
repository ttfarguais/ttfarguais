import Link from "next/link";

export default function FooterMoreInformation() {
  return (
    <div className="flex flex-col items-center gap-2 text-xs sm:text-sm">
      <p>
        &copy; 2024 <strong>T.T. FARGUAIS</strong>
      </p>
      <p>
        Site réalisé par{" "}
        <Link
          href="https://romain-hernandez.com/"
          className="italic"
          target="_blank"
        >
          Roms
        </Link>{" "}
        &{" "}
        <Link
          href="https://www.linkedin.com/in/ugo-matassa/"
          target="_blank"
          className="italic"
        >
          Barenko
        </Link>
      </p>
    </div>
  );
}
