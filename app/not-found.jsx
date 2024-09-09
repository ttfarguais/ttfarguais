import ButtonGreen from './src/components/UI/ButtonGreen';

export const metadata = {
  title: "T.T.Farguais - 404",
  description: "Oups, la page que vous cherchez n'existe pas. Retournez à l'accueil ou regardez un best-of des meilleurs points de tennis de table.",
};

export default function notFound() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 p-10 min-h-lvh">
      <h1 className="text-5xl font-bold text-center">404 - Page non trouvée</h1>
      <p className="text-center text-xl">En attendant de retrouver votre chemin on vous propose un best-of des meilleurs points du tennis de table.</p>
      <iframe className="w-4/5 md:h-full  aspect-video" width="560" height="315" src="https://www.youtube.com/embed/4A2jbg5cYcU?si=-5RJTDAO5QZ_86hi" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <ButtonGreen title="Retour vers l'accueil" url="/"></ButtonGreen>
    </section>
  )
}