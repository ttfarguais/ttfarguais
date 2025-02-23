import Gallery from "../src/components/Main/Gallery/Gallery";

export const metadata = {
    title: "T.T. Farguais - Galerie",
    description:
        "Des moments capturés, des souvenirs partagés. Retrouvez toutes les photos de nos événements.",
};

export default function GalleryPage() {
    return (
        <>
            <head>
                <link
                    rel="canonical"
                    href="https://www.ttfarguais.fr/galerie"
                />
            </head>
            <Gallery />
        </>
    );
}