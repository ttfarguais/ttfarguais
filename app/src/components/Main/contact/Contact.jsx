"use client";
import playerType from "../../../data/playerType";

export default function Contact({
  handleChange,
  handleSubmit,
  formData = {},
  validateEmail,
  validatePhone,
  responseMessage,
  isSubmitted,
  isValidStatus
}) {

  const inputClass = (value) =>
    `w-full rounded-xl border px-4 py-3 bg-white transition 
    focus:outline-none focus:ring-4 focus:ring-green-100
    ${
      value
        ? "border-green-500 ring-4 ring-green-100"
        : "border-gray-300"
    }`;

  return (
    <div className="flex flex-col items-center py-10 px-4">

      {/* Titre */}
      <div className="text-center mb-5 max-w-2xl">
        <h1 className="text-xl font-bold text-solid mb-2">
          Envie de nous rej🏓indre ?
        </h1>
      </div>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-5 md:p-8"
      >

        <div className="flex flex-col gap-3">

          {/* Nom / Prénom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Votre nom"
              required
              className={inputClass(formData.lastName)}
            />

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Votre prénom"
              required
              className={inputClass(formData.firstName)}
            />

          </div>


          {/* Âge / Email / Téléphone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">

            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Votre âge"
              required
              className={inputClass(formData.age)}
            />


            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre m@il"
                required
                className={inputClass(formData.email)}
              />

              {isSubmitted && !validateEmail() && (
                <p className="text-red-600 text-sm mt-2">
                  Adresse e-mail invalide.
                </p>
              )}

            </div>


            <div>
              <input
                type="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                placeholder="Votre téléphone"
                required
                className={inputClass(formData.tel)}
              />

              {isSubmitted && !validatePhone() && formData.tel && (
                <p className="text-red-600 text-sm mt-2">
                  Numéro de téléphone invalide.
                </p>
              )}

            </div>

          </div>


          {/* Commune */}
          <input
            type="text"
            name="municipality"
            value={formData.municipality}
            onChange={handleChange}
            placeholder="Votre commune"
            required
            className={inputClass(formData.municipality)}
          />


          {/* Type joueur */}
          <select
            name="typePlayer"
            value={formData.typePlayer}
            onChange={handleChange}
            required
            className={`w-full rounded-xl border px-4 py-3 bg-white transition 
            focus:outline-none focus:ring-4 focus:ring-green-100
            ${
              formData.typePlayer
                ? "border-green-500 ring-4 ring-green-100 text-gray-900"
                : "border-gray-300 text-gray-400"
            }`}
          >
            <option value="">
              Vous êtes un joueur...
            </option>

            {playerType.map((type, index) => (
              <option key={index} value={type.title}>
                {type.title}
              </option>
            ))}

          </select>


          {/* Source */}
          <input
            type="text"
            name="source"
            value={formData.source}
            onChange={handleChange}
            placeholder="Comment avez vous connu le club ?"
            required
            className={inputClass(formData.source)}
          />


          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre demande..."
            rows={6}
            required
            className={`${inputClass(formData.message)} resize-none`}
          />


          {responseMessage && (
            <p
              className={`rounded-xl p-4 text-white text-center ${
                isValidStatus ? "bg-solid" : "bg-red-600"
              }`}
            >
              {responseMessage}
            </p>
          )}


          {/* Bouton */}
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
