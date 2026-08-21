"use client";

import { useEffect, useState } from "react";
import cacheBustingUrl from "../../../utils/cacheBustingUrl";

export default function Cover() {
    const [newsFile, setNewsFile] = useState(null);

    const fetchNews = async () => {
        try {
            const response = await fetch("/api/newsFile");

            if (!response.ok) {
                console.error(
                    "Erreur lors du fetching : ",
                    response.statusText
                );
                return;
            }

            const data = await response.json();

            if (data.length > 0) {
                setNewsFile(data[0]?.url);
            } else {
                console.warn(
                    "Aucun fichier d'actualités disponible."
                );
            }
        } catch (error) {
            console.error(
                "Erreur lors du fetching des actualités : ",
                error
            );
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <section>
            <section className="mb-16">
                <div
                    className="relative flex w-full h-56 sm:h-68 md:h-72 lg:h-96 bg-ttfarguais bg-cover bg-bottom items-center px-8 py-6 sm:p-10 md:p-16 md:justify-center"
                >
                    <div
                        aria-hidden="true"
                        className="absolute z-0 inset-0 w-full bg-black opacity-60 h-56 sm:h-68 md:h-72 lg:h-96"
                    ></div>

                    <div className="relative text-contrast-1 xl:w-4/6">
                        <h1 className="text-3xl md:text-5xl uppercase mb-2 md:mb-4 font-bold flex flex-col">
                            Tennis de table <span>Farguais</span>
                        </h1>

                        <p className="mb-2 md:mb-4 md:text-2xl">
                            Plaisir, Passion, Champions !
                        </p>

                        {newsFile && (
                    <div className="mt-6 flex flex-col items-center">
    <span className="mb-2 rounded-full bg-solid px-3 py-1 text-xs font-bold text-white shadow-md">
        NOUVEAU
    </span>

    <a
        href={newsFile ? cacheBustingUrl(newsFile) : undefined}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultez les actualités"
        className={`inline-block py-2 px-5 border rounded-xl text-sm font-semibold transition-all duration-300 ${
            newsFile
                ? "text-white border-white bg-solid hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg"
                : "border-gray-400 text-gray-400 cursor-not-allowed pointer-events-none"
        }`}
    >
        Consultez les actualités
    </a>
</div>
                        )}
                    </div>
                </div>
            </section>
        </section>
    );
}
