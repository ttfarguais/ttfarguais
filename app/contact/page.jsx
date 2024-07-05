"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      setFormData({ nom: "", prenom: "", email: "", message: "" }); // Reset du formulaire
    } catch (error) {
      console.error("Erreur:", error);
      setResponseMessage("Erreur lors de la soumission du formulaire");
    }
  };

  return (
    <div className="py-8 px-4 flex flex-col items-center m-auto gap-8 md:py-20">
      <h1 className="text-xl font-bold">Contactez-nous !</h1>
      {responseMessage ? <p className="py-2 px-4 bg-solid text-contrast-1 rounded-xl">{responseMessage}</p> : null}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-4/6 gap-10 md:py-20 xl:w-3/6"
      >
        <div className="flex flex-col justify-between gap-8">
          <div className="flex-col flex w-full gap-2">
            <label className="text-md md:text-lg">Nom:</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="border-2 px-4 py-2 bg-contrast-2"
              required
            />
          </div>

          <div className="flex-col flex w-full gap-2">
            <label className="text-md md:text-lg">Prénom:</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="border-2 px-4 py-2 bg-contrast-2"
              required
            />
          </div>
        </div>

        <div className="flex-col flex gap-2">
          <label className="text-md md:text-lg">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 px-4 py-2 bg-contrast-2"
            required
          />
        </div>

        <div className="flex-col flex gap-2">
          <label className="text-md md:text-lg">Votre message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-2 px-4 py-2 bg-contrast-2 h-40"
            required
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
