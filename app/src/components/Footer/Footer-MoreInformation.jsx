import React from "react";

export default function FooterMoreInformation() {
  return (
    <div className="flex flex-col items-center gap-2 text-xs sm:text-sm">
      <p>
        &copy; 2024 <strong>T.T. Farguais</strong>
      </p>
      <p>
        Site réalisé par{" "}
        <a
          href="https://romain-hernandez.com/"
          className="italic"
          target="_blank"
        >
          Roms
        </a>{" "}
        &{" "}
        <a
          href="https://www.linkedin.com/in/ugo-matassa/"
          target="_blank"
          className="italic"
        >
          Barenko
        </a>
      </p>
    </div>
  );
}
