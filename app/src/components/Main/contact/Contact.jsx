"use client";

import { useState } from "react";

export default function Contact() {
  const typesPlayers = [
    { title: "Adultes - Compétiteurs"},
    { title: "Adultes - Compétiteurs + entrainements"},
    { title: "Adultes - Loisirs"},
    { title: "Adultes - Loisirs + entrainements"},
    { title: "Jeunes - Compétiteurs"},
    { title: "Jeunes - Loisirs"},
  ];

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
    tel: "",
    birthdate: "",
    municipality: "",
    typePlayer: "",
    objet: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidStatus, setIsValidStatus] = useState(null); // Update state for isValidStatus
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
      return; // Prevent submission if email is invalid
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
      setIsValidStatus(res.ok);
      // console.log(isValidStatus)
      setResponseMessage(data.message);
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        message: "",
        tel: "",
        objet: "",
      }); // Reset form
      setIsSubmitted(false);
    } catch (error) {
      console.error("Erreur:", error);
      setIsValidStatus(false); // Set isValidStatus to false in case of error
      setResponseMessage("Erreur lors de la soumission du formulaire");
    }
  };

  const isValid = regex.test(formData.email);

  return (
    <div className="flex flex-col items-center m-auto gap-8 py-6">
      <h1 className="text-xl text-center font-bold p-4 mb-8">
        Contactez-nous !
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full md:w-4/6 gap-10 py-10 xl:w-3/6 p-6"
      >
        <div className="flex flex-col gap-4">
          <p className="text-lg">
            Aidez-nous à nous améliorer en nous disant comment vous nous avez
            connus. Votre avis compte pour nous !
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-col flex w-full gap-2">
            <label className="text-md md:text-lg">
              Nom : <span className="text-red-600">*</span>
            </label>
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
            <label className="text-md md:text-lg">
              Prénom : <span className="text-red-600">*</span>
            </label>
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
            <label className="text-md md:text-lg">
              Email : <span className="text-red-600">*</span>
            </label>
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
              <p className="text-red-600 text-sm">
                Veuillez entrer une adresse email valide (ex:
                mon.adresse@gmail.com) *
              </p>
            )}
          </div>

          <div className="flex-col flex gap-2">
            <label className="text-md md:text-lg">
              Tel : <span className="text-gray-500">(recommandé)</span>
            </label>
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
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-col flex gap-2">
            <label className="text-md md:text-lg">Date de naissance :</label>
            <input
              type="date"
              name="birthdate"
              id="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className="border-2 px-4 py-2 bg-contrast-2"
            />
          </div>

          <div className="flex-col flex gap-2 w-full">
            <label className="text-md md:text-lg">Commune de résidence :</label>
            <input
              type="text"
              name="municipality"
              id="municipality"
              value={formData.municipality}
              onChange={handleChange}
              className="border-2 px-4 py-2 bg-contrast-2"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
          <div className="flex-col flex gap-2 w-full">

          <label className="text-md md:text-lg">
            Objet : <span className="text-red-600">*</span>
          </label>
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
            <label className="text-md md:text-lg">Type de joueur :</label>
            <select
              type="select"
              name="typePlayer"
              id="typePlayer"
              value={formData.typesPlayer}
              onChange={handleChange}
              className="border-2 px-4 py-2 bg-contrast-2"
            >
              <option value=""></option>
              {typesPlayers.map((type, index) => (
                <option key={index} value={type.title}>
                  {type.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex-col flex gap-2">
          <label className="text-md md:text-lg">
            Votre message : <span className="text-red-600">*</span>
          </label>
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
        {responseMessage ? (
          <p
            className={`py-2 px-4 ${
              isValidStatus === true ? "bg-solid" : "bg-red-600"
            } text-center text-contrast-1 rounded-xl`}
          >
            {responseMessage}
          </p>
        ) : null}

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
