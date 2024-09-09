
import Actu from '../../src/components/Main/Articles/Actu/Actu';

export const metadata = {
  title: "T.T. Farguais - Actualités",
  description:
    "Les T.T. Farguais plus beaux que jamais ! Découvrez notre nouvelle identité visuelle et notre nouveau site web pour la rentrée 2025.",
};

export default function ArticlePage({}) {

  return (
    <>
    <head>
    <link rel="canonical" href="https://www.ttfarguais.fr/article/actu" />
    </head>
    <Actu></Actu>
    </>
  );
}
