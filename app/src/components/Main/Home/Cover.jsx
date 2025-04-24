"use client";

import { useEffect, useState } from "react";
import cacheBustingUrl from "../../../utils/cacheBustingUrl";

export default function Cover() {
    const [newsFile, setNewsFile] = useState(null);

    const fetchNews = async () => {
        try {
            const response = await fetch("/api/newsFile");
            if (!response.ok) {
                console.error("Erreur lors du fetching : ", response.statusText);
                return;
            }
            const data = await response.json();
            if (data.length > 0) {
                setNewsFile(data[0]?.url);
            } else {
                console.warn("Aucun fichier d'actualités disponible.");
            }
        } catch (error) {
            console.error("Erreur lors du fetching des actualités : ", error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <section>
            <section className="mb-16">
                <div
                    className={`relative flex w-full h-56 sm:h-68 md:h-72 lg:h-96  bg-ttfarguais bg-cover bg-bottom items-center px-8 py-6 sm:p-10 md:p-16 md:justify-center`}
                >
                    <div
                        aria-hidden="true"
                        className="absolute z-0 inset-0 w-full bg-black opacity-60 h-56 sm:h-68 md:h-72 lg:h-96"
                    ></div>
                    <div className="relative text-contrast-1 xl:w-4/6">
                        <h1 className="text-3xl md:text-5xl uppercase mb-2 md:mb-4 font-bold flex flex-col">
                            Tennis de table <span>Farguais</span>
                        </h1>
                        <p className=" mb-2 md:mb-4 md:text-2xl">
                            {" "}
                            Plaisir, Passion, Champions !
                        </p>
                        {newsFile && (
                            <button disabled={newsFile ? false : true}>
                                <a
                                    href={cacheBustingUrl(newsFile)}
                                    target="_blank"
                                    className={` py-2 px-4 border rounded-xl hover:bg-white hover:text-black text-sm transition-all ${
                                        newsFile
                                            ? "text-white border-white"
                                            : "border-green-400 text-green-400"
                                    }`}
                                    aria-label={`Télécharger le fichier des actualités`}
                                >
                                    Consultez les actualités
                                </a>
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </section>
    );
}
