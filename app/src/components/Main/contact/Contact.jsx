"use client";

export default function Contact() {
  return (
    /* La classe space-y-2 réduit l'espace entre chaque élément */
    <div className="flex flex-col space-y-2">
      <h1 className="text-2xl font-bold">Contactez-nous !</h1>
      <p>Merci d'envoyer votre demande par mail à notre Président :</p>
      
      <a href="mailto:jeanpaul.vergote@neuf.fr" className="text-blue-600 hover:underline">
        jeanpaul.vergote@neuf.fr
      </a>
      
      {/* pt-2 ajoute juste un tout petit espace avant cette ligne si nécessaire */}
      <p className="pt-2">À très vite à la table !</p>
    </div>
  );
}
