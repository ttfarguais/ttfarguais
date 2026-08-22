"use client";

import { useEffect, useRef, useState } from "react";
import cacheBustingUrl from "../../../utils/cacheBustingUrl";

export default function Cover() {
    const [newsFile, setNewsFile] = useState(null);
    const [buttonX, setButtonX] = useState(0);

    const containerRef = useRef(null);
    const buttonRef = useRef(null);

    const animationRef = useRef(null);
    const directionRef = useRef(1);
    const positionRef = useRef(0);
    const lastTimeRef = useRef(null);

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

    useEffect(() => {
        if (!newsFile) return;

        const animate = (time) => {
            if (!lastTimeRef.current) {
                lastTimeRef.current = time;
            }

            const delta = time - lastTimeRef.current;
            lastTimeRef.current = time;

            if (
                containerRef.current &&
                buttonRef.current
            ) {
                const containerWidth =
                    containerRef.current.offsetWidth;

                const buttonWidth =
                    buttonRef.current.offsetWidth;

                const maxX = Math.max(
                    0,
                    containerWidth - buttonWidth
                );

                const speed = 0.08;

                positionRef.current +=
                    directionRef.current *
                    speed *
                    delta;

                if (positionRef.current >= maxX) {
                    positionRef.current = maxX;
                    directionRef.current = -1;
                }

                if (positionRef.current <= 0) {
                    positionRef.current = 0;
                    directionRef.current = 1;
                }

                setButtonX(positionRef.current);
            }

            animationRef.current =
                requestAnimationFrame(animate);
        };

        animationRef.current =
            requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(
                    animationRef.current
                );
            }

            lastTimeRef.current = null;
        };
    }, [newsFile]);

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

                    <div
                        ref={containerRef}
                        className="relative text-contrast-1 xl:w-4/6 w-full"
                    >
                        <h1 className="text-3xl md:text-5xl uppercase mb-2 md:mb-4 font-bold flex flex-col">
                            Tennis de table{" "}
                            <span>Farguais</span>
                        </h1>

                        <p className="mb-2 md:mb-4 md:text-2xl">
                            Plaisir, Passion, Champions !
                        </p>

                        {newsFile && (
                            <div className="w-full mt-6 overflow-hidden">
                                <a
                                    ref={buttonRef}
                                    href={cacheBustingUrl(
                                        newsFile
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Consultez les actualités"
                                   className="inline-block py-2 px-4 border rounded-xl text-sm text-white border-white transition-all sm:hover:bg-white sm:hover:text-black"
                                    style={{
                                        transform: `translateX(${buttonX}px)`,
                                    }}
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
