"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Gellery() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch(`/api/gallery/`);
        if (!res.ok) {
          throw new Error("Erreur lors de la récupération des images");
        }
        const data = await res.json();
        setPictures(data);
      } catch (error) {
        console.error(error.message);
        setError("Impossible de charger les images. Veuillez réessayer plus tard.");
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  if (loading) {
    return (
      <section className="p-6 text-justify mb-10 mt-6 xl:my-10 xl:w-[80%] mx-auto 2xl:w-3/4">
        <p>Chargement en cours...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="p-6 text-justify mb-10 mt-6 xl:my-10 xl:w-[80%] mx-auto 2xl:w-3/4">
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="p-6 text-justify mb-10 mt-6 xl:my-10 xl:w-[80%] mx-auto 2xl:w-3/4">
      <div className="w-full flex flex-wrap gap-4 items-center justify-center">
        {pictures.length > 0 ? (
          pictures.map((picture, index) => (
            <div
              key={index}
              className="flex items-center justify-center sm:w-52 sm:h-52 md:w-70 md:h-70 2xl:w-80 2xl:h-80 overflow-hidden relative"
            >
              <Link
                href={picture.url}
                aria-label="Voir la photo en grand"
                className="relative w-full h-full overflow-hidden cursor-pointer"
                target="_blank"
              >
                <Image
                  src={picture.url}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                  alt={`Photo du club T.T. Farguais`}
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-lg">Afficher la photo</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Aucune photo disponible pour l&apos;instant.</p>
        )}
      </div>
    </section>
  );
}