'use client';

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
    tel: "",
    objet: ""
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!regex.test(formData.email)) {
      return; // Empêche la soumission si l'email est invalide
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de la soumission du formulaire");
      }

      const data = await res.json();
      setResponseMessage(data.message);
      setFormData({ nom: "", prenom: "", email: "", message: "", tel: "", objet: "" }); // Reset du formulaire
      setIsSubmitted(false);
    } catch (error) {
      console.error("Erreur:", error);
      setResponseMessage("Erreur lors de la soumission du formulaire");
    }
  };

  const isValid = regex.test(formData.email);

  return (
    <div className="py-8 px-4 flex flex-col items-center m-auto gap-8">
      <h1 className="text-xl font-bold">Contactez-nous !</h1>
      {responseMessage ? <p className="py-2 px-4 bg-solid text-contrast-1 rounded-xl">{responseMessage}</p> : null}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full md:w-4/6 gap-10 py-10 xl:w-3/6"
      >
        <div className="flex flex-col gap-4">
          <p>Si votre demande concerne une inscription, nous vous demandons, afin de traiter au mieux votre demande, de bien vouloir <span className="font-bold">ajouter les informations suivantes</span> :</p>
          <ul>
            <li>- Date de naissance ?</li>
            <li>- Type de Joueur (débutant, loisir ou compétition) ?</li>
            <li>- Votre commune ?</li>
            <li>- Comment avez-vous connu le club ?</li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-col flex w-full gap-2">
            <label className="text-md md:text-lg">Nom : <span className="text-red-600">*</span></label>
            <input
              type="text"
              name="nom"
              id="nom"
              value={formData.nom}
              onChange={handleChange}
              className="border-2 px-4 py-2 bg-contrast-2"
              required
              placeholder="Ping"
            />
          </div>

          <div className="flex-col flex w-full gap-2">
            <label className="text-md md:text-lg">Prénom : <span className="text-red-600">*</span></label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="border-2 px-4 py-2 bg-contrast-2"
              required
              placeholder="Pong"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-col flex gap-2 w-full">
            <label className="text-md md:text-lg">Email : <span className="text-red-600">*</span></label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 px-4 py-2 bg-contrast-2"
              required
              placeholder="ping.pong@gmail.com"
            />
            {isSubmitted && !isValid && (
              <p className="text-red-600 text-sm">Veuillez entrer une adresse email valide (ex: mon.adresse@gmail.com) *</p>
            )}
          </div>

          <div className="flex-col flex gap-2">
            <label className="text-md md:text-lg">Tel : <span className="text-gray-500">(recommandé)</span></label>
            <input
              type="tel"
              name="tel"
              id="tel"
              value={formData.tel}
              onChange={handleChange}
              className="border-2 px-4 py-2 bg-contrast-2"
            />
          </div>
        </div>
        <div className="flex-col flex gap-2">
            <label className="text-md md:text-lg">Objet : <span className="text-red-600">*</span></label>
            <input
              type="text"
              name="objet"
              id="objet"
              value={formData.objet}
              onChange={handleChange}
              required
              className="border-2 px-4 py-2 bg-contrast-2"
              placeholder="Inscription, demande d'informations..."
            />
          </div>

        <div className="flex-col flex gap-2">
          <label className="text-md md:text-lg">Votre message : <span className="text-red-600">*</span></label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="border-2 px-4 py-2 bg-contrast-2 h-40"
            required
            placeholder="Joueur débutant, née le 11/10/2014..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-contrast-3 py-1 px-4 rounded-xl border border-contrast-3 text-sm hover:bg-solid border-solid hover:text-contrast-1 transition-all w-2/4 m-auto"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
