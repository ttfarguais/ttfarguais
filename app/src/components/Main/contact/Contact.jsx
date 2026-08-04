"use client";

export default function Contact() {

  return (
    <div className="flex flex-col items-center m-auto py-4 px-4">

      <h1 className="text-xl text-center font-bold p-4 mb-2">
        Contactez-nous !
      </h1>

      <div className="text-center mt-2">
        Merci d&apos;envoyer votre demande par mail<br/>à notre Président :
      </div>

      <div className="flex flex-col items-center py-2">
        <p className="text-xl font-bold select-all">
          jeanpaul.vergote@neuf.fr
        </p>
      </div>

      <div className="text-center mt-2">
        À très vite à la table !
        <br/>
      </div>

    </div>
  );
}
