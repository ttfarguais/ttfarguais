"use client";

import { useState } from "react";

import playerType from "../../../data/playerType";

import {
  FaUser,
  FaBirthdayCake,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaMedal,
  FaQuestionCircle,
  FaCommentDots,
} from "react-icons/fa";

export default function Contact({
  handleChange,
  handleSubmit,
  formData = {},
  validateEmail,
  responseMessage,
  isSubmitted,
  isValidStatus,
}) {

  const [touched, setTouched] = useState({});

 const validatePhone = () => {
  return /^(\+33|0)[1-9](\d{8})$/.test(formData.tel?.trim() || "");
};
  
  const handleBlur = (e) => {
  setTouched((prev) => ({
    ...prev,
    [e.target.name]: true,
  }));
};

  const validateAge = () => {
  const age = Number(formData.age);

  return !isNaN(age) && age >= 8 && age <= 90;
};

  const inputClass = (value) =>
    `w-full rounded-xl border px-4 py-3 bg-white transition
    focus:outline-none focus:ring-4 focus:ring-green-100
    ${
      value
        ? "border-green-500 ring-4 ring-green-100"
        : "border-gray-300 focus:border-green-500"
    }`;

  return (
   <div className="flex flex-col items-center m-auto py-4 px-4">

    {/* Titre */}
    <h1 className="text-xl text-center font-bold p-4 mb-4">
      Envie de nous rej🏓indre ?
    </h1>

    {/* Message temporaire */}
    <div className="w-full max-w-3xl mb-6 rounded-xl border border-orange-300 bg-orange-50 p-4 text-center">
      <p className="font-semibold text-orange-800">
        ⚠️ Le formulaire rencontre ponctuellement un ptit soucis...
      </p>
      <p className="mt-2 text-orange-700">
        En suivant les champs du formulaire,<br/>Merci d&apos;envoyer votre demande directement par mail à notre Président :
      </p>

      <p className="mt-3 text-lg font-bold select-all">
        jeanpaul.vergote@neuf.fr
      </p>

      <p className="mt-3 text-orange-700">
        À très vite à la table !
      </p>
    </div>
      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-5 md:p-8"
      >

        <div className="flex flex-col gap-5">

          {/* Nom / Prénom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">

            <div className="relative">
              <FaUser
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  formData.lastName ? "text-green-500" : "text-gray-400"
                }`}
              />

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Votre Nom"
                required
                autoFocus
                className={`${inputClass(formData.lastName)} pl-12`}
              />
           
              {touched.lastName && !formData.lastName && (
  <p className="text-red-600 text-sm mt-2">
    Merci de renseigner.
  </p>)}
           
            </div>

            <div className="relative">
              <FaUser
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  formData.firstName ? "text-green-500" : "text-gray-400"
                }`}
              />

              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Prénom"
                required
                className={`${inputClass(formData.firstName)} pl-12`}
              />

  {touched.firstName && !formData.firstName && (
  <p className="text-red-600 text-sm mt-2">
    Merci de renseigner.
  </p>)}
  </div>
          </div>

          {/* Age / Email / Téléphone */}
  <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">

            <div className="relative">
              <FaBirthdayCake
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  formData.age ? "text-green-500" : "text-gray-400"
                }`}
              />

              <input
  type="number"
  name="age"
  placeholder="Âge"
  value={formData.age || ""}
  onChange={handleChange}
  onBlur={handleBlur}
  min="8"
  max="90"
  step="1"
  required
  className={`${inputClass(formData.age)} pl-12`}
/>

{(touched.age || isSubmitted) && !validateAge() && (
  <p className="text-red-600 text-sm mt-2">
    Entre 8 et 90 ans ce serait bien...
  </p>
)} 
</div>

            <div className="relative">

              <FaEnvelope
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  formData.email ? "text-green-500" : "text-gray-400"
                }`}
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="E-m@il"
                required
                className={`${inputClass(formData.email)} pl-12`}
              />

           {(touched.email || isSubmitted) && !validateEmail() && (
    <p className="text-red-600 text-sm mt-2">
    E-m@il invalide.
  </p>
)}

            </div>

            <div className="relative">

              <FaPhone
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  formData.tel ? "text-green-500" : "text-gray-400"
                }`}
              />

              <input
                type="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Téléphone"
                required
                className={`${inputClass(formData.tel)} pl-12`}
              />
{(touched.tel || isSubmitted) && !validatePhone() && (
   <p className="text-red-600 text-sm mt-2">
    Numéro invalide.
  </p>
)}
 </div>
            </div>

            {/* Commune */}
          <div className="relative">

            <FaMapMarkerAlt
              className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                formData.municipality ? "text-green-500" : "text-gray-400"
              }`}
            />

            <input
              type="text"
              name="municipality"
              value={formData.municipality}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Commune"
              required
              className={`${inputClass(formData.municipality)} pl-12`}
            />
          
            {touched.municipality && !formData.municipality && (
  <p className="text-red-600 text-sm mt-2">
    Merci de renseigner.
  </p>)}
          </div>

          {/* Type de joueur */}
          <div className="relative">

            <FaMedal
              className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                formData.typePlayer ? "text-green-500" : "text-gray-400"
              }`}
            />

            <select
              name="typePlayer"
              value={formData.typePlayer}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`${inputClass(formData.typePlayer)} pl-12 appearance-none ${
                formData.typePlayer ? "text-gray-900" : "text-gray-400"
              }`}
            >
              <option value="">Vous êtes un Joueur...</option>

              {playerType.map((type, index) => (
                <option key={index} value={type.title}>
                  {type.title}
                </option>
              ))}
            </select>
  {touched.typePlayer && !formData.typePlayer && (
  <p className="text-red-600 text-sm mt-2">
    Merci de renseigner.
  </p>)}
    
</div>

          {/* Source */}
          <div className="relative">

            <FaQuestionCircle
              className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                formData.source ? "text-green-500" : "text-gray-400"
              }`}
            />

            <input
              type="text"
              name="source"
              value={formData.source}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Comment avez-vous connu le Club ?"
              required
              className={`${inputClass(formData.source)} pl-12`}
            />

    {touched.source && !formData.source && (
  <p className="text-red-600 text-sm mt-2">
    Merci de renseigner.
  </p>)}

          </div>

          {/* Message */}
          <div className="relative">

            <FaCommentDots
              className={`absolute left-4 top-5 ${
                formData.message ? "text-green-500" : "text-gray-400"
              }`}
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Votre demande..."
              rows={6}
              required
              className={`${inputClass(formData.message)} pl-12 resize-none`}
            />
  
            {touched.message && !formData.message && (
  <p className="text-red-600 text-sm mt-2">
    Merci de renseigner.
  </p>)}
          </div>

          {responseMessage && (
            <p
              className={`rounded-xl p-4 text-white text-center ${
                isValidStatus ? "bg-solid" : "bg-red-600"
              }`}
            >
              {responseMessage}
            </p>
          )}

          <button
            type="submit"
            className="mx-auto block rounded-full bg-solid text-white px-10 py-3 text-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Envoyer m🏓n message
          </button>

        </div>

      </form>

    </div>
  );
}
